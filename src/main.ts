import modal from "./logica/creacionDeModal";

import "./style.css"
import "./modal.css"

const app: HTMLElement | null = document.getElementById('app');
const loader: HTMLElement | null = document.getElementById('loader');
if (loader && app) {
  app.appendChild(loader);
}


const contenedorMayor: HTMLElement = document.createElement('div');
contenedorMayor.classList.add('contenedorMayor');


const teamPokemon: Object[] = []

const componenteInicial = () => {
  const contenedorMayor: HTMLElement = document.createElement('div');
  contenedorMayor.classList.add('contenedorMayor');
  const mas = document.createElement('button');
  mas.classList.add('mas');
  mas.innerText = 'Agrega Pokemon';

  mas.addEventListener('click', async () => {
    modalNodo.classList.remove('eliminarModal');
  })

  contenedorMayor.appendChild(mas);
  app?.appendChild(contenedorMayor);
}


const mostrarLoader = ()=> {
  if (loader) {
    loader.classList.remove('hidden');
  }
}


const ocultarLoader = ()=> {
  if (loader) {
    loader.classList.add('hidden');
  }
}
const modalNodo = modal(contenedorMayor, mostrarLoader, ocultarLoader);
modalNodo.classList.add('eliminarModal');



window.addEventListener("DOMContentLoaded", async () => {
  mostrarLoader();

  // Realiza tus operaciones de creación de cards aquí
  await componenteInicial();

  // Una vez que las operaciones de creación de cards se completen, oculta el loader
  ocultarLoader();

  app?.appendChild(modalNodo);
  app?.appendChild(contenedorMayor);
});
