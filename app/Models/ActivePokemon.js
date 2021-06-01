export class ActivePokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.height = data.height
    this.weight = data.weight
    this.types = data.types
    this.img = data.sprites.front_default
  }

  get template() {
    return `
    <div class="card w-auto">
    <img src="${this.img}" class="card-img-top" alt="${this.name}.img">
    <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text">
            <span>#${this.id}</span>
            <span>abilities: ${this.abilities}</span>
            <span>weight: ${this.weight}</span>
            <span>height: ${this.height}</span>
            <span>types: ${this.types}</span>
        </p>
        <button class="btn btn-primary">Catch ${this.name}</button>
    </div>
</div>
    `
  }
}

