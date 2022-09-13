//Express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//Render
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err){});
app.set('view engine', 'hbs');
app.set('views', __dirname +'/views');
app.listen(port, ()=>{
    console.log(`Server on port ${port}`);
});

//Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//procedimientos
const { insertar, insertarAleatorios} = require('./arreglo.js');
const {burbuja} = require('./burbuja.js');
//import {secdes, secord, binaria} from './busqueda.js';

//variables generales
let arreglo = [];
let arregloord = [];

//rutas
app.get('/algo', (req, res) => {
    arregloord = burbuja(arreglo);
    res.render('index',{arreglo, arregloord});
});
app.post('/aleatorio', (req, res) => {
    var cant = parseInt(req.body.aleatorios);
    insertarAleatorios(arreglo,cant);
    res.redirect('/algo');
});
app.post('/manual', (req, res) => {
    var cant = parseInt(req.body.manual);
    insertar(arreglo,cant);
    res.redirect('/algo');
});
app.post('/limpiar', async(req, res) => {
    arreglo = [];
    arregloord =[];
    res.redirect('/algo');
});
