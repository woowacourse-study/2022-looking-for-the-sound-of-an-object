const TAG_CARD = "card/TAG_CARD";
const BUY_DRINK = "card/BUY_DRINK";

export const tagCard = () => {
  return {
    type: TAG_CARD,
  };
};

export const buyDrinkByCard = () => {
  return {
    type: BUY_DRINK,
  };
};

const initState = {
  card: false,
};

const card = (state = initState, action) => {
  if (action.type === TAG_CARD) {
    return {
      card: !state.card,
    };
  }
  if (action.type === BUY_DRINK) {
    return {
      card: false,
    };
  }
  return state;
};

export default card;
