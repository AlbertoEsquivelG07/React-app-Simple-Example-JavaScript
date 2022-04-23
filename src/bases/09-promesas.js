import { getHeroeById } from './bases/08-imp-exp';
 
/* const promesa = new Promise((resolve, reject) => {
 
    setTimeout(() => {
        const p1 = getHeroeById(2);
        // console.log(heroe);
        resolve (p1);
        //resolve(heroe);
 
    }, 2000);
 
}); 
 
promesa.then((heroe) => {
    console.log('heroe',heroe)
 
})
.catch(err => console.warn(err)); */
const getHeroeByIdAsync = (id) =>{
    //const promesa = new Promise((resolve, reject) => {
    return new Promise((resolve, reject) => {
 
        setTimeout(() => {
            const p1 = getHeroeById(id);
            // console.log(heroe);
            if (p1){
                resolve (p1);
            //resolve(heroe);
            }else{
                reject('No se pudo encontrar el heroe');
            }
     
        }, 2000);
     
    });
   // return promesa; casi no se usa
}
getHeroeByIdAsync(10)
.then(console.log) // o then(heroe => console.log('Heroe',heroe))
.catch(console.warn); // o catch(err => console.warn(err));