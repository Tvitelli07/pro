import useFirebaseCollection from "../hooks/useFirebaseCollection";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import "../styles/ProductList.css";

const ProductList = () => {
  const products = useFirebaseCollection("productosenstock");
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
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
      <h1 className="text-center my-4">Productos</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card product-card">
              <img
                src={product.img}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description || "Sin descripción"}</p>
                <h6 className="card-text text-primary">
                  Precio: ${product.price || "No disponible"}
                </h6>
                <div className="mt-auto d-flex justify-content-between">
                  <Link to={`/item/${product.id}`} className="btn btn-secondary btn-sm">
                    Ver Detalles
                  </Link>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
