import { useParams } from "react-router-dom";
import useFirebaseCollection from "../hooks/useFirebaseCollection";
import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: products, loading, error } = useFirebaseCollection("productosenstock");
  const { addToCart } = useCart();

  if (loading) {
    return <h3 className="text-center">Cargando producto...</h3>;
  }

  if (error) {
    return <h3 className="text-center text-danger">Error: {error}</h3>;
  }

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h3 className="text-center text-danger">Producto no encontrado</h3>;
  }

  const handleAddToCart = () => {
    console.log("Producto añadido al carrito:", product); // Depuración
    addToCart(product);
    Swal.fire({
      icon: "success",
      title: "Producto Agregado",
      text: `${product.name} se añadió al carrito.`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">{product.name}</h1>
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        {product.img ? (
          <img
            src={product.img}
            className="card-img-top"
            alt={product.name}
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        ) : (
          <div
            className="card-img-top bg-secondary text-white d-flex align-items-center justify-content-center"
            style={{ height: "400px" }}
          >
            <span>Sin imagen disponible</span>
          </div>
        )}
        <div className="card-body text-center">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description || "Sin descripción"}</p>
          <h6 className="text-primary">Precio: ${product.price}</h6>
          <button
            className="btn btn-primary btn-lg mt-3"
            style={{ width: "100%" }}
            onClick={handleAddToCart}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
