import fetchPokemon from "./helpers/fetch";

const app: HTMLElement | null = document.getElementById('app');
interface Pokemon {
  name: string;
  img: string;
  type: string;
  number: string;
}


const creadorDeSelect = async (generacion: number, select: HTMLElement, padre: HTMLElement) => {
    const pokemon = await fetchPokemon(generacion);
    pokemon.forEach((pokemon: any) => {
        const option = document.createElement('option');
        option.value = pokemon.name;
        option.textContent = pokemon.name;
        select.appendChild(option);
        
    });
    padre?.appendChild(select);
}

const creadoraDeCards = async (generacion: number) => {
  const contenedor: HTMLElement = document.createElement('div');
  const img: HTMLElement = document.createElement('img');
  const nombre: HTMLElement = document.createElement('h2');
  const tipo: HTMLElement = document.createElement('h3');
  const select: HTMLElement = document.createElement('select');
  const pokemon = await fetchPokemon(generacion);

  nombre.textContent = pokemon[0].name;
  img.setAttribute('src', pokemon[0].img);
  tipo.textContent = pokemon[0].type;
  contenedor.appendChild(nombre);
  contenedor.appendChild(img);
  contenedor.appendChild(tipo);
 

  creadorDeSelect(generacion, select, contenedor);
  select.addEventListener('change', (e) => {
    const target = e.target as HTMLSelectElement; // Assertion no nula
    
    const pokemonSeleccionado = pokemon.find((pokemon: any) => pokemon.name === target.value);
  
    if (pokemonSeleccionado) {
      nombre.textContent = pokemonSeleccionado.name;
      img.setAttribute('src', pokemonSeleccionado.img);
      tipo.textContent = pokemonSeleccionado.type;
    }
  });
  
  app?.appendChild(contenedor);


}


window.addEventListener("DOMContentLoaded", ()=>{

    creadoraDeCards(8);
    creadoraDeCards(8);
    creadoraDeCards(8);
    creadoraDeCards(8);
    creadoraDeCards(8);
    creadoraDeCards(8);


})