// Bakong KHQR Auto Payment & Coin System
export const BAKONG_CONFIG = {
  baseUrl: 'https://www.payment-system.dev/api/v1/',
  apiToken: '6441057055:J0qQgzaAhnuMrDOh6xnYv68N5DMgI0CNifu',
  account: 'sovanmony_soy@bkrt',
  merchantName: 'MN DIGITAL STORE',
  coinPerDollar: 100, // 10 coins = $0.10, 100 coins = $1.00
  costPerExport: 10,  // 10 coins per export ($0.10)
  pollIntervalMs: 5000 // Optimized: poll every 5s instead of 3s to reduce API spam
};

// Payment State
export const paymentState = {
  coins: parseInt(localStorage.getItem('cv_studio_coins') || '0', 10),
  activePollInterval: null,
  currentMd5: null,
  pendingActionAfterPay: null, // 'pdf' | 'png' | null
  currentTimerInterval: null,
  consecutiveErrors: 0
};

// In-memory cache for generated QR codes to prevent spamming when user clicks packages
// Key: amountUsd, Value: { data, expiresAt }
const qrCache = new Map();
const QR_CACHE_DURATION_MS = 3.5 * 60 * 1000; // 3.5 minutes cache

// Update and persist coin balance
export function updateCoinBalance(amountToAdd = 0) {
  paymentState.coins = Math.max(0, paymentState.coins + amountToAdd);
  localStorage.setItem('cv_studio_coins', paymentState.coins.toString());
  
  const coinElements = document.querySelectorAll('.user-coin-val');
  coinElements.forEach(el => {
    el.innerText = paymentState.coins;
  });
}

// Generate KHQR Code via API (with Caching)
export async function generateBakongQR(amountUsd) {
  const cacheKey = amountUsd.toFixed(2);
  const cached = qrCache.get(cacheKey);

  // Return cached QR if still valid
  if (cached && Date.now() < cached.expiresAt) {
    return cached.data;
  }

  const url = `${BAKONG_CONFIG.baseUrl}?type=generate_qr&api_token=${encodeURIComponent(BAKONG_CONFIG.apiToken)}&amount=${cacheKey}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    if (json.code === 201 && json.data && json.data.length > 0) {
      const qrData = json.data[0];
      // Cache valid QR code
      qrCache.set(cacheKey, {
        data: qrData,
        expiresAt: Date.now() + QR_CACHE_DURATION_MS
      });
      return qrData;
    } else {
      throw new Error(json.message || 'Failed to generate QR code');
    }
  } catch (err) {
    console.error('QR Generation Error:', err);
    throw err;
  }
}

// Check MD5 status for payment confirmation
export async function checkPaymentStatus(md5) {
  const url = `${BAKONG_CONFIG.baseUrl}?type=check_md5&api_token=${encodeURIComponent(BAKONG_CONFIG.apiToken)}&md5=${encodeURIComponent(md5)}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    paymentState.consecutiveErrors = 0;
    return json;
  } catch (err) {
    paymentState.consecutiveErrors++;
    console.warn(`Payment check warning (${paymentState.consecutiveErrors}):`, err);
    return { status: 'pending' };
  }
}

// Start polling for payment completion with visibility guard & rate limit
export function startPaymentPolling(md5, coinsPurchased, onSuccessCallback) {
  stopPaymentPolling();
  paymentState.currentMd5 = md5;
  paymentState.consecutiveErrors = 0;

  paymentState.activePollInterval = setInterval(async () => {
    // 1. Skip polling if page/tab is currently in background/hidden
    if (document.hidden) {
      return;
    }

    // 2. Pause if too many consecutive network errors
    if (paymentState.consecutiveErrors >= 5) {
      console.warn('Paused payment polling due to repeated network errors');
      return;
    }

    try {
      const result = await checkPaymentStatus(md5);
      
      if (result.status === 'success') {
        stopPaymentPolling();
        
        // Remove from cache once paid
        for (const [key, val] of qrCache.entries()) {
          if (val.data.md5 === md5) qrCache.delete(key);
        }

        // Add coins to balance
        updateCoinBalance(coinsPurchased);
        
        if (onSuccessCallback) {
          onSuccessCallback(result);
        }
      } else if (result.status === 'expired' || result.status === 'failed') {
        stopPaymentPolling();
        const statusEl = document.getElementById('qr-payment-status-text');
        if (statusEl) {
          statusEl.innerHTML = `<span style="color: #ef4444;"><i class="fa-solid fa-circle-xmark"></i> QR Code នេះបានផុតកំណត់ ឬបរាជ័យ</span>`;
        }
      }
    } catch (e) {
      console.error('Polling error:', e);
    }
  }, BAKONG_CONFIG.pollIntervalMs);
}

// Stop any active polling
export function stopPaymentPolling() {
  if (paymentState.activePollInterval) {
    clearInterval(paymentState.activePollInterval);
    paymentState.activePollInterval = null;
  }
  if (paymentState.currentTimerInterval) {
    clearInterval(paymentState.currentTimerInterval);
    paymentState.currentTimerInterval = null;
  }
}

// Global listener: When user switches back to tab, check once immediately if polling is active
document.addEventListener('visibilitychange', async () => {
  if (!document.hidden && paymentState.activePollInterval && paymentState.currentMd5) {
    try {
      await checkPaymentStatus(paymentState.currentMd5);
    } catch (_) {}
  }
});
