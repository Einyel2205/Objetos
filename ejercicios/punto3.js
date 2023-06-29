/* 3. Cree un programa que solicite al usuario el nombre de uno de los cinco continentes, luego, muestre cinco
países del continente seleccionado por el usuario. Use objetos. Use ciclos.
*/ 
let paisesDelContinente = {
    Africa : ['Kenia', 'Egipto', 'Sudafrica', 'Israel', 'Iran'],
    America : ['Colombia', 'Argentina', 'Canada', 'Guatemala', 'Uruguay'],
    Europa : ['Suecia', 'España', 'Alemania', 'Suiza', 'Inglaterra'],
    Asia : ['Japon', 'Mongolia', 'China', 'Vietnam', 'Malasia'],
};

let continenteIngresado = [];

let continente = prompt ('Ingrese el nombre del continente');
continenteIngresado.push(continente);

 for (let i = 0; i < continenteIngresado.length; i++) {
     let continenteSelect = continenteIngresado[i];

    if(continenteSelect in paisesDelContinente){
        let paises = paisesDelContinente[continenteSelect];
        console.log("Paises en:", continenteSelect  + ':');
        
        for (let l = 0; l < 5; l++) {
            console.log(paises[l])    
        }

    }else{
        console.log('No se encontraron paises para el continente', continenteSelect);
        console.log('----------------');
    }
} 