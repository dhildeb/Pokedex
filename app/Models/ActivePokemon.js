export class ActivePokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.height = data.height
    this.weight = data.weight
    this.types = data.types
    this.abilities = data.abilities
    this.img = data.sprites.front_default
  }

  get template() {
    return `
    <div class="card w-auto">
    <img src="${this.img}" class="card-img-top" alt="${this.name}.img">
    <div class="card-body">
        <h2 class="card-title">${this.name.toUpperCase()}</h2>
        <span>#${this.id}</span>
        <p class="card-text d-flex flex-column">
            <span><b>abilities</b>: ${this.abilities[0].ability.name}${this.abilities[1] ? ", " + this.abilities[1]?.ability.name : ""}</span>
            <span><b>weight</b>: ${this.weight}</span>
            <span><b>height</b>: ${this.height}</span>
            <span><b>types</b>: ${this.types[0].type.name}${this.types[1] ? ", " + this.types[1]?.type.name : ""}</span>
        </p>
        <button class="btn btn-primary" onclick="app.pokeApiMonsController.catchPokemon()">Catch ${this.name}</button>
    </div>
</div>
    `
  }
}

