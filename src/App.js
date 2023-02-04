import FilterableProductTable from "./Components/FilterableProductTable";
import React from "react";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Fruits", price: "$2", stocked: true, name: "Banana" },
  { category: "Fruits", price: "$3", stocked: false, name: "Pineapple" },
  { category: "Fruits", price: "$3", stocked: true, name: "Mango" },
  { category: "Fruits", price: "$4", stocked: true, name: "Watermelon" },
  { category: "Fruits", price: "$4", stocked: false, name: "Papaya" },
  { category: "Fruits", price: "$5", stocked: true, name: "Strawberry" },
  { category: "Fruits", price: "$5", stocked: false, name: "Peach" },
  { category: "Fruits", price: "$6", stocked: true, name: "Orange" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  { category: "Vegetables", price: "$3", stocked: false, name: "Cucumber" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Carrot" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Potato" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Onion" },
  { category: "Vegetables", price: "$3", stocked: false, name: "Tomato" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Garlic" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Cabbage" },
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
