import pokemonGeneration, { pokemonGames } from "./generacionSelector";


interface Pokemon {
    name: string;
    img: string;
    type: string;
    number: string;
}

const fetchPokemonGeneration = async (generation: number): Promise<Pokemon[]> => {
    const pokemons: Pokemon[] = [];
    console.log(generation);

    const apiUrl = pokemonGeneration(generation);

    const response = await fetch(apiUrl);
    const data = await response.json();

    const { results } = data;

    for (const pokemon of results) {
        const response = await fetch(pokemon.url);
        const data = await response.json();

        const { id, name, sprites, types } = data;
        const { front_default } = sprites.other["official-artwork"];
        const pokemonFormatted: Pokemon = {
            name,
            img: front_default,
            type: types[0].type.name,
            number: `#${id.toString().padStart(3, '0')}`
        };

        pokemons.push(pokemonFormatted);
    }

    return pokemons;
};

function eliminarDuplicados(array: string[]): string[] {
    const objetoAuxiliar: { [key: string]: boolean } = {};
    const arraySinDuplicados: string[] = [];
  
    for (let i = 0; i < array.length; i++) {
      const elemento = array[i];
  
        if(!objetoAuxiliar[elemento]){
            objetoAuxiliar[elemento] = true;
            arraySinDuplicados.push(elemento);
        }
    }
  
    return arraySinDuplicados;
}

const fetchPokemonName = async (PokemonURLs:any) => {
    const nombrePokemon = PokemonURLs.map(async (pokemonURL: string) => {
        const response = await fetch(pokemonURL);
        const data = await response.json();
        if(data.name === "deoxys")return "deoxys-normal";
        if(data.name === "wormadam")return "wormadam-plant";
        if(data.name === "giratina")return "giratina-altered";
        if(data.name === "shaymin")return "shaymin-land";
        if(data.name === "basculin")return "basculin-red-striped";
        if(data.name === "darmanitan")return "darmanitan-standard";
        if(data.name === "tornadus")return "tornadus-incarnate";
        if(data.name === "thundurus")return "thundurus-incarnate";
        if(data.name === "landorus")return "landorus-incarnate";
        if(data.name === "keldeo")return "keldeo-ordinary";
        if(data.name === "meloetta")return "meloetta-aria";
        if(data.name === "meowstic")return "meowstic-male"
        if(data.name === "aegislash")return "aegislash-shield"
        if(data.name === "pumpkaboo")return "pumpkaboo-average"
        if(data.name === "gourgeist")return "gourgeist-average"
        if(data.name === "zygarde")return "zygarde-50"
        if(data.name === "oricorio")return "oricorio-baile"
        if(data.name === "lycanroc")return "lycanroc-midday"
        if(data.name === "minior")return "minior-red-meteor"
        if(data.name === "wishiwashi")return "wishiwashi-solo"
        if(data.name === "mimikyu")return "mimikyu-disguised"
        if(data.name === "urshifu")return "urshifu-single-strike"
        if(data.name === "indeedee")return "indeedee-male"
        if(data.name === "morpeko")return "morpeko-full-belly"
        if(data.name === "eiscue")return "eiscue-ice"
        if(data.name === "toxtricity")return "toxtricity-amped"


        

        return data.name;
        
    })
    const nombres = await Promise.all(nombrePokemon);
    const nombresSinDuplicados = eliminarDuplicados(nombres);
    console.log(nombresSinDuplicados);
    return nombresSinDuplicados;
    
}

const fetchPorNombres = async (PokemonNombres:any) => {
    const nombrePokemon = PokemonNombres.map(async (pokemonNombre: string) => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+pokemonNombre);
        const data = await response.json();
        return data;
        
    })
    const nombres = await Promise.all(nombrePokemon);
    return nombres;
    
}

const fetchPokemonGames = async (name: string): Promise<Pokemon[]> => {
    const pokemons: Pokemon[] = [];

    if (name === "scarlet" || name === "violet") {
        return fetchPokemonGeneration(9);
    }

    const apiUrl = pokemonGames(name);

    const response = await fetch(apiUrl);
    const data = await response.json();

    const PokemonURLs: string[] = [];

    for (const pokedex of data.pokedexes) {
        const response = await fetch(pokedex.url);
        const pokedexData = await response.json();
        
        const pokemonURLs = pokedexData.pokemon_entries.map((pokemon: any) => {
            return pokemon.pokemon_species.url;
        });

        PokemonURLs.push(...pokemonURLs);
    }

    const pokemonNames = await fetchPokemonName(PokemonURLs);
    const pokemonData = await fetchPorNombres(pokemonNames);

    for (const pokemon of pokemonData) {
        const { id, name, sprites, types } = pokemon;
        const { front_default } = sprites.other["official-artwork"];
        const pokemonFormatted: Pokemon = {
            name,
            img: front_default,
            type: types[0].type.name,
            number: `#${id.toString().padStart(3, '0')}`
        };
        pokemons.push(pokemonFormatted);
    }

    console.log(pokemons);
    return pokemons;
};



export default fetchPokemonGeneration;
export { fetchPokemonGames };