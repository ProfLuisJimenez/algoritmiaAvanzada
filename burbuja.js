function burbuja(arreglo){
    var x = arreglo;
    var n, i, k, aux;
    n = x.length;
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (x[i] > x[i + 1]) {
                aux = x[i];
                x[i] = x[i + 1];
                x[i + 1] = aux;
            }
        }
    }
    return x;
}
module.exports = {burbuja};