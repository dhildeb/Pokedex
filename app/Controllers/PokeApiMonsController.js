import { ProxyState } from "../AppState.js";
import { pokeApiMonsServices } from "../Services/PokeApiMonsServices.js";

function _drawWildPokemon() {
  let template = ''
  ProxyState.pokedex.forEach(p => template += p.template)
  document.getElementById('pokedex').innerHTML = template
}
function _drawActivePokemon() {
  document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon.template
}

function _drawUsersPokemon() {
  let template = ''
  ProxyState.usersPokemons.forEach(p => template += p.usersTemplate)
  document.getElementById('users-pokemon').innerHTML = template
}


export class PokeApiMonsController {
  constructor() {
    ProxyState.on('pokedex', _drawWildPokemon)
    ProxyState.on('activePokemon', _drawActivePokemon)
    ProxyState.on('usersPokemons', _drawUsersPokemon)
    ProxyState.on('')
    pokeApiMonsServices.getPokeApiMons()
  }

  selectPokemon(url) {
    pokeApiMonsServices.selectPokemon(url)
  }

  catchPokemon() {
    pokeApiMonsServices.catchPokemon()
  }

  releasePokemon(id) {
    pokeApiMonsServices.releasePokemon(id)
  }
}