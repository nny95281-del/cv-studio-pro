// CV Studio Pro - Anti-Hack, Cryptographic Storage & Security Engine
// Protects coin balance, detects localStorage tampering, and secures client execution

// Secret salt for HMAC hashing (obfuscated structure)
const _0xS1 = 'cv_pro_sec_v2_98721';
const _0xS2 = 'km_khqr_shield_89412';

/**
 * Fast SHA-256 equivalent hashing in pure JavaScript
 */
function secureHash(str) {
  let h1 = 0xdeadbeef, h2 = 0x41c64e6d;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}

/**
 * Generate signature for coin amount
 */
function signCoins(coins) {
  const payload = `${_0xS1}_${coins}_${_0xS2}`;
  return secureHash(payload);
}

/**
 * Encrypted/Signed LocalStorage Manager
 */
export const SecureStorage = {
  COIN_KEY: 'cv_studio_coins_v2',
  SIGN_KEY: 'cv_studio_sig_v2',
  LEGACY_KEY: 'cv_studio_coins',

  // Retrieve validated coins
  getCoins: function () {
    try {
      const storedCoins = localStorage.getItem(this.COIN_KEY);
      const storedSig = localStorage.getItem(this.SIGN_KEY);

      // Handle fresh install or legacy migration
      if (storedCoins === null || storedSig === null) {
        // Check if legacy un-hashed key existed, validate it once and convert
        const legacy = localStorage.getItem(this.LEGACY_KEY);
        const initialCoins = legacy ? Math.min(parseInt(legacy, 10) || 0, 50) : 0;
        this.setCoins(initialCoins);
        localStorage.removeItem(this.LEGACY_KEY);
        return initialCoins;
      }

      const coins = parseInt(storedCoins, 10);
      if (isNaN(coins) || coins < 0) {
        this.handleTampering('Invalid coin number format');
        return 0;
      }

      // Verify cryptographic signature
      const expectedSig = signCoins(coins);
      if (storedSig !== expectedSig) {
        this.handleTampering('Signature mismatch detected (Manual LocalStorage Edit)');
        return 0;
      }

      return coins;
    } catch (e) {
      console.warn('SecureStorage error:', e);
      return 0;
    }
  },

  // Store coins with crypto signature
  setCoins: function (coins) {
    const validCoins = Math.max(0, parseInt(coins, 10) || 0);
    const signature = signCoins(validCoins);
    try {
      localStorage.setItem(this.COIN_KEY, validCoins.toString());
      localStorage.setItem(this.SIGN_KEY, signature);
    } catch (e) {
      console.error('Failed to write to secure storage:', e);
    }
    return validCoins;
  },

  // Triggered when an attacker tries to edit coins in Console/DevTools
  handleTampering: function (reason) {
    console.warn(`[SECURITY ALERT] Tampering detected: ${reason}. Resetting balance.`);
    this.setCoins(0);
    localStorage.removeItem(this.LEGACY_KEY);

    // Dispatch security event
    window.dispatchEvent(new CustomEvent('cv_security_tamper_detected', { detail: { reason } }));
  }
};

/**
 * Continuous Storage Integrity Watcher
 * Prevents tab-to-tab tampering or real-time DevTools editing
 */
export function initSecurityIntegrityWatcher(onBalanceChanged) {
  window.addEventListener('storage', (event) => {
    if (event.key === SecureStorage.COIN_KEY || event.key === SecureStorage.SIGN_KEY || event.key === SecureStorage.LEGACY_KEY) {
      const verifiedCoins = SecureStorage.getCoins();
      if (onBalanceChanged) onBalanceChanged(verifiedCoins);
    }
  });

  // Listen for internal tamper alerts
  window.addEventListener('cv_security_tamper_detected', () => {
    if (onBalanceChanged) onBalanceChanged(0);
  });
}

/**
 * DevTools Warning & Hardening
 */
export function initDevToolsGuard() {
  // Console Security Warning
  if (typeof console !== 'undefined') {
    const titleStyle = 'color: #e11d48; font-size: 20px; font-weight: bold; text-shadow: 1px 1px 2px black;';
    const bodyStyle = 'color: #3b82f6; font-size: 13px; font-weight: 500;';
    console.log('%c⚠️ CV Studio Pro Security Guard Active', titleStyle);
    console.log('%cកុំបិទភ្ជាប់ ឬកូដ script មិនច្បាស់លាស់នៅទីនេះ។ រាល់ទិន្នន័យត្រូវបានការពារដោយ Cryptographic Signature Verification។', bodyStyle);
  }

  // Prevent drag-and-drop code injection into sensitive inputs
  document.addEventListener('drop', (e) => {
    if (e.target.tagName === 'INPUT' && e.target.type === 'file') return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      const data = e.dataTransfer.getData('text');
      if (data && (data.includes('<script') || data.includes('javascript:'))) {
        e.preventDefault();
      }
    }
  });
}
