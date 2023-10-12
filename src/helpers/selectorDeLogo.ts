import red from "/logos/Logo_Pokémon_Rojo_y_Pokémon_Azul.png";
import blue from "/logos/Logo_Pokémon_Rojo_y_Pokémon_Azul.png";
import yellow from "/logos/Pokémon_Yellow_Logo.png";
import gold from "/logos/PokemonGoldLogo.webp";
import silver from "/logos/SilverLogo.webp";
import crystal from "/logos/Pokemon_-_Crystal_Version_logo.webp";
import ruby from "/logos/Pokemon_Ruby.webp";
import sapphire from "/logos/Pokemon_-_Sapphire_Version_logo.webp";
import emerald from "/logos/Pok%3FmonEmerald.webp";
import firered from "/logos/Pokemon_firered.webp";
import leafgreen from "/logos/Pokemon_LeafGreen.webp";
import diamond from "/logos/Pokemon_Diamond.webp";
import pearl from "/logos/Pokemon_Pearl.webp";
import platinum from "/logos/Pokemon_Platinum.webp";
import heartgold from "/logos/Pokemon-heart-gold-logo.webp";
import soulsilver from "/logos/Hgss_logo_ss_us.webp";
import black from "/logos/Pokemonblack.webp";
import white from "/logos/White_logo.webp";
import black2 from "/logos/Pokemon_Black_2.webp";
import white2 from "/logos/Pokemon_White_2.webp";
import x from "/logos/Pokemon_X.webp";
import y from "/logos/Pokemon_Y.webp";
import omegaRuby from "/logos/Pokemon_Omega_Ruby.webp";
import alphaSapphire from "/logos/Pokemon_Alpha_Sapphire.webp";
import sun from "/logos/PokemonSun.webp";
import moon from "/logos/Pok%3Fmon_Moon.webp";
import ultraSun from "/logos/Pok%3Fmon_Ultra_Sun.webp";
import ultraMoon from "/logos/Pok%3Fmon_Ultra_Moon.webp";
import letsGoPikachu from "/logos/pikachu.webp";
import letsGoEevee from "/logos/eevee.webp";
import sword from "/logos/espada.webp";
import shield from "/logos/escudo.webp";
import scarlet from "/logos/escarlata.webp";
import violet from "/logos/violeta.webp";



export default function selectorDeLogo(juegoOgen: string | number, nodo: HTMLElement) {
    const img = document.createElement('img')
    console.log(juegoOgen)
  
    const juegoImagenes: any = {
      Red: red,
      Blue: blue,
      Yellow: yellow,
      Gold: gold,
      Silver: silver,
      Crystal: crystal,
      Ruby: ruby,
      Sapphire: sapphire,
      Emerald: emerald,
      Firered: firered,
      Leafgreen: leafgreen,
      Diamond: diamond,
      Pearl: pearl,
      Platinum: platinum,
      Heartgold: heartgold,
      Soulsilver: soulsilver,
      Black: black,
      White: white,
      'Black-2': black2,
      'White-2': white2,
      X: x,
      Y: y,
      'Omega-ruby': omegaRuby,
      'Alpha-sapphire': alphaSapphire,
      Sun: sun,
      Moon: moon,
      'Ultra-sun': ultraSun,
      'Ultra-moon': ultraMoon,
      'Lets-go-pikachu': letsGoPikachu,
      'Lets-go-eevee': letsGoEevee,
      Sword: sword,
      Shield: shield,
      Scarlet: scarlet,
      Violet: violet,
    };
  
    const rutaImagen = juegoImagenes[juegoOgen] || '/pokeball.png';
  
    img.src = rutaImagen;
    nodo.appendChild(img);
  }
