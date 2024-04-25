const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Implantação em andamento...</h1>');
});

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});
