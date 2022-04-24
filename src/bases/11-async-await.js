const getImagen = async() =>{

try {
    const apiKey ='Cmm86R3ibuwhBsdN4KqxXBNCD5BPoXDj';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();

    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
} catch (err) {
    console.err(err);
}

}

getImagen();

