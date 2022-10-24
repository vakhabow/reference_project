import { calcTotalPrice } from "./calscTotalPrice";
import { CartItem } from "../redux/cart/types";

export const getCartFromLS = () => {
  const info = localStorage.getItem("cart");
  const items = info ? JSON.parse(info) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items: items as CartItem[],
    totalPrice,
  };
};
