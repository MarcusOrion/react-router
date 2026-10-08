import { useState, useEffect } from "react";

export default function Prodotti() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://dummyjson.com/products?limit=12");
      const data = await response.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, []);

  return (
    <section className="container mt-4">
      <div className="row g-3">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>

                <p className="card-text">Prezzo: {product.price} €</p>

                <button className="btn btn-primary">Acquista</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
