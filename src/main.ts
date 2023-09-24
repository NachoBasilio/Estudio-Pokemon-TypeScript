import creadoraDeCards from "./logica/creadoraDeCards";
import "./style.css"

const app: HTMLElement | null = document.getElementById('app');
const loader: HTMLElement | null = document.getElementById('loader');








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
  await creadoraDeCards(3, contenedorMayor);
  await creadoraDeCards(3, contenedorMayor);
  await creadoraDeCards("x", contenedorMayor);
  await creadoraDeCards("ruby", contenedorMayor);
  await creadoraDeCards(7, contenedorMayor);
  await creadoraDeCards(9, contenedorMayor);

  ocultarLoader();

  app?.appendChild(contenedorMayor);
});