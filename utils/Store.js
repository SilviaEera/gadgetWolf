// import { createContext, useReducer } from "react";

// export const Store = createContext();

// const initialState = {
//   cart: { cartItems: [] },
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "ADD_TO_CART": {
//       const newItem = action.payload;
//       const existItem = state.cart.cartItems.find(
//         (x) => x.slug === newItem.slug
//       );
//       const cartItems = existItem
//         ? state.cart.cartItems.map((x) =>
//             x.name === existItem.name ? newItem : x
//           )
//         : [...state.cart.cartItems, newItem];
//       return { ...state, cart: { ...state.cart, cartItems } };
//     }
//     default:
//       return state;
//   }
// }

// export function StoreProvider({ childern }) {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const value = { state, dispatch };
//   return <Store.Provider value={value}>{childern}</Store.Provider>;
// }
