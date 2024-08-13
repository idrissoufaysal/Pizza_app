import React from "react";
import Image from "next/image"

export default function Header() {
  return (
    <div className="h-[70vh] max-w-[1020px] m-auto p-5 grid grid-cols-1 md:grid-cols-2 text-stone-700 mt-10 justify-center items-center ">
    <div className=" order-2 md:order flex flex-col gap-2 h-[50%] justify-center">
      <h1 className="font-black text-xl lg:text-5xl md:text-4xl text-center md:text-left">
        Le monde du pizza 
      </h1>
      <p className="text-justify md:text-left"> 
        {"La pizza est une recette de cuisine traditionnelle de la cuisine italienne, originaire de Naples à base de galette de pâte à pain, garnie principalement d'\huile d'olive, de sauce tomate, de mozzarella et d'autres ingrédients et cuite au four. "}</p>
       <button className="bg-orange-600 cursor-pointer hover:bg-orange-500 rounded-md py-2 text-white font-bold text-xl">
        voir les pizza
       </button>
    </div>
    <div className="order-1 md:order-2 flex items-center justify-center">
        <Image src="/images/pizza.jpg" alt="pizza" width={300} height={400} className="shadow-md rounded-full"/>
    </div>
    </div>
  );
}
