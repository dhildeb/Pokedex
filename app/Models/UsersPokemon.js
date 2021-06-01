import { ActivePokemon } from "./ActivePokemon.js";

export class UsersPokemon extends ActivePokemon {
  constructor(data) {
    super(data)
    this.user = data.user
  }
}
