// ***************************** //
//------Prueba de vegetales------//
// ***************************** //
/*let n=parseInt(prompt("Ingrese la cantida de vegetales: "))
let vegetales=[]
for(let dato=1; n>= dato ;dato++){
    let vengetal=prompt("Ingrese el vegetal:");
    vegetales.push(vengetal);
}
console.log(vegetales);
//agregar un elemento al inicio y al final
console.log("agregar un elemento al inicio y al final")
vegetales.push("Cebolla");
vegetales.unshift("Lechuga");
console.log(vegetales);
//eliminar el ultimo elemento
console.log("eliminar el ultimo elemento")
vegetales.pop();
console.log(vegetales);
//longitud
let longitud =vegetales.length;
console.log("La longitud del array es: "+longitud);
//elemento eliminado que se guarde en un eliminados
console.log("elemento eliminado que se guarde en un eliminados")
let i = 1, numero = 2;
let eliminados = vegetales.splice(i, numero);
console.log(eliminados);
//copia del vector real
let copia = vegetales.slice();
console.log("El array copia es:")
console.log(copia);*/

// ***************************** //
//------------Ahorcado-----------//
// ***************************** //
let palabraoculta=["M","A","R","C","O","S"], palabra=["_","_","_","_","_","_"], letra;
let i=1;
console.log("Tiene 10 intentos")
console.log(palabra);
do{
    console.log("Intento "+i)
    letra=prompt("Digite una letra en mayuscula:");
    for(let dato=0; 5>= dato ;dato++){
        if(palabraoculta[dato]==letra){
            palabra[dato]=letra;
        }
    }
    console.log(palabra);
    i++
    if(palabraoculta==palabra){
        i=12;
    }
}while (i<=10)