const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/search', async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get(`https://api.deezer.com/search?q=${encodeURIComponent(query)}`);
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar músicas:', error);
    res.status(500).json({ error: 'Erro ao buscar músicas' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});