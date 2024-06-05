import React, { useState } from "react";
import NavComponent from "../components/NavComponent";
import ProductList from "../components/productsList/ProductList";
import DrawerComponent from "../components/DrawerComponent";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  return (
    <>
      <NavComponent toggleDrawer={toggleDrawer} />
      <ProductList />
      <DrawerComponent isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}

export default Home;
