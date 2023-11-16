const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Conectar ao banco de dados MongoDB
mongoose.connect('mongodb://mongo:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

// Rota principal
app.get('/', (req, res) => {
  res.send('Hello, Docker World!');
  res.send('Trabalho de Docker');
  res.send('Feito por: Kaleu Farias, Artur Nola ');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
