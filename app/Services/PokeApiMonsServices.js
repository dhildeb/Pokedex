import { ProxyState } from "../AppState.js"
import { ActivePokemon } from "../Models/ActivePokemon.js"
import { PokeApiMon } from "../Models/PokeApiMon.js"
import { UsersPokemon } from "../Models/UsersPokemon.js"

const url = 'https://pokeapi.co/api/v2/pokemon'

class PokeApiMonsServices {

  async getPokeApiMons() {
    let res = await axios.get(url)
    let currentList = []
    for (let i = 0; ProxyState.pokedex.length < 249; i++)
      if (res.data.next) {
        currentList = res.data.results.map(p => new PokeApiMon(p))
        res = await axios.get(res.data.next)
        ProxyState.pokedex = [...ProxyState.pokedex, ...currentList]
      }
  }

  async selectPokemon(url) {
    let res = await axios.get(url)
    ProxyState.activePokemon = new ActivePokemon(res.data)
  }

  catchPokemon() {
    console.log(ProxyState.activePokemon)
    ProxyState.usersPokemons = [...ProxyState.usersPokemons, new UsersPokemon(ProxyState.activePokemon)]
    console.log(ProxyState.usersPokemons)
  }
}

export const pokeApiMonsServices = new PokeApiMonsServices()