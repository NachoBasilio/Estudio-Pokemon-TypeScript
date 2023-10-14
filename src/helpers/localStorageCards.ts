// {
//   "juegoOGeneracion": {
//     "GYM1":{
//       "1": pokemon,
//       "2": pokemon,
//       "3": pokemon,
//       "4": pokemon,
//       "5": pokemon,
//       "6": pokemon
//     },
//     "GYM2":{
//       "1": pokemon,
//       "2": pokemon,
//       "3": pokemon,
//       "4": pokemon,
//       "5": pokemon,
//       "6": pokemon
//     },
//     "GYM3":{
//       "1": pokemon,
//       "2": pokemon,
//       "3": pokemon,
//       "4": pokemon,
//       "5": pokemon,
//       "6": pokemon
//     },
//     "GYM4":{
//       "1": pokemon,
//       "2": pokemon,
//       "3": pokemon,
//       "4": pokemon,
//       "5": pokemon,
//       "6": pokemon
//     },
//     "GYM5":{
//       "1": pokemon,
//       "2": pokemon,
//       "3": pokemon,
//       "4": pokemon,
//       "5": pokemon,
//       "6": pokemon
//     },
//     "GYM6":{
//       "1": pokemon,
//       "2": pokemon,
//       "3": pokemon,
//       "4": pokemon,
//       "5": pokemon,
//       "6": pokemon
//     },
//     "GYM7":{
//       "1": pokemon,
//       "2": pokemon,
//       "3": pokemon,
//       "4": pokemon,
//       "5": pokemon,
//       "6": pokemon
//     },
//     "GYM8":{
//       "1": pokemon,
//       "2": pokemon,
//       "3": pokemon,
//       "4": pokemon,
//       "5": pokemon,
//       "6": pokemon
//     },
//     "Elite4":{
//       "1": pokemon,
//       "2": pokemon,
//       "3": pokemon,
//       "4": pokemon,
//       "5": pokemon,
//       "6": pokemon
//     },
//     "Champion": {
//       "1": pokemon,
//       "2": pokemon,
//       "3": pokemon,
//       "4": pokemon,
//       "5": pokemon,
//       "6": pokemon
//     },
//     "Hall of Fame": {
//       "1": pokemon,
//       "2": pokemon,
//       "3": pokemon,
//       "4": pokemon,
//       "5": pokemon,
//       "6": pokemon
//     }

//   }
// }


export default function localStorageCards(juegoOGeneracion: string|number, gymOElite4: string, pokemon: any, numero: number): void {
  const objetoGuardado = localStorage.getItem('Equipo' + juegoOGeneracion);
  let objetoParseado: Record<string, any> = objetoGuardado ? JSON.parse(objetoGuardado) : {};

  if (!objetoParseado[juegoOGeneracion]) {
    objetoParseado[juegoOGeneracion] = {};
  }

  if (!objetoParseado[juegoOGeneracion][gymOElite4]) {
    objetoParseado[juegoOGeneracion][gymOElite4] = {};
  }

  objetoParseado[juegoOGeneracion][gymOElite4][numero] = pokemon;

  localStorage.setItem('Equipo' + juegoOGeneracion, JSON.stringify(objetoParseado));
}


