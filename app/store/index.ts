import { pizzas } from "./../data";
import { create } from "zustand";
import { PizzaType } from "../types";

export interface CartPizza extends PizzaType {
  quantity: number;
}

 interface PizzaStore {
  pizzas: CartPizza[] | null;
  addToCart: (pizza: CartPizza) => void;
  removeFromCart: (productId: number) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
}

const usePizzaStore = create<PizzaStore>((set) => ({
  pizzas: [],
  addToCart: (pizza: CartPizza) =>
    set((state) => ({
      pizzas: [...(state.pizzas as CartPizza[]), pizza],
    })),

  removeFromCart: (id: number) =>
    set((state) => ({
      pizzas: state.pizzas?.filter((pizza) => pizza.id !== id),
    })),

  incrementQuantity: (productId: number) => {
    set((state) => ({
      pizzas: state.pizzas?.map((pizza) =>
        pizza.id === productId
          ? { ...pizza, quantity: (pizza.quantity || 0) + 1 }
          : pizza
      ),
    }));
  },

  decrementQuantity: (productId: number) => {},
}));

export default usePizzaStore;
