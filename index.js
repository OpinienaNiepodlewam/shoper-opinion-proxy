export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // preflight request
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { productId, name, rating, comment } = req.body;

  // Dodaj tu logikę przesyłania danych do Google Sheets lub webhooka:
  console.log('DANE OTRZYMANE:', { productId, name, rating, comment });

  return res.status(200).json({ message: 'Opinia odebrana!' });
}
