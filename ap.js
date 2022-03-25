const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("img/pok.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            console.log(pokeImg);
            pokeImage(pokeImg);
        }
    );
 fetch(url).then((response) => response.json() )
 .then(data =>  {
     let element = document.getElementById('elem')
     element.innerHTML = ` 
     <p>Nombre:${data.name}</p>
     <p>Poder:${data.stats[1].base_stat}</p>
     <p>Tipo:${data.types[0].type.name}</p>`; 
     console.log(data);    
 })
 .catch(err=> console(err))
}



const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

//mensajes en consola
    let pokeInput = pokeName.value;
    console.log("Hola " + pokeInput);
