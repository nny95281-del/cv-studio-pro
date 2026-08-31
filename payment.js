// Serverless API Handler: Bakong KHQR Payment Proxy (Vercel / Node.js)
// Hides BAKONG_API_TOKEN securely on the backend server

export default async function handler(req, res) {
  // Enable CORS if requested from frontend
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const BAKONG_BASE_URL = process.env.BAKONG_BASE_URL || 'https://www.payment-system.dev/api/v1/';
  const BAKONG_API_TOKEN = process.env.BAKONG_API_TOKEN || '6441057055:J0qQgzaAhnuMrDOh6xnYv68N5DMgI0CNifu';

  const { action, amount, md5 } = req.query;

  try {
    if (action === 'generate_qr') {
      const amountVal = parseFloat(amount || '0.10').toFixed(2);
      const url = `${BAKONG_BASE_URL}?type=generate_qr&api_token=${encodeURIComponent(BAKONG_API_TOKEN)}&amount=${amountVal}`;
      
      const response = await fetch(url);
      const json = await response.json();
      
      if (json.code === 201 && json.data && json.data.length > 0) {
        return res.status(200).json({ success: true, data: json.data[0] });
      }
      return res.status(400).json({ success: false, message: json.message || 'Failed to generate KHQR' });
    }

    if (action === 'check_md5') {
      if (!md5) {
        return res.status(400).json({ success: false, message: 'Missing md5 parameter' });
      }
      const url = `${BAKONG_BASE_URL}?type=check_md5&api_token=${encodeURIComponent(BAKONG_API_TOKEN)}&md5=${encodeURIComponent(md5)}`;
      
      const response = await fetch(url);
      const json = await response.json();
      return res.status(200).json({ success: true, data: json });
    }

    return res.status(400).json({ success: false, message: 'Invalid action parameter' });
  } catch (error) {
    console.error('Payment API Proxy Error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
}
