localStorage.setItem('test','Jag är ett test');

let text = localStorage.getItem('test');

console.log(text);

let pokemonSectionRef = document.querySelector('#pokemons');
pokemons.forEach(pokemon => {
    let pRef = document.createElement('p');
    pRef.innerText = pokemon.name;
    pokemonSectionRef.appendChild(pRef);

    let buttonRef = document.createElement('button');
    buttonRef.innerHTML = 'Lägg till';
    pokemonSectionRef.appendChild(buttonRef);

    buttonRef.addEventListener('click',()=>{
        //console.log('Clicked', pokemon);
        addToFavorites(pokemon);
    });
}); 




function addToFavorites(pokemon){
    let pokemonList = JSON.parse(localStorage.getItem('favPokemonList')) || [];
    pokemonList.push(pokemon);
    localStorage.setItem('favPokemonList',JSON.stringify(pokemonList));

    updateFavouritePokemons();
}

function updateFavouritePokemons(){
    let favPokemonSectionRef = document.querySelector('#favPokemons');
    if(favPokemonSectionRef.hasChildNodes){
        console.log(favPokemonSectionRef.hasChildNodes);
    }

    //favPokemonSectionRef.removeChild('p');
    let favPokemonList = JSON.parse(localStorage.getItem('favPokemonList')) || [];
    //console.log(favPokemonList);
   
    favPokemonList.forEach(favPokemon => {
        //console.log(favPokemon.name);
        let pRef = document.createElement('p');
        pRef.innerText = favPokemon.name;
        favPokemonSectionRef.appendChild(pRef);
        // let buttonRef = document.createElement('button');
        // buttonRef.innerHTML = 'Ta bort';
       
        // favPokemonSectionRef.appendChild(buttonRef);
    
        // buttonRef.addEventListener('click',()=>{
        //     console.log('Clicked - remove', favPokemon);
        //     //removeFromFavorites(favPokemon);
        // });
    }); 
}