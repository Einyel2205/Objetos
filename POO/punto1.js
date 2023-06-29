/*1. Crea una clase llamada "Perro" con un atributo llamado "nombre". Agrega un método llamado ladrar() que
imprima en la consola "¡Woof!" junto al nombre del perro.
2. Crea una instancia de la clase "Perro" llamada "miPerro" con un nombre de tu elección. Llama al método
ladrar() de la instancia.*/
class Perro {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    ladrar() {
      console.log(`¡Woof! ${this.nombre}`);
    }
  }
  
  // Crear instancia de la clase Perro
  const miPerro = new Perro("Matias");
  
  // Llamar al método ladrar() de la instancia
  miPerro.ladrar();
  

  