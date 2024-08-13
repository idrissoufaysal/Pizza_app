"use client";
import React, { useEffect, useState } from "react";
import { PizzaType } from "../types";
import Image from "next/image";
import Card from "./Card";
import { pizzas } from "../data";
import { useStore } from "zustand";
import usePizzaStore, { CartPizza } from "../store";

export default function Item() {
  const [data, setData] = useState<CartPizza[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  //utilisation du store pour ajouter une pizza au panier
  const {addToCart}=usePizzaStore()

  //recuperation de la liste des pizzas
  const fetchPizza = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/pizza");
      const d = await response.json();
      setIsLoading(false);
      setData(d);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  //fonction d'ajout au panier
 
  useEffect(() => {
    fetchPizza();
  }, []);

 

  return (
    <div className="max-w-[1030px] w-full mx-auto p-5 flex justify-center items-center">
      
      {!isLoading?  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-md:mt-28 gap-4 justify-center items-center p-5">
          {data?.map((item) => (
            <Card key={item.id} item={item} addCart={() => addToCart(item)}/>
          ))}
        </div>:(
          <div className="w-full flex items-center justify-center">
            <p className="text-3xl ">Chargement des pizzas...</p>
          </div>
        )}
      
    </div>
  );
}
