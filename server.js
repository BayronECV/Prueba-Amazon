const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('<h1>Hola mundo con express HTML</h1>'))

app.listen(3000);
console.log('Servidor en el puerto 3000')