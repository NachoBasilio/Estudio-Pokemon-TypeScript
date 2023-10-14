import modal from "./logica/modal";

import "./style.css"
import "./modal.css"

const app: HTMLElement | null = document.getElementById('app');
const tituloPokemon: HTMLElement | null = document.createElement('div');
tituloPokemon.id = ('TituloDelJuego');


const contenedorPokemons = document.createElement('div');
contenedorPokemons.classList.add('contenedor');
contenedorPokemons.id = 'contenedorPokemons';


const componenteInicial = () => {
  const contenedorMayor: HTMLElement = document.createElement('div');
  contenedorMayor.classList.add('contenedor');
  const mas = document.createElement('button');
  mas.classList.add('mas');
  mas.innerText = 'Agrega Pokemon';
  

  mas.addEventListener('click', async () => {
    modalNodo.classList.remove('eliminarModal');
  })

  contenedorMayor.appendChild(mas);
  app?.appendChild(contenedorMayor);
}


const modalNodo = modal(contenedorPokemons);
modalNodo.classList.add('eliminarModal');



window.addEventListener("DOMContentLoaded", async () => {
  
  // Realiza tus operaciones de creación de cards aquí
  await componenteInicial();

  // Una vez que las operaciones de creación de cards se completen, oculta el loader




  app?.appendChild(modalNodo);
  app?.appendChild(tituloPokemon);
  app?.appendChild(contenedorPokemons);
});
