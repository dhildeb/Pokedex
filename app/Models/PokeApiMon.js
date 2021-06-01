export class PokeApiMon {
  constructor(data) {
    this.name = data.name
    this.url = data.url
  }

  get template() {
    return `
    <tr class="row" onclick="app.pokeApiMonsController.selectPokemon('${this.url}')">
    <th class="w-100">${this.name}</th>
    </tr>
    `
  }
}
