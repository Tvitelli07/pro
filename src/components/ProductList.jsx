import React from "react";
import useFirebaseCollection from "../hooks/useFirebaseCollection";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

const ProductList = () => {
  const { data: products, loading, error } = useFirebaseCollection("productosenstock");

  if (loading) {
    return <h3 className="text-center">Cargando productos...</h3>;
  }

  if (error) {
    return <h3 className="text-center text-danger">Error: {error}</h3>;
  }

  if (!products || products.length === 0) {
    return <h3 className="text-center">No hay productos disponibles</h3>;
  }

  return (
    <div className="product-list">
      <h2 className="text-center">Todos los Productos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
