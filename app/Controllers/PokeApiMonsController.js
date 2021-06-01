import { ProxyState } from "../AppState.js";
import { pokeApiMonsServices } from "../Services/PokeApiMonsServices.js";

function _draw() {
  let template = ''
  ProxyState.pokedex.forEach(p => template += p.template)
  document.getElementById('pokedex').innerHTML = template
}

export class PokeApiMonsController {
  constructor() {
    ProxyState.on('pokedex', _draw)
    pokeApiMonsServices.getPokeApiMons()
  }

  selectPokemon(url) {
    pokeApiMonsServices.selectPokemon(url)
  }
}