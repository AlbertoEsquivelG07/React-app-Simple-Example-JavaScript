const heroes = [
 //export default [    para exportar por defecto   
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];


 export const owners =['DC','Marvel'];

export  default heroes; //otra forma de exportar por defecto 

/* //usar un solo export
const owners =['DC','Marvel'];
export{
    heroes as default,
    owners
} */