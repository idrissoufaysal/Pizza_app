import React, { useState } from "react";
import CardItem from "./CardItem";
import { useStore } from "zustand";
import usePizzaStore, { CartPizza } from "../store";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

interface props {
  onClose: () => void;
  isOpen: boolean;
}

export default function CartModal({ isOpen, onClose }: props) {

  const { decrementQuantity, removeFromCart, pizzas, incrementQuantity }=usePizzaStore();

  const totalPrice=pizzas?.reduce((totalPrice,pizza)=>(totalPrice+pizza.quantity*pizza.price),0)

  return (
    <>
      {isOpen && (
        <div className="w-[260px] h-[100vh] transition-all overflow-y-scroll right-0 top-12 fixed bg-gray-100 border-l-2 pb-[60px]">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl mt-2 ml-3 font-semibold"> panirer</h1>
            <IoIosClose
              fontSize={30}
              onClick={onClose}
              className="cursor-pointer"
            />
          </div>
          {pizzas?.length === 0 ? (
            <div className="w-full h-full justify-center flex items-center">
              <p>le panier est vide...</p>
            </div>
          ) : (
            pizzas?.map((pizza) => (
              <div
                key={pizza.id}
                className="flext flex-col gap-2 ml-2 border-b-2"
              >
                <Image
                  alt={pizza.name}
                  width={50}
                  height={50}
                  src={pizza.image}
                  className="rounded-full h-[50px] w-[50px]"
                />
                <div>nom: {pizza.name}</div>
                <div>prix: {pizza.price}$</div>
                <div>quantite: {pizza.quantity}</div>
                <div className="flex gap-2 mb-1">
                  <button
                    onClick={() => incrementQuantity(pizza.id)}
                    className="size-6 bg-gray-500 rounded-md flex items-center justify-center text-white"
                  >
                    +
                  </button>
                  <button
                    onClick={() => decrementQuantity(pizza.id)}
                    className="size-6 bg-gray-500 rounded-md flex items-center justify-center text-white"
                  >
                    -
                  </button>
                  <button
                    onClick={() => removeFromCart(pizza.id)}
                    className="size-6 bg-red-500 hover:bg-red-700 rounded-md flex items-center justify-center text-white p-2"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}

          <div>
            <span className="text-2xl">Total : <span>{totalPrice}$</span> </span>
          </div>
          <button
            onClick={onClose}
            className="w-[90%] mt-4 ml-3 border border-orange-500 rounded-md text-orange-500 py-2"
          >Proceder au payement</button>
        </div>
      )}
    </>
  );
}
