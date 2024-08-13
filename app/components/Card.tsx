import Image from "next/image";
import React from "react";
import { PizzaType } from "../types";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type CardProps = {
  item: PizzaType;
  addCart: (pizza: PizzaType) => void;
};

export default function Card({ item, addCart }: CardProps) {
  const handleAddtoCart = () => {
    addCart(item);
    toast.success(`Pizza ${item.name} ajouté au panier!`);
  };

  return (
    <div className="w-[300px] h-[400px] flex flex-col justify-between gap-2 bg-white border-2 border-gray-200 rounded-md p-5 shadow-md relative hover:translate-y-2 transition-all cursor-pointer">
      <Image
        src={item.image}
        alt={item.name}
        width={200}
        height={200}
        className="size-[200px] object-cover rounded-full"
      />
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p className="text-sm">{item.ingredient}</p>
      <p className="text-[14px] absolute top-3 right-4 size-16 bg-orange-700 text-white rounded-full flex justify-center items-center font-bold border-2 border-stone-300 ">
        {item.price + " $"}
      </p>
      <button
        className="bg-orange-500 px-4 py-[12px] text-white rounded-md hover:bg-orange-400"
        onClick={handleAddtoCart}
      >
        Ajouter au panier
      </button>
    </div>
  );
}
