import { createContext, useContext, useReducer } from "react";
import { stocks } from "../data/data";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const products = stocks.map((item) => ({
		id: item.id,
		img: item.img,
		title: item.title,
		price: item.price,
		images: item.images,
		year: item.year,
		km: item.km,
		fuel: item.fuel,
		color: item.color,
		colorCode: item.colorCode,
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
