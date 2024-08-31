function suma(x,y){
    let resultado;
    resultado = x+y
    return resultado
}
let respuesta = suma(9,5)
console.log(respuesta) //se puede poner el console.log o alert dentro de la función sin retornar

// let resta = (a,b) => b-a;
// console.log(resta(10,5))

function sumita (x,y){
    let result;
    result = x+y;
    return result
}
let respuestita = sumita(10,19)
console.log(respuestita)

function restita(a,s){
    let g;
    g = a-s;
    return g
}
let b = restita(40,20)
console.log(b)

function dividir(b,g){
    let s;
    s = b/g
    return s
}
let j = dividir(30,5)
console.log(j)  

function area (s){
    let formula 
    const pi = 3.14
    formula = pi * (s) ** 2
    return formula
    
}
let radio = prompt("ingrese radio")
let resultado = area(radio)
alert(resultado)