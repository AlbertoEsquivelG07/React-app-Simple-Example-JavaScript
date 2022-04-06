const personajes = ['Goku','Vegeta','Trunks'];
const [,,p3]= personajes;

console.log(p3);

const retornaArreglo = () =>{
    return ['ABC',123];
}
const [letras,numeros]=retornaArreglo();
console.log(letras, numeros)
// tarea
//1. el primer valor del arr se llamara nombre
//2  el segundo se llamara setNombre
 const state= (valor)=>{
     return[valor,()=>{console.log('Hola mundo')}]
 }
// const arr =state('Goku');
//arr[1]();
//1.
const [nombre, setNombre] =state('Goku');
console.log(nombre);

setNombre();