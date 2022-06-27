import { MENU_NAME } from "../constants";

export const ADD_ESPRESSO = "stock/ADD_ESPRESSO";
export const ADD_MILK = "stock/ADD_MILK";
export const ADD_CUP = "stock/ADD_CUP";
export const ADD_COKE = "stock/ADD_COKE";
export const ADD_SIDER = "stock/ADD_SIDER";

export const MAKE_ESPRESSO = "stock/MAKE_ESPRESSO";
export const MAKE_AMERICANO = "stock/MAKE_AMERICANO";
export const MAKE_CAFE_LATTE = "stock/MAKE_CAFE_LATTE";
export const MAKE_MILK = "stock/MAKE_MILK";
export const MAKE_COKE = "stock/MAKE_COKE";
export const MAKE_SIDER = "stock/MAKE_SIDER";

export const addStock = (menu, quantity) => {
  if (menu === MENU_NAME.espresso) {
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
  if (menu === MENU_NAME.milk) {
    return {
      type: ADD_MILK,
      payload: {
        quantity,
      },
    };
  }
  if (menu === MENU_NAME.coke) {
    return {
      type: ADD_COKE,
      payload: {
        quantity,
      },
    };
  }
  if (menu === MENU_NAME.sida) {
    return {
      type: ADD_SIDER,
      payload: {
        quantity,
      },
    };
  }
  return;
};

export const useStock = (menu) => {
  if (menu === MENU_NAME.espresso) {
    return {
      type: MAKE_ESPRESSO,
    };
  }
  if (menu === MENU_NAME.americano) {
    return {
      type: MAKE_AMERICANO,
    };
  }
  if (menu === MENU_NAME.cafelatte) {
    return {
      type: MAKE_CAFE_LATTE,
    };
  }
  if (menu === MENU_NAME.milk) {
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
  coke: 0,
  sida: 0,
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
  if (action.type === ADD_COKE) {
    const { quantity } = action.payload;
    return {
      ...state,
      coke: Number(state.coke) + Number(quantity),
    };
  }
  if (action.type === ADD_SIDER) {
    const { quantity } = action.payload;
    return {
      ...state,
      sida: Number(state.sida) + Number(quantity),
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
  if (action.type === MAKE_COKE) {
    return {
      ...state,
      cup: state.cup - 1,
      coke: state.coke - 1,
    };
  }
  if (action.type === MAKE_SIDER) {
    return {
      ...state,
      cup: state.cup - 1,
      sida: state.sida - 1,
    };
  }
  return state;
};

export default stock;
