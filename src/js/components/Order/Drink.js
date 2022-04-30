export default class Drink {
  #name;
  #price;
  #ingredients;

  constructor(name, price, ingredients) {
    this.#name = name;
    this.#price = price;
    this.#ingredients = ingredients;
  }

  get name() {
    return this.#name;
  }

  get price() {
    return this.#price;
  }

  make() {
    const makingTemplate = this.#ingredients
      .map(ingredient => `<div>${ingredient}이(가) 나옵니다.</div>`)
      .join('');

    return makingTemplate;
  }
}
