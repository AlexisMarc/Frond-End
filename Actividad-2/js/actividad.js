// ***************************** //
//--------Lista decompras--------//
// ***************************** //
let producto=[];
let cantidad=[];
let precio=[];
let total=[];
let final=0, respuesta=0;
do{
let prod= prompt("Digite el nombre del producto:");
producto.push(prod);
let cant=parseInt( prompt("Digite la cantidad:"));
cantidad.push(cant)
let pre =parseInt( prompt("Digite el precio:"));
precio.push(pre)
respuesta=parseInt(prompt("¿Desea ingresar mas productos? 1 para Si y 2 para No"));
}while(respuesta==1);


for(let dato=0; producto.length>= dato ;dato++){
    console.log("Producto: "+producto[dato]);
    let operacion =cantidad[dato]*precio[dato];
    console.log("Precio total por producto: "+operacion);
    total.push(operacion);
}
for(let dato=0; total.length>= dato ;dato++){
    final=final+total[dato];
}
console.log("El total a pagar de tu lista de compras es: "+final);

// ***************************** //
//--------Edades en meses--------//
// ***************************** //
let edad=[], nombre=[];
do{
let nom=parseInt(prompt("Digite el nombre de un amigo: "))
nombre.push(nom)
let ed=parseInt(prompt("Digita la edad de su amigo:"))
edad.push(ed)
respuesta=parseInt(prompt("¿Desea ingresar mas amigos? 1 para Si y 2 para No"));
}while(respuesta==1)
for(let dato=0; nombre.length>= dato ;dato++){
    
}