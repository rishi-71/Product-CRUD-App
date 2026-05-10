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
      className="space-y-4"
    >
      <Input
        placeholder="Product Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <Input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
      />

      <Button>
        {editProduct
          ? "Update Product"
          : "Add Product"}
      </Button>
    </form>
  );
}