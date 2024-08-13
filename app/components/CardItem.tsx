import React from "react";
import { CartPizza } from "../store";
import Image from "next/image";

interface CardItem {
    data:CartPizza 
  inc: () => void;
  decre: () => void;
  quantity: number;
}
export default function CardItem({ inc, decre, quantity,data }: CardItem) {
  return (
    <div className="w-[200px] bg-gray-300 border-b-2 h-[150px] flex flex-col gap-4">
     
     <Image src={data?.image} alt={data?.name} />
      <div className="">
        <button
          onClick={decre}
          disabled={quantity <= 0}
          className="text-gray-600"
        >
          -
        </button>
        <span>{quantity}</span>
        <button onClick={inc} className="text-gray-600">
          +
        </button>
      </div>
    </div>
  );
}
