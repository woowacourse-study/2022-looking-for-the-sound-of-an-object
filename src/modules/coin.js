const CHARGE_COIN = "coin/CHARGE_COIN";
const USE_COIN = "coin/USE_COIN";
const RETURN_COIN = "coin/RETURN_COIN";

export const chargeCoin = (chargeCoin) => {
  return {
    type: CHARGE_COIN,
    payload: {
      chargeCoin,
    },
  };
};

export const coinUse = (price) => {
  return {
    type: USE_COIN,
    payload: {
      price,
    },
  };
};

export const returnCoin = () => {
  return {
    type: RETURN_COIN,
  };
};

const initState = {
  coin: 0,
};

const coin = (state = initState, action) => {
  if (action.type === CHARGE_COIN) {
    const { chargeCoin } = action.payload;

    return {
      coin: state.coin + chargeCoin,
    };
  }
  if (action.type === USE_COIN) {
    const { price } = action.payload;
    return {
      coin: state.coin - price,
    };
  }
  if (action.type === RETURN_COIN) {
    return {
      coin: 0,
    };
  }
  return state;
};

export default coin;
