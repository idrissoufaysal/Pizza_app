import { pizzas } from "./../data";
import { create } from "zustand";
import { PizzaType } from "../types";

interface PizzaStore {
  pizzas: PizzaType[] |null;
  addPizza: (pizza: PizzaType) => void;
  removePizza: (id: number) => void;
}

const useStore = create<PizzaStore>((set) => ({
  pizzas: [],
  addPizza: (pizza: PizzaType) =>
    set((state) => ({
      pizzas: [...state.pizzas as PizzaType[], pizza],
    })),

    
    removePizza: (id: number) => set((state) => ({
        pizzas: state.pizzas?.filter((pizza) => pizza.id !== id),
      })),
}));

export default useStore;

