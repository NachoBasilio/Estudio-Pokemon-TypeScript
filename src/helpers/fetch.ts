import pokemonGeneration, { pokemonGames } from "./generacionSelector";


interface Pokemon {
    name: string;
    img: string;
    type: string;
    number: string;
}

const pokemonPlaceholder: Pokemon = {
    name: 'pokemon',
    img: 'https://images.vexels.com/media/users/3/155301/isolated/preview/6a91c0d6c8ba37a9fd115e1776300319-pregunta-de-doodle-de-signo-de-interrogacion-3d.png',
    type: 'normal',
    number: '#000'
}

function buscarYAgregar<T>(array: T[], elementoBuscado: T, elementoAgregado: any): T[] {

    const indice = array.indexOf(elementoBuscado);
  

    if (indice !== -1) {
      // Si se encuentra el elemento, agregamos el nuevo elemento en la posición siguiente
      array.splice(indice + 1, 0, elementoAgregado);
    }
  
    return array;
}

function buscarYArreglarGeneraciones(results: Pokemon[], nombreBuscado: string, nuevoPokemon: Pokemon): void {
    const indice = results.findIndex(pokemon => pokemon.name === nombreBuscado);

    if (indice !== -1) {
        // Si se encuentra el elemento, insertamos el nuevo elemento en la posición siguiente
        results.splice(indice + 1, 0, nuevoPokemon);
    }
}


const fetchPokemonGeneration = async (generation: number): Promise<Pokemon[]> => {
    const pokemons: Pokemon[] = [];
    

    const apiUrl = pokemonGeneration(generation);

    const response = await fetch(apiUrl);
    const data = await response.json();

    const { results } = data;
    if (results.some(pokemon => pokemon.name === "deoxys-normal")) {
        buscarYArreglarGeneraciones(results, "deoxys-normal", {
            name: "deoxys-attack",
            url: "https://pokeapi.co/api/v2/pokemon/10001/"
        });
        buscarYArreglarGeneraciones(results, "deoxys-normal", {
            name: "deoxys-defense",
            url: "https://pokeapi.co/api/v2/pokemon/10002/"
        });
        buscarYArreglarGeneraciones(results, "deoxys-normal", {
            name: "deoxys-speed",
            url: "https://pokeapi.co/api/v2/pokemon/10003/"
        });
    }
    if (results.some(pokemon => pokemon.name === "wormadam-plant")) {
        buscarYArreglarGeneraciones(results, "wormadam-plant", {
            name: "wormadam-sandy",
            url: "https://pokeapi.co/api/v2/pokemon/10004/"
        })
        
        results.push({
            name: "wormadam-trash",
            url: "https://pokeapi.co/api/v2/pokemon/10005/"
        });
    }
    if (results.some(pokemon => pokemon.name === "shaymin-land")) {
        buscarYArreglarGeneraciones(results, "shaymin-land", {
            name: "shaymin-sky",
            url: "https://pokeapi.co/api/v2/pokemon/10006/"
        });
    }
    if (results.some(pokemon => pokemon.name === "giratina-altered")) {
        buscarYArreglarGeneraciones(results, "giratina-altered", {
            name: "giratina-origin",
            url: "https://pokeapi.co/api/v2/pokemon/10007/"
        });
    }
    if (results.some(pokemon => pokemon.name === "basculin-red-striped")) {
        buscarYArreglarGeneraciones(results, "basculin-red-striped", {
            name: "basculin-blue-striped",
            url: "https://pokeapi.co/api/v2/pokemon/10016/"
        });
    }
    if (results.some(pokemon => pokemon.name === "darmanitan-standard")) {
        buscarYArreglarGeneraciones(results, "darmanitan-standard", {
            name: "darmanitan-zen",
            url: "https://pokeapi.co/api/v2/pokemon/10017/"
        });
    }
    if (results.some(pokemon => pokemon.name === "melotta-aria")) {
        buscarYArreglarGeneraciones(results, "melotta-aria", {
            name: "melotta-pirouette",
            url: "https://pokeapi.co/api/v2/pokemon/10018/"
        });
    }
    if (results.some(pokemon => pokemon.name === "tornadus-incarnate")) {
        buscarYArreglarGeneraciones(results, "tornadus-incarnate", {
            name: "tornadus-therian",
            url: "https://pokeapi.co/api/v2/pokemon/10019/"
        });
    }
    if (results.some(pokemon => pokemon.name === "thundurus-incarnate")) {
        buscarYArreglarGeneraciones(results, "thundurus-incarnate", {
            name: "thundurus-therian",
            url: "https://pokeapi.co/api/v2/pokemon/10020/"
        });
    }
    if (results.some(pokemon => pokemon.name === "landorus-incarnate")) {
        buscarYArreglarGeneraciones(results, "landorus-incarnate", {
            name: "landorus-therian",
            url: "https://pokeapi.co/api/v2/pokemon/10021/"
        });
    }
    if (results.some(pokemon => pokemon.name === "keldeo-ordinary")) {
        buscarYArreglarGeneraciones(results, "keldeo-ordinary", {
            name: "keldeo-resolute",
            url: "https://pokeapi.co/api/v2/pokemon/10024/"
        });
    }
    if (results.some(pokemon => pokemon.name === "aegislash-shield")) {
        buscarYArreglarGeneraciones(results, "aegislash-shield", {
            name: "aegislash-blade",
            url: "https://pokeapi.co/api/v2/pokemon/10026/"
        });
    }
    if (results.some(pokemon => pokemon.name === "pumpkaboo-average")) {
        buscarYArreglarGeneraciones(results, "pumpkaboo-average", {
            name: "pumpkaboo-small",
            url: "https://pokeapi.co/api/v2/pokemon/10027/"
        });
        buscarYArreglarGeneraciones(results, "pumpkaboo-average", {
            name: "pumpkaboo-large",
            url: "https://pokeapi.co/api/v2/pokemon/10028/"
        });
        buscarYArreglarGeneraciones(results, "pumpkaboo-average", {
            name: "pumpkaboo-super",
            url: "https://pokeapi.co/api/v2/pokemon/10029/"
        });
    }
    if (results.some(pokemon => pokemon.name === "gourgeist-average")) {
        buscarYArreglarGeneraciones(results, "gourgeist-average", {
            name: "gourgeist-small",
            url: "https://pokeapi.co/api/v2/pokemon/10030/"
        });
        buscarYArreglarGeneraciones(results, "gourgeist-average", {
            name: "gourgeist-large",
            url: "https://pokeapi.co/api/v2/pokemon/10031/"
        });
        buscarYArreglarGeneraciones(results, "gourgeist-average", {
            name: "gourgeist-super",
            url: "https://pokeapi.co/api/v2/pokemon/10032/"
        });
    }
    if (results.some(pokemon => pokemon.name === "zygarde-50")) {
        buscarYArreglarGeneraciones(results, "zygarde-50", {
            name: "zygarde-10",
            url: "https://pokeapi.co/api/v2/pokemon/10119/"
        });
        buscarYArreglarGeneraciones(results, "zygarde-50", {
            name: "zygarde-complete",
            url: "https://pokeapi.co/api/v2/pokemon/10120/"
        });
    }
    if (results.some(pokemon => pokemon.name === "oricorio-baile")) {
        buscarYArreglarGeneraciones(results, "oricorio-baile", {
            name: "oricorio-pom-pom",
            url: "https://pokeapi.co/api/v2/pokemon/10123/"
        });
        buscarYArreglarGeneraciones(results, "oricorio-baile", {
            name: "oricorio-pau",
            url: "https://pokeapi.co/api/v2/pokemon/10124/"
        });
        buscarYArreglarGeneraciones(results, "oricorio-baile", {
            name: "oricorio-sensu",
            url: "https://pokeapi.co/api/v2/pokemon/10125/"
        });
    }
    if (results.some(pokemon => pokemon.name === "lycanroc-midday")) {
        buscarYArreglarGeneraciones(results, "lycanroc-midday", {
            name: "lycanroc-midnight",
            url: "https://pokeapi.co/api/v2/pokemon/10126/"
        });
    }
    if (results.some(pokemon => pokemon.name === "wishiwashi-solo")) {
        buscarYArreglarGeneraciones(results, "wishiwashi-solo", {
            name: "wishiwashi-school",
            url: "https://pokeapi.co/api/v2/pokemon/10127/"
        });
    }
    if(results.some(pokemon => pokemon.name === "toxtricity-amped")){
        buscarYArreglarGeneraciones(results, "toxtricity-amped", {
            name: "toxtricity-low-key",
            url: "https://pokeapi.co/api/v2/pokemon/10184/"
        });
    }
    if(results.some(pokemon => pokemon.name === "eiscue-ice")){
        buscarYArreglarGeneraciones(results, "eiscue-ice", {
            name: "eiscue-noice",
            url: "https://pokeapi.co/api/v2/pokemon/10185/"
        });
    }
    if(results.some(pokemon => pokemon.name === "indeedee-male")){
        buscarYArreglarGeneraciones(results, "indeedee-male", {
            name: "indeedee-female",
            url: "https://pokeapi.co/api/v2/pokemon/10186/"
        })
    }
    if(results.some(pokemon => pokemon.name === "urshifu-single-strike")){
        buscarYArreglarGeneraciones(results, "urshifu-single-strike", {
            name: "urshifu-rapid-strike",
            url: "https://pokeapi.co/api/v2/pokemon/10191/"
        });
    }
    if(results.some(pokemon => pokemon.name === "morpeko-full-belly")){
        buscarYArreglarGeneraciones(results, "morpeko-full-belly", {
            name: "morpeko-hangry",
            url: "https://pokeapi.co/api/v2/pokemon/10187/"
        });
    }
    if(results.some(pokemon => pokemon.name === "zacian")){
        buscarYArreglarGeneraciones(results, "zacian", {
            name: "zacian-crowned",
            url: "https://pokeapi.co/api/v2/pokemon/10188/"
        });
    }
    if(results.some(pokemon => pokemon.name === "zamazenta")){
        buscarYArreglarGeneraciones(results, "zamazenta", {
            name: "zamazenta-crowned",
            url: "https://pokeapi.co/api/v2/pokemon/10189/"
        });
    }

    

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
    //agregar pokemonPlaceholder primero

    pokemons.unshift(pokemonPlaceholder);

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
    if(nombres.includes("deoxys-normal")){
        buscarYAgregar(nombres, "deoxys-normal", "deoxys-attack")
        buscarYAgregar(nombres, "deoxys-normal", "deoxys-defense")
        buscarYAgregar(nombres, "deoxys-normal", "deoxys-speed")
    }
    if(nombres.includes("wormadam-plant")){
        buscarYAgregar(nombres, "wormadam-plant", "wormadam-sandy")
        buscarYAgregar(nombres, "wormadam-plant", "wormadam-trash")
    }
    if(nombres.includes("giratina-altered")){
        buscarYAgregar(nombres, "giratina-altered", "giratina-origin")
    }
    if(nombres.includes("shaymin-land")){
        buscarYAgregar(nombres, "shaymin-land", "shaymin-sky")
    }
    if(nombres.includes("basculin-red-striped")){
        buscarYAgregar(nombres, "basculin-red-striped", "basculin-blue-striped")
    }
    if(nombres.includes("darmanitan-standard")){
        buscarYAgregar(nombres, "darmanitan-standard", "darmanitan-zen")
    }
    if(nombres.includes("tornadus-incarnate")){
        buscarYAgregar(nombres, "tornadus-incarnate", "tornadus-therian")
    }
    if(nombres.includes("thundurus-incarnate")){
        buscarYAgregar(nombres, "thundurus-incarnate", "thundurus-therian")
    }
    if(nombres.includes("landorus-incarnate")){
        buscarYAgregar(nombres, "landorus-incarnate", "landorus-therian")
    }
    if(nombres.includes("keldeo-ordinary")){
        buscarYAgregar(nombres, "keldeo-ordinary", "keldeo-resolute")
    }
    if(nombres.includes("meloetta-aria")){
        buscarYAgregar(nombres, "meloetta-aria", "meloetta-pirouette")
    }
    if(nombres.includes("meowstic-male")){
        buscarYAgregar(nombres, "meowstic-male", "meowstic-female")
    }
    if(nombres.includes("aegislash-shield")){
        buscarYAgregar(nombres, "aegislash-shield", "aegislash-blade")
    }
    if(nombres.includes("pumpkaboo-average")){
        buscarYAgregar(nombres, "pumpkaboo-average", "pumpkaboo-small")
        buscarYAgregar(nombres, "pumpkaboo-average", "pumpkaboo-large")
        buscarYAgregar(nombres, "pumpkaboo-average", "pumpkaboo-super")
    }
    if(nombres.includes("gourgeist-average")){
        buscarYAgregar(nombres, "gourgeist-average", "gourgeist-small")
        buscarYAgregar(nombres, "gourgeist-average", "gourgeist-large")
        buscarYAgregar(nombres, "gourgeist-average", "gourgeist-super")
    }
    if(nombres.includes("zygarde-50")){
        buscarYAgregar(nombres, "zygarde-50", "zygarde-10")
        buscarYAgregar(nombres, "zygarde-50", "zygarde-complete")
    }
    if(nombres.includes("oricorio-baile")){
        buscarYAgregar(nombres, "oricorio-baile", "oricorio-pom-pom")
        buscarYAgregar(nombres, "oricorio-baile", "oricorio-pau")
        buscarYAgregar(nombres, "oricorio-baile", "oricorio-sensu")
    }
    if(nombres.includes("lycanroc-midday")){
        buscarYAgregar(nombres, "lycanroc-midday", "lycanroc-midnight")
    }
    if(nombres.includes("minior-red-meteor")){
        buscarYAgregar(nombres, "minior-red-meteor", "minior-orange-meteor")
        buscarYAgregar(nombres, "minior-red-meteor", "minior-yellow-meteor")
        buscarYAgregar(nombres, "minior-red-meteor", "minior-green-meteor")
        buscarYAgregar(nombres, "minior-red-meteor", "minior-blue-meteor")
        buscarYAgregar(nombres, "minior-red-meteor", "minior-indigo-meteor")
        buscarYAgregar(nombres, "minior-red-meteor", "minior-violet-meteor")
    }
    if(nombres.includes("wishiwashi-solo")){
        buscarYAgregar(nombres, "wishiwashi-solo", "wishiwashi-school")
    }
    if(nombres.includes("urshifu-single-strike")){
        buscarYAgregar(nombres, "urshifu-single-strike", "urshifu-rapid-strike")
    }
    if(nombres.includes("indeedee-male")){
        buscarYAgregar(nombres, "indeedee-male", "indeedee-female")
    }
    if(nombres.includes("morpeko-full-belly")){
        buscarYAgregar(nombres, "morpeko-full-belly", "morpeko-hangry")
    }
    if(nombres.includes("eiscue-ice")){
        buscarYAgregar(nombres, "eiscue-ice", "eiscue-noice")
    }
    if(nombres.includes("toxtricity-amped")){
        buscarYAgregar(nombres, "toxtricity-amped", "toxtricity-low-key")
    }
    if(nombres.includes("zacian")){
        buscarYAgregar(nombres, "zacian", "zacian-crowned")
    }
    if(nombres.includes("zamazenta")){
        buscarYAgregar(nombres, "zamazenta", "zamazenta-crowned")
    }




    
    const nombresSinDuplicados = eliminarDuplicados(nombres);
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
            if(name === "sun" || name === "moon" || name === "ultra-sun" || name === "ultra-moon"){
                if(pokemon.pokemon_species.name === "raichu")return "https://pokeapi.co/api/v2/pokemon/10100/"
                if(pokemon.pokemon_species.name === "sandshrew")return "https://pokeapi.co/api/v2/pokemon/10101/"
                if(pokemon.pokemon_species.name === "sandslash")return "https://pokeapi.co/api/v2/pokemon/10102/"
                if(pokemon.pokemon_species.name === "vulpix")return "https://pokeapi.co/api/v2/pokemon/10103/"
                if(pokemon.pokemon_species.name === "ninetales")return "https://pokeapi.co/api/v2/pokemon/10104/"
                if(pokemon.pokemon_species.name === "diglett")return "https://pokeapi.co/api/v2/pokemon/10105/"
                if(pokemon.pokemon_species.name === "dugtrio")return "https://pokeapi.co/api/v2/pokemon/10106/"
                if(pokemon.pokemon_species.name === "meowth")return "https://pokeapi.co/api/v2/pokemon/10107/"
                if(pokemon.pokemon_species.name === "persian")return "https://pokeapi.co/api/v2/pokemon/10108/"
                if(pokemon.pokemon_species.name === "geodude")return "https://pokeapi.co/api/v2/pokemon/10109/"
                if(pokemon.pokemon_species.name === "graveler")return "https://pokeapi.co/api/v2/pokemon/10110/"
                if(pokemon.pokemon_species.name === "golem")return "https://pokeapi.co/api/v2/pokemon/10111/"
                if(pokemon.pokemon_species.name === "grimer")return "https://pokeapi.co/api/v2/pokemon/10112/"
                if(pokemon.pokemon_species.name === "muk")return "https://pokeapi.co/api/v2/pokemon/10113/"
                if(pokemon.pokemon_species.name === "exeggutor")return "https://pokeapi.co/api/v2/pokemon/10114/"
                if(pokemon.pokemon_species.name === "marowak")return "https://pokeapi.co/api/v2/pokemon/10115/"
            }

            if(name === "sword" || name === "shield"){
                if(pokemon.pokemon_species.name === "meowth")return "https://pokeapi.co/api/v2/pokemon/10161/"
                if(pokemon.pokemon_species.name === "ponyta")return "https://pokeapi.co/api/v2/pokemon/10162/"
                if(pokemon.pokemon_species.name === "rapidash")return "https://pokeapi.co/api/v2/pokemon/10163/"
                if(pokemon.pokemon_species.name === "slowpoke")return "https://pokeapi.co/api/v2/pokemon/10164/"
                if(pokemon.pokemon_species.name === "slowbro")return "https://pokeapi.co/api/v2/pokemon/10165/"
                if(pokemon.pokemon_species.name === "farfetchd")return "https://pokeapi.co/api/v2/pokemon/10166/"
                if(pokemon.pokemon_species.name === "weezing")return "https://pokeapi.co/api/v2/pokemon/10167/"
                if(pokemon.pokemon_species.name === "mr-mime")return "https://pokeapi.co/api/v2/pokemon/10168/"
                if(pokemon.pokemon_species.name === "articuno")return "https://pokeapi.co/api/v2/pokemon/10169/"
                if(pokemon.pokemon_species.name === "zapdos")return "https://pokeapi.co/api/v2/pokemon/10170/"
                if(pokemon.pokemon_species.name === "moltres")return "https://pokeapi.co/api/v2/pokemon/10171/"
                if(pokemon.pokemon_species.name === "slowking")return "https://pokeapi.co/api/v2/pokemon/10172/"
                if(pokemon.pokemon_species.name === "corsola")return "https://pokeapi.co/api/v2/pokemon/10173/"
                if(pokemon.pokemon_species.name === "zigzagoon")return "https://pokeapi.co/api/v2/pokemon/10174/"
                if(pokemon.pokemon_species.name === "linoone")return "https://pokeapi.co/api/v2/pokemon/10175/"
                if(pokemon.pokemon_species.name === "darumaka")return "https://pokeapi.co/api/v2/pokemon/10176/"
                if(pokemon.pokemon_species.name === "darmanitan-standard")return "https://pokeapi.co/api/v2/pokemon/10177/"
                if(pokemon.pokemon_species.name === "yamask")return "https://pokeapi.co/api/v2/pokemon/10178/"
                if(pokemon.pokemon_species.name === "stunfisk")return "https://pokeapi.co/api/v2/pokemon/10179/"
            }

            console.log(pokemon.pokemon_species.url);
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

    pokemons.unshift(pokemonPlaceholder);
    return pokemons;
};



export default fetchPokemonGeneration;
export { fetchPokemonGames };