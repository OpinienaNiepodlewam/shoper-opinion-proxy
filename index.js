export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://sklep.niepodlewam.pl'); // <-- WAŻNE
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const body = req.body;

    // Tutaj możesz wysłać dane do np. Google Sheets, bazy danych itd.
    console.log('Otrzymano opinię:', body);

    res.status(200).json({ message: 'Opinia zapisana pomyślnie' });
  } catch (error) {
    console.error('Błąd serwera:', error);
    res.status(500).json({ message: 'Błąd serwera' });
  }
}
