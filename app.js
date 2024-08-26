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
const {secuencial, binaria} = require('./busqueda.js');
//import {secdes, secord, binaria} from './busqueda.js';

//variables generales
//var arreglodes = [];
let arreglodes = [5, 3, 8, 1];
var arregloord = [];
var sd;
var so;
var bin;

//rutas
app.get('/', (req, res) => {
    console.log (arreglodes);
    arregloord = burbuja([...arreglodes]);
    res.render('index',{arreglodes, arregloord, sd, so, bin});
});
app.post('/aleatorio', (req, res) => {
    var cant = parseInt(req.body.aleatorios);
    arreglodes = insertarAleatorios(arreglodes,cant);
    res.redirect('/');
});
app.post('/manual', (req, res) => {
    var cant = parseInt(req.body.manual);
    arreglodes= insertar(arreglodes,cant);
    res.redirect('/');
});
app.post('/limpiar', async(req, res) => {
    arreglodes = [];
    arregloord = [];
    sd = 0;
    so = 0;
    bin = 0;
    res.redirect('/');
});
app.post('/buscar', (req, res) => {
    var cant = parseInt(req.body.busqueda);
    if(arreglodes.includes(cant)){
        sd = secuencial(arreglodes,cant);
        so = secuencial(arregloord,cant);
        bin = binaria(arregloord,cant);
        res.redirect('/');
    }else{
        console.log("Ese valor no esta en el arreglo");
        sd = secuencial(arreglodes,cant);
        so = secuencial(arregloord,cant);
        bin = binaria(arregloord,cant);
        res.redirect('/');
    }
});