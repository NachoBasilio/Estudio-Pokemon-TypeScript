import modal from "./logica/creacionDeModal";
import creadoraDeCards from "./logica/creadoraDeCards";
import "./style.css"
import "./modal.css"

const app: HTMLElement | null = document.getElementById('app');
const loader: HTMLElement | null = document.getElementById('loader');


const teamPokemon: Object[] = []

const componenteInicial = () => {
  const contenedorMayor: HTMLElement = document.createElement('div');
  contenedorMayor.classList.add('contenedorMayor');
  const mas = document.createElement('button');
  mas.classList.add('mas');
  mas.innerText = 'Agrega Pokemon';

  mas.addEventListener('click', async () => {
    
   
    
    
  })

  contenedorMayor.appendChild(mas);
  app?.appendChild(contenedorMayor);
}

// Función para mostrar el loader
const mostrarLoader = ()=> {
  if (loader) {
    loader.classList.remove('hidden');
  }
}

// Función para ocultar el loader
const ocultarLoader = ()=> {
  if (loader) {
    loader.classList.add('hidden');
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  const contenedorMayor: HTMLElement = document.createElement('div');
  contenedorMayor.classList.add('contenedorMayor');
  mostrarLoader();
  // Realiza tus operaciones de creación de cards aquí
  componenteInicial();
  app?.appendChild(modal())
  
  app?.appendChild(contenedorMayor);
  ocultarLoader();
});