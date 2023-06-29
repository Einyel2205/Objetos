/*Cree un programa que almacene los documentos y nombres de diez usuarios, donde a cada documento
corresponda su respectivo nombre. Use objetos. Imprima todos los nombres de los usuarios usando ciclos */
let usuarios ={
    Angel : 1095550984,
    Stiven : 1095550983,
    Juan : 1093456712,
    Velez : 109432331,
    Sofia : 109323242,
    Arnulfo : 109874322,
    Diego : 109834443,
    David : 109288343,
    Albeiro : 109993234,
    DeJesus : 109432232,  
}

for (let clave in usuarios) {
   if(clave in usuarios){
       let usuario = clave
       console.log(usuario)
   }
}
  