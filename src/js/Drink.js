export default class Drink {
  #name;
  #ingredients;

  constructor(name, ingredients) {
    this.#name = name;
    this.#ingredients = ingredients;
  }

  make() {
    const basicTemplate = `
      <div>${this.#name}이(가) 만들어지고 있습니다.</div>
    `;

    const makingTemplate = this.#ingredients
      .map(ingredient => `<div>${ingredient}이(가) 나옵니다.</div>`)
      .join('');

    return basicTemplate + makingTemplate;
  }
}
