//import{heroes} from './data/heroes';
import heroes,{owners} from '../data/heroes';//owners vine como un aexportacion individual

console.log(owners);

/*const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}*/
const getHeroeById = (id) =>  heroes.find((heroe) => heroe.id === id);
console.log(getHeroeById(2));
//filter en lugar de find
const getHeroesOwner =(owner)=>  heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroesOwner('DC'));