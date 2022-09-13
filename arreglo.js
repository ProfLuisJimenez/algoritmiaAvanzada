function insertarAleatorios(arreglo, cant){
    var v = arreglo;
    if(cant){
        for(var i = 0; i < cant; i++){
            v.push(Math.floor(Math.random()*10000));
        }
    }else{
        console.log("Ningún dato incertado");
    }
    
    return v;
}
function insertar(arreglo, cant){
    var w = arreglo
    if(cant){
        w.push(cant);
    }else{
        console.log("Ningún dato incertado");
    }
    return w;
}

module.exports = {insertar,insertarAleatorios};