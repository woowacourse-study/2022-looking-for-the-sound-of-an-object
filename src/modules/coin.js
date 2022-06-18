const CHARGE_COIN = "coin/CHARGE_COIN";
const RETURN_COIN = "coin/RETURN_COIN";

export const chargeCoin = (coin) => {
  return {
    type: CHARGE_COIN,
    payload: {
      coin,
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
      coin: Number(state.coin) + Number(chargeCoin),
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
