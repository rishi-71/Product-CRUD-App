import { Product } from "@/types/products";

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
      <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Product List
      </h1>

      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-cover"
            />

            <h2 className="font-semibold mt-3">
              {product.title}
            </h2>

            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}