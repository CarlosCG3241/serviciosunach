const express = require('express');
const app = express();
const port = 3000;

app.get('/api/servicio', (req, res) => {
  res.json({ message: "servicios unach" });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});