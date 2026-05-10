import Button from "../ui/Button";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onDelete: (id: number) => void;
  onEdit: (product: Product) => void;
}

export default function ProductCard({
  product,
  onDelete,
  onEdit,
}: ProductCardProps) {
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

      <p className="text-gray-600 mb-4">
        ${product.price}
      </p>

      <div className="flex gap-3">
        <Button
          onClick={() => onEdit(product)}
        >
          Edit
        </Button>

        <Button
          onClick={() =>
            onDelete(product.id)
          }
        >
          Delete
        </Button>
      </div>
    </div>
  );
}