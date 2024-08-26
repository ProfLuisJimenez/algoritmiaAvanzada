function secuencial (arreglo, cant){
    var y = arreglo;
    var inicio = performance.now();
    for (var i in y){
        if (y[i] == cant) {
            console.log("encontrado");
            break;
        }
    }
    var fin = performance.now();
    var tiempo = fin-inicio;
    tiempo = parseFloat(tiempo).toFixed(4);
    return tiempo;
}
function binaria (arreglo, cant){
    var z = arreglo;
    var inicio = performance.now();
    var abajo = 0;
    var arriba = z.length - 1;
    while(abajo <= arriba) {
        var medio = Math.floor((abajo + arriba)/2);
        var seccion = z[medio];
        if(seccion == cant){
            console.log("encontrado");
            break;
        }
        if(seccion > cant){
        arriba = medio - 1;
        } else {
        abajo = medio + 1;
        }
    }
    var fin = performance.now();
    var tiempo = fin-inicio;
    tiempo = parseFloat(tiempo).toFixed(4);
    return tiempo;
}
module.exports = {secuencial,binaria};