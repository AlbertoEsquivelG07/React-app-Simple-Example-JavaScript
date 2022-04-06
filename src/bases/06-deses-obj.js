//Desestructuración
//Asignacion Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

//console.log(nombre);
//console.log(persona.edad);
//console.log(persona.clave);
const contexto = ({clave,nombre,edad, rango='Capitan'})=> {
    //console.log(nombre, edad, rango);
    return {
        nombreClave: nombre,
        anios: edad,
        latlng:{
            lat: 14.1232,
            lng: -1.3232
        }
    }
}

//const avenger = contexto(persona);

//Desestructuracion
const {nombreClave,anios,latlng: {lat,lng} } = contexto(persona);
//console.log(avenger);
console.log(nombreClave, anios);
console.log(lat, lng);
//Nota use, set  son palabras recerbadas lo que me ocaciono un error por lo que cambie useContext por contexto 