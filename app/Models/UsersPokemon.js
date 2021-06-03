import { ActivePokemon } from "./ActivePokemon.js";

export class UsersPokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.user = data.user
  }

  get usersTemplate() {
    return `
    <tr class="row" onclick="app.pokeApiMonsController.selectPokemon('${this.id}')">
    <th class="w-100">${this.name}</th>
    </tr>
    `
  }
}
