import { ProxyState } from "../AppState.js"
import { ActivePokemon } from "../Models/ActivePokemon.js"
import { PokeApiMon } from "../Models/PokeApiMon.js"

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
    console.log(res)
    ProxyState.activePokemon = new ActivePokemon(res.data)
    console.log(ProxyState.activePokemon)
  }
}

export const pokeApiMonsServices = new PokeApiMonsServices()