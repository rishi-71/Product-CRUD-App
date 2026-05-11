"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import Button from "@/components/ui/Button";
import { Product } from "@/types/product";
import ProductForm from "@/components/product/ProductForm";
import Modal from "@/components/ui/Modal";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProduct, setEditProduct] =
  useState<Product | null>(null);

  async function fetchProducts() {
    try {
      const res = await fetch("https://dummyjson.com/products");

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await res.json();

      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

 useEffect(() => {
  async function loadProducts() {
    try {
      const res = await fetch(
        "https://dummyjson.com/products"
      );

      if (!res.ok) {
        throw new Error(
          "Failed to fetch products"
        );
      }

      const data = await res.json();

      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  loadProducts();
}, []);

function addProduct(product : {
  title : string;
  price : number;
}){
  const newProduct : Product ={
    id: Date.now(),
    title:product.title,
    price : product.price,
    thumbnail: "https://via.placeholder.com/300",
  };
  setProducts([newProduct, ...products]);
  setIsModalOpen(false);
}
function deleteProduct(id: number) {
  const updatedProducts = products.filter(
    (product) => product.id !== id
  );

  setProducts(updatedProducts);
}

function updateProduct(updated: Product) {
  const updatedProducts = products.map(
    (product) =>
      product.id === updated.id
        ? updated
        : product
  );

  setProducts(updatedProducts);

  setEditProduct(null);

  setIsModalOpen(false);
}

function handleEdit(product: Product) {
  setEditProduct(product);

  setIsModalOpen(true);
}

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Product List
        </h1>

        <Button onClick={()=>
          setIsModalOpen(true)
        }>{editProduct ? "Edit Product"
          : "Add Product"
        }</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((product) => (
<ProductCard
  key={product.id}
  product={product}
  onDelete={deleteProduct}
  onEdit={handleEdit}
/>
        ))}
      </div>

      <Modal isOpen ={isModalOpen}
      onClose={()=> {setIsModalOpen(false);
        setEditProduct(null)}
      }>
        <h2 className="text-2xl font-bold mb-5 text-white">Add Product</h2>

        <ProductForm
  addProduct={addProduct}
  updateProduct={updateProduct}
  editProduct={editProduct}
/>
      </Modal>
    </div>
  );
}