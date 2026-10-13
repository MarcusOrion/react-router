import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="container py-5 text-center">
      <h1 className="display-1 fw-bold">404</h1>
      <h2 className="h3 mb-3">Pagina non trovata</h2>
      <p className="text-muted mb-4">
        La pagina che stai cercando non esiste o è stata spostata.
      </p>
      <div className="d-flex justify-content-center gap-3">
        <Link to="/" className="btn btn-primary">
          Torna alla home
        </Link>
        <Link to="/prodotti" className="btn btn-outline-primary">
          Vai ai prodotti
        </Link>
      </div>
    </section>
  );
}
