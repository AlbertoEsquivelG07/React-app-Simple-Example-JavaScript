//Funciones Js

const saludar =function(nombre){
	return  `Hola,${nombre}`;
}

const saludar2 =(nombre)=>{
	return  `Hola,${nombre}`;
}

const saludar3 =(nombre)=> `Hola,${nombre}`;

const saludar4 =(nombre)=> `Hola mundo`;

console.log(saludar('Vegeta'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => {
	return {
		uid: 'ABC123',
		username: 'El_papu'
	}
}
console.log(getUser);
//estoy regresando el objeto de forma implicita
const getUser1 = () => 
({
	uid: 'ABC123',
	username: 'El_papu'
})

const user =getUser1();
console.log(user);

//Tarea 
//1.Transfromen a una función de flecha
//2.Tiene que retornar un objeto implicito
//3.probar que funcione

function getUsuarioActivo(nombre) {
	return {
		uid: 'ABC567',
		username: nombre
	}
}

//1
const getUsuarioActivo1 = (nombre) => { 
	return {
		uid: 'ABC567',
		username: nombre
	}
}

//2
const getUsuarioActivo2=(nombre) => 
({ 
	uid: 'ABC567',
	username: nombre
})

const usuarioActivo= getUsuarioActivo('Alberto');
console.log(usuarioActivo);

const usuarioActivo1= getUsuarioActivo1('Alberto');
console.log(usuarioActivo1);

const usuarioActivo2= getUsuarioActivo2('Alberto');
console.log(usuarioActivo2);