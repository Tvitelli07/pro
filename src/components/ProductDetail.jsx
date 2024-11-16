import { useParams } from "react-router-dom";
import useFirebaseCollection from "../hooks/useFirebaseCollection";
import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";

const ProductDetail = () => {
  const { id } = useParams(); // Obtiene el ID del producto desde la URL
  const products = useFirebaseCollection("productosenstock");
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h3 className="text-center">Producto no encontrado</h3>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    Swal.fire({
      icon: "success",
      title: "Producto Agregado",
      text: `${product.title} se añadió al carrito.`,
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">{product.title}</h1>
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        <img
          src={product.img}
          className="card-img-top"
          alt={product.title}
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description || "Sin descripción"}</p>
          <h6 className="text-primary">Precio: ${product.price || "No disponible"}</h6>
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
