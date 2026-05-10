import { Product } from "@/types/products";
import ProductCard from "@/components/products/ProductCard";

async function getProducts() : Promise<Product[]>{
  const res = await fetch("https://dummyjson.com/products");

  if(!res.ok){
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data.products;
}

export default async function Home(){
  const products = await getProducts();

  return (
       <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Product List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}