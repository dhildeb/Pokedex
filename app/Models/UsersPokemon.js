import { ActivePokemon } from "./ActivePokemon.js";

export class UsersPokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.user = data.user
    this.url = data.url
  }

  get usersTemplate() {
    return `
    <tr class="row" onclick="app.pokeApiMonsController.selectPokemon('${this.url}')">
    <th class="w-100">${this.name}
    <i onclick="app.pokeApiMonsController.releasePokemon('${this.id}')">X</i>
    </th>
    </tr>
    `
  }
}
