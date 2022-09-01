// ***************************** //
//----------Evidencia------------//
// ***************************** //
function funcion(numero){
    let name =document.getElementById("name").value;
    if(name==null){
        alert("Digite si nombre primero");
    }else{
        switch (numero) {
            case 1:
                alert(name.toUpperCase());
            break;
            case 2:
                alert(name.toLowerCase());
            break;
            case 3:
                alert(name.length);
            break;
            case 4:
                alert(name.charAt());
            break;
            default:
                break;
        }
    }
}