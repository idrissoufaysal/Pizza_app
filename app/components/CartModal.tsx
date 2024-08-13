import React from "react";
import CardItem from "./CardItem";
import { useStore } from "zustand";
import usePizzaStore, { CartPizza } from "../store";

interface props {
  onClose: () => void;
  isOpen: boolean;
}

export default function CartModal({ isOpen, onClose }: props) {

  const {addToCart,decrementQuantity,removeFromCart,pizzas,incrementQuantity}=usePizzaStore()
  return (
    <div className="w-[300px] h-[100vh] transition-all overflow-y-scroll right-0 top-12 fixed bg-gray-200 border-l-2 border-stone-700">
    
    </div>
  );
}
