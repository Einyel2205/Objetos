/* Crea una clase llamada "CuentaBancaria" con atributos "saldo" (inicializado en 0) y "titular". Agrega un
método llamado depositar(cantidad) que sume la cantidad proporcionada al saldo actual.
4. Crea una instancia de la clase "CuentaBancaria" llamada "miCuenta" con un titular de tu elección.
Deposita 100 en la cuenta llamando al método depositar().
5. Agrega un método llamado retirar(cantidad) a la clase "CuentaBancaria" que reste la cantidad
proporcionada del saldo actual. Asegúrate de verificar si hay suficiente saldo antes de realizar la
operación.
6. Llama al método retirar() en la instancia "miCuenta" para retirar 50. Imprime en la consola el saldo actual
después de la operación.*/
class CuentaBancaria {
    constructor(titular) {
      this.saldo = 0;
      this.titular = titular;
    }
  
    depositar(cantidad) {
      this.saldo += cantidad;
    }
  
    retirar(cantidad) {
      if (cantidad <= this.saldo) {
        this.saldo -= cantidad;
      } else {
        console.log("Saldo insuficiente para realizar la operación.");
      }
    }
  }

const miCuenta = new CuentaBancaria("Angel");

miCuenta.depositar(100);

miCuenta.retirar(50);

console.log("Saldo actual:", miCuenta.saldo);
  