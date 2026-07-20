"use client";

import { productsFake } from "@/data/products";
import ProductCard from "@/ui/components/ProductCard";
import SearchBar from "@/ui/components/SearchBar";
import { useMemo, useState } from "react";

export default function Home() {
  const [textoBusqueda, setTextoBusqueda] = useState("");

  const productosFiltrados = useMemo(() => {
    return productsFake.filter((product) =>
      product.title.toLowerCase().includes(textoBusqueda.toLowerCase()),
    );
  }, [textoBusqueda]);

  return (
    <div className="flex flex-col gap-8 p-10">
      <h1 className="text-2xl font-bold text-center">Catálogo de Productos</h1>
      <SearchBar value={textoBusqueda} onChange={setTextoBusqueda} />
      <div className="flex flex-wrap justify-center gap-8">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))
        ) : (
          <div className="w-full rounded-lg border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
            <p className="text-xl font-semibold text-gray-700">
              No se encontraron productos
            </p>
            <p className="mt-2 text-gray-500">
              Intenta buscar con otro nombre.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
