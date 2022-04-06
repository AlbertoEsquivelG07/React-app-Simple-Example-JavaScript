
const persona ={
 nombre :'Tony',
 apellidos: 'Stark',
 edad: 45,
 direccion: {
 	ciudad: 'New York',
 	zip: 55321321,
 	lat: 14.3232,
 	lng: 34.9233321
 }
};
const persona2={...persona};
persona.nombre='Peter';
console.log(persona);
console.log(persona2);