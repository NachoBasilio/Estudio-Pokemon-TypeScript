import creadoraDeCards from "./creadoraDeCards"


const contenedorDeCards = (genOGame: string | number, padre: HTMLElement)=>{
    const contenedoresObjetivos: string[] = [
        "GYM 1",
        "GYM 2",
        "GYM 3",
        "GYM 4",
        "GYM 5",
        "GYM 6",
        "GYM 7",
        "GYM 8",
        "Elite 4",
        "Champion",
        "Hall of Fame"
    ]
    

    const contenedor: HTMLElement = document.createElement('div');
    contenedor.classList.add('contenedor');
    contenedoresObjetivos.forEach((contenedorObjetivo)=>{
        
        const contenedorObjetivoHTML: HTMLElement = document.createElement('div');
        
        
        const titulo: HTMLElement = document.createElement('h2');
        titulo.textContent = contenedorObjetivo;
        contenedorObjetivoHTML.appendChild(titulo);


        
        contenedorObjetivoHTML.classList.add('contenedorMayor');
        titulo.classList.add('tituloGym');
        
        contenedor.appendChild(contenedorObjetivoHTML);

        creadoraDeCards(genOGame, contenedorObjetivoHTML, contenedorObjetivo, 1);
        creadoraDeCards(genOGame, contenedorObjetivoHTML, contenedorObjetivo, 2);
        creadoraDeCards(genOGame, contenedorObjetivoHTML, contenedorObjetivo, 3);
        creadoraDeCards(genOGame, contenedorObjetivoHTML, contenedorObjetivo, 4);
        creadoraDeCards(genOGame, contenedorObjetivoHTML, contenedorObjetivo, 5);
        creadoraDeCards(genOGame, contenedorObjetivoHTML, contenedorObjetivo, 6);
        
        
        
    })
    const loader = document.getElementById('loader');
    loader?.classList.add("hidden")
    padre.appendChild(contenedor);
    
} 




export default contenedorDeCards;