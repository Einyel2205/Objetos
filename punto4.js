/* Dado el objeto {"dos": 2, "cinco": 5, "siete": 7, "cuarenta": 40, "cincuenta": 50} recorrer el objeto y mostrar cuáles de los valores son pares. */
let objeto={"dos": 2, "cinco": 5, "siete": 7, "cuarenta": 40, "cincuenta": 50};
for (const clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
        let valor=objeto[clave]
        if (valor % 2 == 0) {
            console.log(valor);
        }
    }
}
