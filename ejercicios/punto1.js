/*Cree un programa que pida al usuario el nombre de un producto existente en una tienda, luego, que le muestre
el precio del producto. El usuario debe poder elegir de entre por lo menos cinco productos. Use objetos */
const productos = {
    manzana: 2.5,
    naranja: 1.8,
    plátano: 1.2,
    pera: 2,
    sandía: 5.5
};
  
const producto = prompt("Ingrese el nombre de un producto:").toLowerCase();

if (productos.hasOwnProperty(producto)) {
    const precio = productos[producto];
    console.log(`El precio de ${producto} es ${precio} dólares.`);
} else {
    console.log("El producto ingresado no existe en la tienda.");
}
  