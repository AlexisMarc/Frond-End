// ***************************** //
//-----------funciones-----------//
// ***************************** //
/*
function saludar(){
    console.log("Hola a todos")
}
saludar();
function mayoredad(edad){
    mayor=(edad>=18)
    ?alert("Bienvenido al bar")
    :alert("No puede ingresar");
}
mayoredad(prompt("Digite tu edad:"));

*/
// ***************************** //
//-----------promedio-----------//
// ***************************** //
/*function promedio(sumatoria,cantidad){
    return(sumatoria/cantidad).toFixed(1);
}
let respuesta=true, notas=0, i=1;
while(respuesta){
    nota = parseFloat(prompt(`Ingrese la calificación`));
    notas=notas+nota;
    respuesta=confirm("Desea agregar otra calificación");
    i++;
}
alert(`El promedio es ${promedio(notas,i)}`)*/

// ***************************** //
//-----------promedio-----------//
// ***************************** //
/*let promedio=(sumatoria,cantidad)=>{
    return(sumatoria/cantidad).toFixed(1);
}
let cantidad = parseInt(prompt("Ingrese la cantidad de notas:")), total=0;

for(let dato=1; dato<=cantidad; dato++){
     nota = parseFloat(prompt(`Ingrese la calificación numero ${dato}`));
     total=total+nota;
 }
 alert(`El promedio es ${promedio(total,cantidad)}`)*/

 // ***************************** //
//-----------edad mayor-----------//
// ***************************** //

/*let mayoredad=function(edad){
    mayor=(edad>=18)
    ?alert("Bienvenido al bar")
    :alert("No puede ingresar");
}
mayoredad(prompt("Digite tu edad:"));*/

 // ***************************** //
//-----------Objetos-------------//
// ***************************** //
/*const mascota={
    nombre:"Feliz",
    tipo: "gato",
    edad: 4,
    comer(){
        console.log("El gato está comiendo")
    }
}

mascota.comer()*/

 // ***************************** //
//--------Area de figura----------//
// ***************************** //
/*
const cuadrado={
    lado:12,
    area(){
        operacion=cuadrado.lado*cuadrado.lado;
        console.log("El area del cuadrado es "+operacion);
    }
}
cuadrado.area();

const circulo={
    radio:parseFloat( prompt("Digite el radio del circulo: ")),
    area(){
        operacion=3.14*(this.radio^2);
        console.log("El area del circulo es "+operacion);
        alert("El area del circulo es "+operacion);
    },
    setradio(radio){
        this.radio=radio;
    }
}
circulo.radio;
circulo.area();
*/
 // ***************************** //
//--------total de compra---------//
// ***************************** //

let producto=prompt("Digite el nombre del producto:");
let cantidad=parseInt(prompt("Digite la cantidad de "+producto+":"));
let precio=parseInt(prompt("Digite el precio de "+producto+":"));

const totales={
    calculartotal(){
        let total=precio*cantidad;
        console.log(`El total es ${total}`);

    }
}

totales.cantidad=cantidad;
totales.precio=precio;
totales.calculartotal();