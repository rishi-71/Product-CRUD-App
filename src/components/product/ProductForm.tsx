"use client";

import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { Product } from "@/types/product";

interface ProductFormProps {
  addProduct: (product: {
    title: string;
    price: number;
  }) => void;

  updateProduct: (product: Product) => void;

  editProduct: Product | null;
}

export default function ProductForm({
  addProduct,
  updateProduct,
  editProduct,
}: ProductFormProps) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (editProduct) {
      setTitle(editProduct.title);
      setPrice(editProduct.price.toString());
    }
  }, [editProduct]);

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (editProduct) {
      updateProduct({
        ...editProduct,
        title,
        price: Number(price),
      });
    } else {
      addProduct({
        title,
        price: Number(price),
      });
    }

    setTitle("");
    setPrice("");
  }

  
   return (
  <form
    onSubmit={handleSubmit}
    className="space-y-5"
  >
    <div>
      <label className="block text-sm mb-2 text-gray-300">
        Product Title
      </label>

      <input
        type="text"
        placeholder="Enter product title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="
          w-full
          bg-[#111]
          border
          border-gray-700
          text-white
          px-4
          py-3
          rounded-lg
          outline-none
          focus:border-blue-500
          transition
        "
      />
    </div>

    <div>
      <label className="block text-sm mb-2 text-gray-300">
        Price
      </label>

      <input
        type="number"
        placeholder="Enter product price"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
        className="
          w-full
          bg-[#111]
          border
          border-gray-700
          text-white
          px-4
          py-3
          rounded-lg
          outline-none
          focus:border-blue-500
          transition
        "
      />
    </div>

    <button
      type="submit"
      className="
        w-full
        bg-blue-600
        hover:bg-blue-700
        text-white
        py-3
        rounded-lg
        font-medium
        transition
      "
    >
      {editProduct
        ? "Update Product"
        : "Add Product"}
    </button>
  </form>
);
  
}