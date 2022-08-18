let nombre = prompt("Digite su nombre:","Marcos");
let apellido = prompt("Digite su apellido:", "Ricon");
let confirmacion= prompt("digite 1 para °C a °F O digite 2 de °F a °C: ", 1);

if(confirmacion==1){
    let c= prompt("Digite los grados °C:");
    let operacion = ((c*9)/5)+32;
    console.log(c+`°C son `+operacion+`°F`);
}else if(confirmacion==2){
    let f= prompt("Digite los grados °F:");
    let operacion = ((f-32)*5)/9;
    console.log(f+`°F son `+operacion+`°C`);
}else{
    console.log(`No se realizo ninguna operación`);
}

console.log(`Su nombre es: `+nombre,apellido);