import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchProducts() {
      setProduct(null);
      setError(null);

      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (response.status === 404) {
          navigate("/prodotti");
          return;
        }

        if (!response.ok) {
          throw new Error("Impossibile caricare il prodotto. Riprova più tardi.");
        }

        const data = await response.json();
        setProduct(data);
      } catch {
        setError("Impossibile caricare il prodotto. Riprova più tardi.");
      }
    }
    fetchProducts();
  }, [id, navigate]);

  if (error) {
    return <p className="container mt-4 text-danger">{error}</p>;
  }

  if (!product) {
    return <p className="container mt-4">Caricamento...</p>;
  }

  return (
    <section className="container mt-4 mb-4">
      <div className="card shadow-sm">
        <div className="row g-0 align-items-center">
          <div className="col-md-5">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid rounded-start"
            />
          </div>

          <div className="col-md-7">
            <div className="card-body p-4">
              <h1 className="card-title uppercase fw-bold mb-3">
                {product.title}
              </h1>

              <p className="card-text">{product.description}</p>

              <h3 className="text-primary fw-bold mt-3">{product.price} €</h3>

              <p className="mb-2">
                <strong>Categoria:</strong> {product.category}
              </p>

              <p className="mb-3">
                <strong>Disponibilità:</strong> {product.stock} pezzi
              </p>

              <button className="btn btn-primary">Acquista</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
