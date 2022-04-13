export default class Drink {
  #name;
  #ingredients;

  constructor(name, ingredients) {
    this.#name = name;
    this.#ingredients = ingredients;
  }

  get name() {
    return this.#name;
  }

  make() {
    const makingTemplate = this.#ingredients
      .map(ingredient => `<div>${ingredient}이(가) 나옵니다.</div>`)
      .join('');

    return makingTemplate;
  }
}
