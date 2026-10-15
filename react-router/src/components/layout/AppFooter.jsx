import { Link } from "react-router";
export default function AppFooter() {
  return (
    <div>
      <footer className="amazon-footer d-flex flex-row justify-content-around py-2">
        <div className="text-warning fs-5">Amazon&copy; 2026</div>
        <ul className="list-unstyled d-flex flex-row gap-3 fs-5">
          <Link to="/" className="text-decoration-none text-warning">
            Home
          </Link>
          <Link to="ChiSiamo" className="text-decoration-none text-warning">
            Chi Siamo
          </Link>
          <li className="text-decoration-none text-warning">Contatti</li>
        </ul>
      </footer>
    </div>
  );
}
