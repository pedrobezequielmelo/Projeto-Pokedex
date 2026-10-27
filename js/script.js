console.log("JS funcionando!");

const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_img');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const infoName = document.querySelector('#info_name');
const infoNumber = document.querySelector('#info_number');
const infoType = document.querySelector('#info_type');
const infoHeight = document.querySelector('#info_height');
const infoWeight = document.querySelector('#info_weight');

const sons = {
    bulbasaur: "./sons/bulbasaur.mp3.mp3",
    charmander: "./sons/charmander.mp3.mp3",
    eevee: "./sons/eevee.mp3.mp3",
    pikachu: "./sons/pikachu.mp3.mp3"
};

form.addEventListener('submit', function(event){

    event.preventDefault();

    let pokemon = input.value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        .then(function(response){

            if(response.status == 404){

                alert("Pokémon não encontrado!");
                return null;
            }

            return response.json();
        })

        .then(function(data){

            if(data == null){
                return;
            }

            pokemonName.textContent = data.name;
            pokemonNumber.textContent = data.id;

            infoName.textContent = data.name;
            infoNumber.textContent = "#" + data.id;

            let tipos = "";

            for(let i = 0; i < data.types.length; i++){

                tipos += data.types[i].type.name;

                if(i < data.types.length - 1){
                    tipos += " / ";
                }
            }

            infoType.textContent = tipos;

            infoHeight.textContent = (data.height / 10) + " m";
            infoWeight.textContent = (data.weight / 10) + " kg";

            pokemonImage.src =
            data.sprites.other['official-artwork'].front_default;

            if(sons[data.name]){

                const audio = new Audio(sons[data.name]);

                audio.volume = 0.7;

                audio.play();
            }

        });

    input.value = "";
});