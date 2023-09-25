import modal from "./logica/modal";

import "./style.css"
import "./modal.css"

const app: HTMLElement | null = document.getElementById('app');

let gym = 0




const contenedoresDeGyms: HTMLElement[] =[
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
  document.createElement('div'),
] 



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


const modalNodo = modal(contenedoresDeGyms, gym);
modalNodo.classList.add('eliminarModal');



window.addEventListener("DOMContentLoaded", async () => {
  
  // Realiza tus operaciones de creación de cards aquí
  await componenteInicial();

  // Una vez que las operaciones de creación de cards se completen, oculta el loader
  

  app?.appendChild(modalNodo);
  contenedoresDeGyms.forEach((contenedor) => {
    contenedor.classList.add('contenedorMayor');
    app?.appendChild(contenedor);
  })
});
