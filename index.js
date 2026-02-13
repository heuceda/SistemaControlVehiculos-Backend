const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const vehiculoRoutes = require('./routes/vehiculo');

const app = express();
app.use(cors()); // Pemite las peticiones desde el frontend, React
app.use(express.json()); // Para que la API entienda JSON

// Rutas
app.use('/api/vehiculos', vehiculoRoutes);

const PORT = process.env.PORT || 3000;

// Se prueba conexión y arranca
sequelize.authenticate()
  .then(() => {
    console.log('Conectado a MySQL');
    app.listen(PORT, () => console.log(`API corriendo en puerto ${PORT}`));
  })
  .catch(err => console.log('Error de conexión:', err));