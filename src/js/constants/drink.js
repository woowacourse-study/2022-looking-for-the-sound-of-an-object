import Drink from '../components/Order/Drink.js';

const ingredients = {
  espresso: '에스프레소',
  hotWater: '뜨거운 물',
  milk: '우유',
};

const drinks = {
  espresso: new Drink('에스프레소', 1500, [ingredients.espresso]),
  americano: new Drink('아메리카노', 1000, [
    ingredients.espresso,
    ingredients.hotWater,
  ]),
  cafelatte: new Drink('카페라떼', 2000, [
    ingredients.milk,
    ingredients.espresso,
  ]),
  milk: new Drink('우유', 1000, [ingredients.milk]),
};

export { drinks };
