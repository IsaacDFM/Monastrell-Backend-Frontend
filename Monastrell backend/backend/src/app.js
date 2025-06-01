const express = require('express');
const cors = require('cors');

const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRoutes);
app.use('/api/products', productsRoutes);

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de Monastrell!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
