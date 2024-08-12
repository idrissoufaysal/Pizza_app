"use client";
import React, { useEffect, useState } from "react";
import { PizzaType } from "../types";
import Image from "next/image";
import Card from "./Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { pizzas } from "../data";

export default function Item() {
  const [data, setData] = useState<PizzaType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
  const handleAddtoCart = () => {
    toast.success(`Pizza  ajouté au panier!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // add to cart logic here
  };
  useEffect(() => {
    fetchPizza();
  }, []);

  return (
    <div className="max-w-[1030px] w-full mx-auto p-5 flex justify-center items-center">
      {!isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-md:mt-28 gap-4 justify-center items-center p-5">
          {data.map((d) => (
            <Card key={d.id} data={d} addCart={() => handleAddtoCart} remove={() => {}} />
          ))}
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <h1 className="text-2xl font-medium text-stone-700">Loading...</h1>
        </div>
      )}
    </div>
  );
}
