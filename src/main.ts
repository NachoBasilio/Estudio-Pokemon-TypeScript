import fetchPokemon from "./helpers/fetch";
import "./style.css"

const app: HTMLElement | null = document.getElementById('app');
const loader: HTMLElement | null = document.getElementById('loader');


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

const creadoraDeCards = async (generacion: number, padre: HTMLElement) => {
  const contenedor: HTMLElement = document.createElement('div');
  const contenedorIMG: HTMLElement = document.createElement('div');
  const img: HTMLElement = document.createElement('img');
  const nombre: HTMLElement = document.createElement('h2');
  const tipo: HTMLElement = document.createElement('h3');
  const select: HTMLElement = document.createElement('select');

  contenedor.classList.add('card');
  contenedorIMG.classList.add('contenedorIMG');

  const pokemon = await fetchPokemon(generacion);

  nombre.textContent = pokemon[0].name.charAt(0).toUpperCase() + pokemon[0].name.slice(1); 
  img.setAttribute('src', pokemon[0].img);
  tipo.textContent = pokemon[0].type.charAt(0).toUpperCase() + pokemon[0].type.slice(1);
  contenedor.appendChild(nombre);
  contenedorIMG.appendChild(img);
  contenedor.appendChild(contenedorIMG);
  contenedor.appendChild(tipo);
 

  creadorDeSelect(generacion, select, contenedor);
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




// Función para mostrar el loader
function mostrarLoader() {
  if (loader) {
    loader.classList.remove('hidden');
  }
}

// Función para ocultar el loader
function ocultarLoader() {
  if (loader) {
    loader.classList.add('hidden');
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  mostrarLoader();

  const contenedorMayor: HTMLElement = document.createElement('div');
  contenedorMayor.classList.add('contenedorMayor');

  // Realiza tus operaciones de creación de cards aquí
  await creadoraDeCards(9, contenedorMayor);
  await creadoraDeCards(9, contenedorMayor);
  await creadoraDeCards(9, contenedorMayor);
  await creadoraDeCards(9, contenedorMayor);
  await creadoraDeCards(9, contenedorMayor);
  await creadoraDeCards(9, contenedorMayor);

  ocultarLoader();

  app?.appendChild(contenedorMayor);
});