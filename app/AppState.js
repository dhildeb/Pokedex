import { ActivePokemon } from "./Models/ActivePokemon.js"
import { UsersPokemon } from "./Models/UsersPokemon.js"
import { PokeApiMon } from "./Models/PokeApiMon.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {ActivePokemon[]} */
  activePokemon = null
  /** @type {UsersPokemon[]} */
  usersPokemons = []
  /** @type {PokeApiMon[]} */
  pokedex = []

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})