function area (s){
    let formula 
    const pi = 3.14
    formula = pi * (s) ** 2
    return formula
    
}
let radio = prompt("ingrese radio")
let resultado = area(radio)
alert(resultado)

let areas = (s) => 3.14 * (s) ** 2
console.log(areas(19));


// DOS FORMAS DE HACERLO

function calificacion(s){
    if (s>10){
        return "Aprobaste"
    } else{
        return "Estudia vago hdp"
    }
    
}
let notita = prompt("Ingresa tu nota");
alert(calificacion(notita))



function calificacion(s){
    if (s>10){
        mensaje = "Aprobaste"
    } else{
        mensaje = "Estudia más"
    }
    return mensaje
}
let nota = prompt("Ingresa tu nota");
calificacion(nota)
alert(mensaje)