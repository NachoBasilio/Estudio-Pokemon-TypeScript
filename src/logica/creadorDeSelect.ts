import { fetchPokemonGames } from "../helpers/fetch";
import pokemonGenereation from "../helpers/generacionSelector";

const creadorDeSelect = async (select: HTMLElement, padre: HTMLElement, generacion: number | string) => {
    let pokemon:any
    if(localStorage.getItem('pokemon'+generacion)){
      pokemon = JSON.parse(localStorage.getItem('pokemon'+generacion) || '{}');
    }else{
        if(typeof generacion === "string"){
            pokemon = await fetchPokemonGames(generacion);
        }else{
            pokemon = await pokemonGenereation(generacion);
        }
    }
      pokemon.forEach((pokemon: any) => {
        const option = document.createElement('option');
        option.value = pokemon.name;
        option.textContent = pokemon.name;
        select.appendChild(option);
          
    });
    padre?.appendChild(select);
}

export default creadorDeSelect;