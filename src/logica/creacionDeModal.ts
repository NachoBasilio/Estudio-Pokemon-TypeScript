import creadoraDeCards from "./creadoraDeCards";



const modal = (app: HTMLElement | null) => {
    const modal = document.createElement('div');
    const titulo = document.createElement('h2');
    const form = document.createElement('div');
    const textoGame = document.createElement('label');
    const selectGame = document.createElement('select');
    const textoGeneration = document.createElement('label');
    const selectGeneration = document.createElement('select');
    const botonGeneracion = document.createElement('button');
    const botonGame = document.createElement('button');
    const botonCerrar = document.createElement('button');

    modal.classList.add('modal');
    titulo.classList.add('titulo');
    form.classList.add('form');
    textoGame.classList.add('texto');
    selectGame.classList.add('select');
    textoGeneration.classList.add('texto');
    selectGeneration.classList.add('select');
    botonGeneracion.classList.add('boton');
    botonGame.classList.add('boton');
    botonCerrar.classList.add('botonCerrar');
    

    titulo.textContent = 'Agrega un Pokemon';
    textoGame.textContent = 'Selecciona un juego';
    textoGeneration.textContent = 'Selecciona una generación';
    botonGeneracion.textContent = 'Agregar';
    botonGame.textContent = 'Agregar';
    botonCerrar.textContent = 'X';

    const generaciones = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const games = [
        "red",
        "blue",
        "yellow",
        "gold",
        "silver",
        "crystal",
        "ruby",
        "sapphire",
        "emerald",
        "firered",
        "leafgreen",
        "diamond",
        "pearl",
        "platinum",
        "heartgold",
        "soulsilver",
        "black",
        "white",
        "black-2",
        "white-2",
        "x",
        "y",
        "omega-ruby",
        "alpha-sapphire",
        "sun",
        "moon",
        "ultra-sun",
        "ultra-moon",
        "lets-go-pikachu",
        "lets-go-eevee",
        "sword",
        "shield",
        "scarlet",
        "violet"
    ]

    const optionGames = games.map((game) => {
        const option = document.createElement('option');
        option.textContent = game.charAt(0).toUpperCase() + game.slice(1);
        return option;
    })

    const optionGenerations = generaciones.map((generation) => {
        const option = document.createElement('option');
        option.textContent = generation.toString();
        return option;
    })

    optionGames.forEach((option) => {
        selectGame.appendChild(option);
    })
    optionGenerations.forEach((option) => {
        selectGeneration.appendChild(option);
    })

    form.appendChild(textoGame);
    form.appendChild(selectGame);
    form.appendChild(botonGame);
    form.appendChild(textoGeneration);
    form.appendChild(selectGeneration);
    form.appendChild(botonGeneracion);
    form.appendChild(botonCerrar);
    modal.appendChild(titulo);
    modal.appendChild(form);


    botonGame.addEventListener('click', () => {
        modal.classList.add('eliminarModal');
        
        creadoraDeCards(selectGame.value.toLocaleLowerCase(), app);
    })

    botonGeneracion.addEventListener('click', () => {
        modal.classList.add('eliminarModal');

        creadoraDeCards(parseInt(selectGeneration.value), app);
    })

    botonCerrar.addEventListener('click', () => {
        
        modal.classList.add('eliminarModal');
    })

    return modal;
}

export default modal;