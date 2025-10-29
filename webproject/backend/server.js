const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Sirve la carpeta "frontend" como archivos estáticos
app.use(express.static(path.join(__dirname, '../frontend')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html')); // index.html por defecto, ya le colocaré algo más tarde
});

// Pagina de error en cuanto se intente entrar en una pagina no existente
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '../frontend/error.html'));
});

// Aviso de que el server anda corriendo en la consola
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
