const nombre ='Alberto';
const apellido ='Esquivel';

const nombreCompleto =`${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
	return 'hola', nombre;
}
console.log(`Este es un texto:`${getSaludo(nombre)});