import {Product} from "@/types/products";

interface ProductCardProps{
    product : Product;
}

export default function ProductCard({product} : ProductCardProps){
    return (
         <div className="border p-4 rounded-lg shadow">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded"
      />

      <h2 className="font-semibold mt-3">
        {product.title}
      </h2>

      <p className="text-gray-600">
        ${product.price}
      </p>

      <button>View Product</button>
    </div>
    );
}