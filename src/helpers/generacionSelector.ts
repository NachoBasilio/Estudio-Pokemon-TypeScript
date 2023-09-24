const pokemonGenereation = (generation: number) => {
    switch (generation) {
        case 1:
            return 'https://pokeapi.co/api/v2/pokemon?limit=151';
        case 2:
            return 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151';
        case 3:
            return 'https://pokeapi.co/api/v2/pokemon?limit=135&offset=251';
        case 4:
            return 'https://pokeapi.co/api/v2/pokemon?limit=107&offset=386';
        case 5:
            return 'https://pokeapi.co/api/v2/pokemon?limit=156&offset=493';
        case 6:
            return 'https://pokeapi.co/api/v2/pokemon?limit=72&offset=649';
        case 7:
            return 'https://pokeapi.co/api/v2/pokemon?limit=88&offset=721';
        case 8:
            return 'https://pokeapi.co/api/v2/pokemon?limit=96&offset=809';
        case 9:
            return 'https://pokeapi.co/api/v2/pokemon?limit=109&offset=905';
        default:
            return 'https://pokeapi.co/api/v2/pokemon?limit=151';
    }
}

export default pokemonGenereation;