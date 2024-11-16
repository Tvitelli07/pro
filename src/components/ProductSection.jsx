import useFirebaseCollection from "../hooks/useFirebaseCollection";


const ProductSection = ({ category }) => {
  const products = useFirebaseCollection("productosenstock");
  const filteredProducts = products.filter((product) =>
    category.split(" ").some((cat) => product.title.toLowerCase().includes(cat))
  );

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Productos de {category}</h2>
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={product.img}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
