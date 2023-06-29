/* Cree un programa que cumpla con los siguientes requerimientos: En una clínica, se requiere un programa
donde el usuario pueda consultar el día de su cita mediante su documento. La cita debe tener día y fecha. Si el
usuario consulta, el programa debe mostrarle sus nombres, seguidos del día y hora de su cita. Una vez hecha la
consulta, el programa le debe mostrar al usuario un mensaje preguntándole si desea cambiar el día ó fecha de su
cita, de ser así el programa debe realizar tal cambio y mostrarle al usuario que el cambio solicitado ha sido
exitoso. Use objetos
*/


class Cita { 
    constructor(nombres, documento, dia, hora) { 

      this.nombres = nombres;
      this.documento = documento;
      this.dia = dia;
      this.hora = hora;
    }
}
  
class Clinica {
constructor() {
    this.citas = [];
}

agregarCita(cita) {
    this.citas.push(cita);
}

consultarCita(documento) {
    for (let cita of this.citas) {
    if (cita.documento === documento) {
        return cita;
    }
    }
}

cambiarCita(documento, nuevoDia, nuevaHora) {
    let cita = this.consultarCita(documento);
    if (cita) {
    cita.dia = nuevoDia;
    cita.hora = nuevaHora;
    return true;
    }
    return false;
}
}

let clinica = new Clinica();

let cita1 = new Cita("Luz Posada", "1097389571", "2023-23-10", "7:00");
let cita2 = new Cita("Carlos Velez", "16227714", "2023-30-10", "18:30");
let cita3 = new Cita("Luis Velez", "1095550984", "2023-16-10", "15:30");
clinica.agregarCita(cita1);
clinica.agregarCita(cita2);
clinica.agregarCita(cita3);

let documento = prompt("Ingrese su número de documento:");
let citaConsultada = clinica.consultarCita(documento);

if (citaConsultada) {
console.log();("Nombres:", citaConsultada.nombres);
console.log();("Día y hora de la cita:", citaConsultada.dia, citaConsultada.hora);

let cambiar = prompt("¿Desea cambiar el día o la fecha de su cita? (s/n):");
if (cambiar.toLowerCase() === "s") {
    let nuevoDia = prompt("Ingrese el nuevo día de la cita:");
    let nuevaHora = prompt("Ingrese la nueva hora de la cita:");
    if (clinica.cambiarCita(documento, nuevoDia, nuevaHora)) {
    console.log("El cambio de cita ha sido exitoso.");
    console.log("El Su cita se agendo para el dia", nuevoDia, "a las:", nuevaHora);
    } else {
    console.log("No se encontró una cita asociada a ese documento.");
    }
} else {
    console.log("No se realizaron cambios.");
}
} else {
console.log("No se encontró una cita asociada a ese documento.");
}