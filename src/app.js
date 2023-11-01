const express = require('express');
const paginate = require('express-paginate');
const app = express();

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(paginate.middleware(8,50));

//Aquí pueden colocar las rutas de las APIs
app.use('/api/v1/movies', require('./routes/v1/apiMoviesRoutes'))
app.use('/api/v1/genres', require('./routes/v1/apiGenresRoutes'))

//Activando el servidor desde express
app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));

console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 3001}`)