import { fetchPokemonGames } from "../helpers/fetch";
import pokemonGenereation from "../helpers/generacionSelector";
import creadorDeSelect from "./creadorDeSelect";

const creadoraDeCards = async (generacion: number | string, padre: HTMLElement) => {
    const contenedor: HTMLElement = document.createElement('div');
    const contenedorIMG: HTMLElement = document.createElement('div');
    const img: HTMLElement = document.createElement('img');
    const nombre: HTMLElement = document.createElement('h2');
    const tipo: HTMLElement = document.createElement('h3');
    const select: HTMLElement = document.createElement('select');
  
    contenedor.classList.add('card');
    contenedorIMG.classList.add('contenedorIMG');


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
  
     
  
    localStorage.setItem('pokemon'+generacion, JSON.stringify(pokemon));
  
    nombre.textContent = pokemon[0].name.charAt(0).toUpperCase() + pokemon[0].name.slice(1); 
    img.setAttribute('src', pokemon[0].img);
    tipo.textContent = pokemon[0].type.charAt(0).toUpperCase() + pokemon[0].type.slice(1);
    contenedor.appendChild(nombre);
    contenedorIMG.appendChild(img);
    contenedor.appendChild(contenedorIMG);
    contenedor.appendChild(tipo);
   
  
    creadorDeSelect(select, contenedor, generacion);
    select.addEventListener('change', (e) => {
      const target = e.target as HTMLSelectElement; // Assertion no nula
      
      const pokemonSeleccionado = pokemon.find((pokemon: any) => pokemon.name === target.value);
    
      if (pokemonSeleccionado) {
        nombre.textContent = pokemonSeleccionado.name.charAt(0).toUpperCase() + pokemonSeleccionado.name.slice(1);
        img.setAttribute('src', pokemonSeleccionado.img);
        tipo.textContent = pokemonSeleccionado.type.charAt(0).toUpperCase() + pokemonSeleccionado.type.slice(1);
      }
    });
    
    padre?.appendChild(contenedor);
  
  
  }
  
    export default creadoraDeCards;