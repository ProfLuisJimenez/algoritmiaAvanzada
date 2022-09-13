function insertarAleatorios(ac, cant){
    if(cant){
        for(var i = 0; i < cant; i++){
            ac.push(Math.floor(Math.random()*10000));
        }
    }else{
        console.log("Ningún dato incertado");
    }
    
    return ac;
}
function insertar(ab, cant){
    if(cant){
        ab.push(cant);
    }else{
        console.log("Ningún dato incertado");
    }
    return ab;
}

module.exports = {insertar,insertarAleatorios};