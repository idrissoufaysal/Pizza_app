"use client"
import React, { useState } from "react";
import { GiFullPizza } from "react-icons/gi";
import { FaPizzaSlice, FaHome,FaTrash } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import Item from "./items";
import CartModal from "./CartModal";

export default function Nav() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    { name: "Home", icon: FaHome ,link:<Item/>},
    { name: "Nos Pizzas", icon: FaPizzaSlice ,link:<Item/>},
    { name: "Contact", icon: IoIosMail,link:<Item/> },
  ];


  return (
    <nav className="fixed top-0 z-10 flex justify-between w-full shadow-md h-[50px] items-center bg-white  p-5">
      <div className="flex gap-2 items-center cursor-pointer">
        <GiFullPizza className="ml-2 text-orange-500 text-2xl" />{" "}
        <span className="text-xl font-black">Pizza go</span>{" "}
      </div> 
      <ul className="hidden md:flex gap-3 justify-center items-center">
        {menu.map((menu, index) => (
          <div key={index} className="flex items-center gap-1 cursor-pointer hover:text-orange-500 hover:underline">
            <span>{<menu.icon/>}</span>
            <span>{menu.name} </span>
          </div>
        ))}
      </ul>

      <button onClick={()=>setIsMenuOpen(!isMenuOpen)}  className="flex gap-2 items-center justify-center h-8 w-14 bg-orange-700 rounded-md hover:bg-orange-500">
        <IoCart className="text-white" />
        <span className="text-white">0</span>
      </button>
      {isMenuOpen && <CartModal isOpen={isMenuOpen} onClose={()=>setIsMenuOpen(false)}/>}
    </nav>
  );
}
