
export default function selectorDeLogo(juegoOgen: string|number, nodo: HTMLElement) {
    const img = document.createElement('img');
    if(typeof juegoOgen === 'string'){
        switch (juegoOgen) {
            case 'Red':
                img.src = "../../public/logos/Logo_Pokémon_Rojo_y_Pokémon_Azul.png"
                break;
            case 'Blue':
                img.src = "../../public/logos/Logo_Pokémon_Rojo_y_Pokémon_Azul.png"
                break;
            case 'Yellow':
                img.src = "../../public/logos/Pokémon_Yellow_Logo.png"
                break;
            case 'Gold':
                img.src = "../../public/logos/PokemonGoldLogo.webp"
                break;
            case 'Silver':
                img.src = "../../public/logos/SilverLogo.webp"
                break;
            case 'Crystal':
                img.src = "../../public/logos/Pokemon_-_Crystal_Version_logo.webp"
                break;
            case 'Ruby':
                img.src = "../../public/logos/Pokemon_Ruby.webp"
                break;
            case 'Sapphire':
                img.src = "../../public/logos/Pokemon_-_Sapphire_Version_logo.webp"
                break;
            case 'Emerald':
                img.src = "../../public/logos/Pok%3FmonEmerald.webp"
                break;
            case 'FireRed':
                img.src = "../../public/logos/Pokemon_firered.webp"
                break;
            case 'Leafgreen':
                img.src = "../../public/logos/Pokemon_LeafGreen.webp"
                break;
            case 'Diamond':
                img.src = "../../public/logos/Pokemon_Diamond.webp"
                break;
            case 'Pearl':
                img.src = "../../public/logos/Pokemon_Pearl.webp"
                break;
            case 'Platinum':
                img.src = "../../public/logos/Pokemon_Platinum.webp"
                break;
            case 'Heartgold':
                img.src = "../../public/logos/Pokemon-heart-gold-logo.webp"
                break;
            case 'Soulsilver':
                img.src = "../../public/logos/Hgss_logo_ss_us.webp"
                break;
            case 'Black':
                img.src = "../../public/logos/Pokemonblack.webp"
                break;
            case 'White':
                img.src = "../../public/logos/White_logo.webp"
                break;
            case 'Black-2':
                img.src = "../../public/logos/Pokemon_Black_2.webp"
                break;
            case 'White-2':
                img.src = "../../public/logos/Pokemon_White_2.webp"
                break;
            case 'X':
                img.src = "../../public/logos/Pokemon_X.webp"
                break;
            case 'Y':
                img.src = "../../public/logos/Pokemon_Y.webp"
                break;
            case 'Omega-ruby':
                img.src = "../../public/logos/Pokemon_Omega_Ruby.webp"
                break;
            case 'Alpha-sapphire':
                img.src = "../../public/logos/Pokemon_Alpha_Sapphire.webp"
                break;
            case 'Sun':
                img.src = "../../public/logos/PokemonSun.webp"
                break;
            case 'Moon':
                img.src = "../../public/logos/Pok%3Fmon_Moon.webp"
                break;
            case 'Ultra-sun':
                img.src = "../../public/logos/Pok%3Fmon_Ultra_Sun.webp"
                break;
            case 'Ultra-moon':
                img.src = "../../public/logos/Pok%3Fmon_Ultra_Moon.webp"
                break;
            case 'Lets-go-pikachu':
                img.src = "../../public/logos/pikachu.webp"
                break;
            case 'Lets-go-eevee':
                img.src = "../../public/logos/eevee.webp"
                break;
            case 'Sword':
                img.src = "../../public/logos/espada.webp"
                break;
            case 'Shield':
                img.src = "../../public/logos/escudo.webp"
                break;
            case "Scarlet":
                img.src = "../../public/logos/escarlata.webp"
                break;
            case "Violet":
                img.src = "../../public/logos/violeta.webp"
                break;
            default:
                img.src = "../../public/pokeball.png"
                break;
        }
    }else{
        img.src = "../../public/pokeball.png"
    }
    nodo.appendChild(img);
}
