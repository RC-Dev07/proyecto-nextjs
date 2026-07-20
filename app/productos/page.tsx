"use client";

import { productsFake } from "@/data/products";
import ProductCard from "@/ui/components/ProductCard";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 bg-slate-950 p-10 text-white">
      <h1 className="text-center text-2xl font-bold">Lista de Productos</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {productsFake.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
