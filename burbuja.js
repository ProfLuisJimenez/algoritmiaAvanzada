function burbuja(arreglo){
    var n, i, k, aux;
    n = arreglo.length;
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (arreglo[i] > arreglo[i + 1]) {
                aux = arreglo[i];
                arreglo[i] = arreglo[i + 1];
                arreglo[i + 1] = aux;
            }
        }
    }
    return arreglo;
}
module.exports = {burbuja};