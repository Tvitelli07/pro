import React from "react";
import useFirebaseCollection from "../hooks/useFirebaseCollection";
import ProductCard from "./ProductCard";
import "../styles/ProductSection.css";

const ProductSection = ({ category }) => {
  const { data: products, loading, error } = useFirebaseCollection("productosenstock");

  if (loading) {
    return <h3 className="text-center">Cargando productos...</h3>;
  }

  if (error) {
    return <h3 className="text-center text-danger">Error: {error}</h3>;
  }

  // Filtrar los productos según la categoría
  const filteredProducts = products.filter((product) => {
    if (category === "partes-de-arriba") {
      return product.title && product.title.toLowerCase().includes("remera");
    } else if (category === "partes-de-abajo") {
      return (
        product.title &&
        (product.title.toLowerCase().includes("bermuda") || product.title.toLowerCase().includes("pantalon"))
      );
    } else if (category === "zapatillas") {
      return product.title && product.title.toLowerCase().includes("zapatilla");
    }
    return false;
  });

  if (filteredProducts.length === 0) {
    return <h3 className="text-center">No hay productos disponibles en esta categoría</h3>;
  }

  return (
    <div className="product-section">
      <h2 className="text-center">{category.replace("-", " ").toUpperCase()}</h2>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
