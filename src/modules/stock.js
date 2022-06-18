export const ADD_ESPRESSO = "stock/ADD_ESPRESSO";
export const ADD_MILK = "stock/ADD_MILK";
export const ADD_CUP = "stock/ADD_CUP";

export const MAKE_ESPRESSO = "stock/MAKE_ESPRESSO";
export const MAKE_AMERICANO = "stock/MAKE_AMERICANO";
export const MAKE_CAFE_LATTE = "stock/MAKE_CAFE_LATTE";
export const MAKE_MILK = "stock/MAKE_MILK";

export const addStock = (menu, quantity) => {
  if (menu === "espresso") {
    return {
      type: ADD_ESPRESSO,
      payload: {
        quantity,
      },
    };
  }
  if (menu === "cup") {
    return {
      type: ADD_CUP,
      payload: {
        quantity,
      },
    };
  }
  if (menu === "milk") {
    return {
      type: ADD_MILK,
      payload: {
        quantity,
      },
    };
  }
  return;
};

export const useStock = (menu) => {
  if (menu === "espresso") {
    return {
      type: MAKE_ESPRESSO,
    };
  }
  if (menu === "americano") {
    return {
      type: MAKE_AMERICANO,
    };
  }
  if (menu === "cafelatte") {
    return {
      type: MAKE_CAFE_LATTE,
    };
  }
  if (menu === "milk") {
    return {
      type: MAKE_MILK,
    };
  }
  return;
};

const initState = {
  espresso: 0,
  milk: 0,
  cup: 0,
};

const stock = (state = initState, action) => {
  if (action.type === ADD_ESPRESSO) {
    const { quantity } = action.payload;
    return {
      ...state,
      espresso: Number(state.espresso) + Number(quantity),
    };
  }
  if (action.type === ADD_CUP) {
    const { quantity } = action.payload;
    return {
      ...state,
      cup: Number(state.cup) + Number(quantity),
    };
  }
  if (action.type === ADD_MILK) {
    const { quantity } = action.payload;
    return {
      ...state,
      milk: Number(state.milk) + Number(quantity),
    };
  }
  if (action.type === MAKE_ESPRESSO) {
    return {
      ...state,
      espresso: state.espresso - 1,
      cup: state.cup - 1,
    };
  }
  if (action.type === MAKE_AMERICANO) {
    return {
      ...state,
      espresso: state.espresso - 1,
      cup: state.cup - 1,
    };
  }
  if (action.type === MAKE_CAFE_LATTE) {
    return {
      espresso: state.espresso - 1,
      cup: state.cup - 1,
      milk: state.milk - 1,
    };
  }
  if (action.type === MAKE_MILK) {
    return {
      ...state,
      cup: state.cup - 1,
      milk: state.milk - 1,
    };
  }
  return state;
};

export default stock;
