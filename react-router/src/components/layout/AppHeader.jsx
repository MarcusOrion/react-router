import { NavLink, Link } from "react-router";
import logo from "../../assets/amazon-basics-logo.png";
export default function AppHeader() {
  return (
    <div>
      <header className="amazon-header d-flex flex-row justify-content-around">
        <Link to="/">
          <img className="amazon-logo" src={logo} alt="Logo di Amazon" />
        </Link>
        <ul className="d-flex flex-row list-unstyled gap-3 mt-5">
          <NavLink
            to="/ChiSiamo"
            className="text-decoration-none text-warning fs-4"
          >
            Chi Siamo
          </NavLink>
          <NavLink
            to="/prodotti"
            className="text-decoration-none text-warning fs-4"
          >
            Prodotti
          </NavLink>
        </ul>
      </header>
    </div>
  );
}
