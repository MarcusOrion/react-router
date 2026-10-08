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
          <li className="text-decoration-none text-danger fs-4">
            <NavLink to="/ChiSiamo">Chi Siamo</NavLink>
          </li>
          <li className="text-decoration-none text-danger fs-4">
            <NavLink to="/Prodotti">Prodotti</NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}
