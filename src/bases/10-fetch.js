const apiKey ='Cmm86R3ibuwhBsdN4KqxXBNCD5BPoXDj';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(rep => rep.json())
    .then(({data})=>{
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);