import Image from "next/image";
import Header from "./components/header";
import Nav from "./components/nav";
import { PizzaType } from "./types";
import { useEffect, useState } from "react";
import { log } from "console";
import Item from "./components/items";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div >
      <Nav />
      <Header />
      <Item />
      <Footer />
    </div>
  );
}
