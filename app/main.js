import { PokeApiMonsController } from "./Controllers/PokeApiMonsController.js";

class App {
  pokeApiMonsController = new PokeApiMonsController()
}

window["app"] = new App();
