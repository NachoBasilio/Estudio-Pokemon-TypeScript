import fetchPokemonGeneration, { fetchPokemonGames } from "../helpers/fetch";
import localStorageCards from "../helpers/localStorageCards";
import creadorDeSelect from "./creadorDeSelect";


const creadoraDeCards = async (generacion: number | string, padre: HTMLElement | null, gym: string, numero : number) => {
    const contenedor: HTMLElement = document.createElement('div');
    const contenedorIMG: HTMLElement = document.createElement('div');
    const img: HTMLElement = document.createElement('img');
    const nombre: HTMLElement = document.createElement('h2');
    const tipo: HTMLElement = document.createElement('h3');
    const tipo2: HTMLElement = document.createElement('h3');
    const select: HTMLElement = document.createElement('select');


    const p = document.createElement('p');
    p.textContent = 'cargando...';

    padre?.appendChild(p);

    contenedor.classList.add('card');
    contenedorIMG.classList.add('contenedorIMG');

    let pokemon:any

    if(localStorage.getItem('pokemon'+generacion)){
      pokemon = JSON.parse(localStorage.getItem('pokemon'+generacion) || '{}');
    }else{
      if(typeof generacion == "string"){
          pokemon = await fetchPokemonGames(generacion);
      }else{
          pokemon = await fetchPokemonGeneration(generacion);
        }
    }

    localStorage.setItem('pokemon'+generacion, JSON.stringify(pokemon));

    if (localStorage.getItem('Equipo' + generacion)) {
      const objetoGuardado = localStorage.getItem('Equipo' + generacion);
      let objetoParseado: Record<string, any> = objetoGuardado ? JSON.parse(objetoGuardado) : {};
      if (objetoParseado[generacion] && objetoParseado[generacion][gym] && objetoParseado[generacion][gym][numero]) {
        const objetoPokemon = objetoParseado[generacion][gym][numero];
        nombre.textContent = objetoPokemon.name.charAt(0).toUpperCase() + objetoPokemon.name.slice(1);
        img.setAttribute('src', objetoPokemon.img);
        tipo.textContent = objetoPokemon.type.charAt(0).toUpperCase() + objetoPokemon.type.slice(1);
        contenedor.appendChild(nombre);
        contenedorIMG.appendChild(img);
        contenedor.appendChild(contenedorIMG);
        contenedor.appendChild(tipo);
        if (objetoPokemon.type2) {
          tipo2.textContent = objetoPokemon.type2.charAt(0).toUpperCase() + objetoPokemon.type2.slice(1);
          contenedor.appendChild(tipo2);
        }
      }else{
        nombre.textContent = pokemon[0].name.charAt(0).toUpperCase() + pokemon[0].name.slice(1);
        img.setAttribute('src', pokemon[0].img);
        tipo.textContent = pokemon[0].type.charAt(0).toUpperCase() + pokemon[0].type.slice(1);
        contenedor.appendChild(nombre);
        contenedorIMG.appendChild(img);
        contenedor.appendChild(contenedorIMG);
        contenedor.appendChild(tipo);
        if (pokemon[0].type2) {
          tipo2.textContent = pokemon[0].type2.charAt(0).toUpperCase() + pokemon[0].type2.slice(1);
          contenedor.appendChild(tipo2);
        }
      }
    } else {
      nombre.textContent = pokemon[0].name.charAt(0).toUpperCase() + pokemon[0].name.slice(1);
      img.setAttribute('src', pokemon[0].img);
      tipo.textContent = pokemon[0].type.charAt(0).toUpperCase() + pokemon[0].type.slice(1);
      contenedor.appendChild(nombre);
      contenedorIMG.appendChild(img);
      contenedor.appendChild(contenedorIMG);
      contenedor.appendChild(tipo);
      if (pokemon[0].type2) {
        tipo2.textContent = pokemon[0].type2.charAt(0).toUpperCase() + pokemon[0].type2.slice(1);
        contenedor.appendChild(tipo2);
      }
    }


    creadorDeSelect(select, contenedor, generacion);
    select.classList.add('selectCard');
    select.addEventListener('change', (e) => {
      const target = e.target as HTMLSelectElement; // Assertion no nula
      const pokemonSeleccionado = pokemon.find((pokemon: any) => pokemon.name === target.value);
      if (pokemonSeleccionado) {
        nombre.textContent = pokemonSeleccionado.name.charAt(0).toUpperCase() + pokemonSeleccionado.name.slice(1);
        img.setAttribute('src', pokemonSeleccionado.img);
        tipo.textContent = pokemonSeleccionado.type.charAt(0).toUpperCase() + pokemonSeleccionado.type.slice(1);
        if(pokemonSeleccionado.type2){
          tipo2.textContent = pokemonSeleccionado.type2.charAt(0).toUpperCase() + pokemonSeleccionado.type2.slice(1);
        }else{
          tipo2.textContent = '';
        }
        localStorageCards(generacion, gym, pokemonSeleccionado, numero);
      }
    });


    p.classList.add('cargando');

    padre?.appendChild(contenedor); // Clona el elemento y lo agrega al padre
}
export default creadoraDeCards;