import pokemonGenereation from "./generacionSelector";

interface Pokemon {
    name: string;
    img: string;
    type: string;
    number: string;
}

const fetchPokemon = async (generation:number): Promise<Pokemon[]>  => {
    const pokemons: Pokemon[] = [];

    const apiUrl = pokemonGenereation(generation);
    
    const response = await fetch(apiUrl);
    const data = await response.json();

    const { results } = data;

    for (const pokemon of results) {
        const response = await fetch(pokemon.url);
        const data = await response.json();

        const { id, name, sprites, types } = data;

        const pokemonFormatted = {
            name,
            img: sprites.front_default,
            type: types[0].type.name,
            number: `#${id.toString().padStart(3, '0')}`
        }

        pokemons.push(pokemonFormatted);
    }

    return pokemons;
}


export default fetchPokemon;