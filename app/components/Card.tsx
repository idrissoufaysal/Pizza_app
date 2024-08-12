import Image from "next/image";
import React from "react";
import { PizzaType } from "../types";

type CardProps={
    data: PizzaType;
    addCart: (pizza:PizzaType) => void;
    remove: (id: number) => void;
  };


export default function Card({ data,addCart,remove }: CardProps) {
  return (
    <div
      className="w-[300px] h-[400px] flex flex-col justify-between gap-2 bg-white border-2 border-gray-200 rounded-md p-5 shadow-md relative hover:translate-y-2 transition-all cursor-pointer"
    >
      <Image
        src={data.image}
        alt={data.name}
        width={200}
        height={200}
        className="size-[200px] object-cover rounded-full"
      />
      <h2 className="text-xl font-bold">{data.name}</h2>
      <p className="text-sm">{data.ingredient}</p>
      <p className="text-[14px] absolute top-3 right-4 size-16 bg-orange-700 text-white rounded-full flex justify-center items-center font-bold border-2 border-stone-300 ">
        {data.price + " $"}
      </p>
      <button className="bg-orange-500 px-4 py-[12px] text-white rounded-md hover:bg-orange-400" onClick={()=>addCart}>Ajouter au panier</button>
    </div>
  );
}
