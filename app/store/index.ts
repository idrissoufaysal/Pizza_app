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
    set((state) => {
      const pizzas = state.pizzas ? [...state.pizzas] : [];
      const existingPizza = pizzas.find((p) => p.id === pizza.id);

      if (existingPizza) {
        existingPizza.quantity += 1;
      } else {
        pizzas.push({ ...pizza, quantity: 1 });
      }

      return { pizzas };
    }),

  removeFromCart: (id: number) =>
    set((state) => ({
      pizzas: state.pizzas?.filter(
        (pizza) => pizza.id !== id && pizza.quantity > 0
      ),
    })),

  incrementQuantity: (productId: number) => {
    set((state) => ({
      pizzas: state.pizzas?.map((pizza) =>
        pizza.id === productId
          ? { ...pizza, quantity: (pizza.quantity || 1) + 1 }
          : pizza
      ),
    }));
  },

  decrementQuantity: (productId: number) => {
    set((state) => ({
      pizzas: state.pizzas?.map((pizza) => {
        return pizza.id === productId && pizza.quantity > 0
          ? { ...pizza, quantity: pizza.quantity - 1 }
          : pizza;
      }),
    }));
  },
}));

export default usePizzaStore;
