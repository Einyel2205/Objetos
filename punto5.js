/*Dado el siguiente objeto { 183344: "habilitado", 354625: "habilitado", 6762442: "inhabilitado", 88552: "inhabilitado", 438276: "habilitado" } recorrer el objeto y mostrar cuántos usuarios están habilitados. */
let objeto={ 183344: "habilitado", 354625: "habilitado", 6762442: "inhabilitado", 88552: "inhabilitado", 438276: "habilitado" };

let contador=0;

for (const clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
        let valido=objeto[clave]
        if (valido==="habilitado") {
            contador++;
        }   
             
    }
}
console.log(`Hay en total ${contador} habilitado(s)`);