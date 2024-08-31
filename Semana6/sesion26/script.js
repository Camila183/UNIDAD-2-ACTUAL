let number =1
while (number<=12){
    console.log(number)
    number+=2
}
let n = 1
let ni = ""
let np = ""
while(n<=12){
    if(n%2==0){
        np += n+","
    }
    else{
        ni+=n+","
    }
    n=n+1
}
console.log(ni,np)

// while funciona : mientras la condición sea verdadera se repite hasta que sea falsa


 
// let dato = prompt("Ingresa tu edad: ") //prompt: Muestra un dialogo con mensaje opcional, que solicita al usuario que introduzca un texto
// document.getElementById("mensaje").innerHTML=respuesta
// alert("no ingreses mas datos")

//DO
const patron = /^nose que poner$/;
let dato;
do{
    dato = prompt("Ingresa un valor")
} while(!patron.test(dato))