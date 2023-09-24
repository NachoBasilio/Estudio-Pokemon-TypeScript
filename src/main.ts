import fetchPokemon from "./helpers/fetch";

const app: HTMLElement | null = document.getElementById('app');



const creadorDeSelect = async (generacion: number, select: HTMLElement) => {
    const pokemon = await fetchPokemon(generacion);
    pokemon.forEach((pokemon: any) => {
        const option = document.createElement('option');
        option.value = pokemon.name;
        option.textContent = pokemon.name;
        select.appendChild(option);
        
    });
    app?.appendChild(select);
}



window.addEventListener("DOMContentLoaded", ()=>{
    const select: HTMLElement = document.createElement('select') as HTMLSelectElement;

   

    creadorDeSelect(3, select);
    select.addEventListener('change', (e) => {
        const value = (e.target as HTMLSelectElement).value;
        console.log(value);
    })
})