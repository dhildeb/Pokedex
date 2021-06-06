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
    let pokemon = {
      id: res.data.id,
      name: res.data.name,
      height: res.data.height,
      weight: res.data.weight,
      types: res.data.types,
      abilities: res.data.abilities,
      img: res.data.sprites.front_default,
      url: url
    }
    console.log(pokemon)
    ProxyState.activePokemon = new ActivePokemon(pokemon)
  }

  catchPokemon() {
    console.log(ProxyState.activePokemon)
    ProxyState.usersPokemons = [...ProxyState.usersPokemons, new UsersPokemon(ProxyState.activePokemon)]
    console.log(ProxyState.usersPokemons)
  }

  releasePokemon(id) {
    ProxyState.usersPokemons = ProxyState.usersPokemons.filter(p => p.id != id)
  }
}

export const pokeApiMonsServices = new PokeApiMonsServices()