import fetchPokemon from "./helpers/fetch";

const app: HTMLElement | null = document.getElementById('app');

const pokemon = await fetchPokemon();

console.log(pokemon);
