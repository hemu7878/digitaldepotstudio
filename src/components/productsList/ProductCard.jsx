import { Button, Card } from "flowbite-react";
import React from "react";
import { HiPlus } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import Rating from "../common/Rating";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart({ ...product, qty: 1 }));
  }
  return (
    <Card
      className="max-w-sm"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      // imgSrc="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      imgSrc={product?.img}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {/* Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport */}
          {product?.title}
        </h5>
      </a>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {/* Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport */}
          {product?.desc}
        </h5>
      </a>
      <Rating rating={product?.rating} />

      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {/* $599 */}₹{product?.price}
        </span>
        <Button
          pill
          gradientDuoTone="greenToBlue"
          className="[&>span]:!pl-4"
          size="sm"
          onClick={handleAddToCart}
        >
          <HiPlus className="mr-2 h-5 w-5" />
          Add to cart
        </Button>
      </div>
    </Card>
  );
}

export default ProductCard;
