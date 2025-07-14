export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // CORS preflight response
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { productId, name, rating, comment } = req.body;

    // Możesz dodać logikę np. wysyłki do Google Sheets tutaj

    console.log('DANE OTRZYMANE:', { productId, name, rating, comment });

    return res.status(200).json({ message: 'Opinia odebrana!' });
  } catch (err) {
    console.error('Błąd po stronie API:', err);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
}
