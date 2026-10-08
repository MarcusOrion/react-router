import { NavLink } from "react-router";
import logo from "../../assets/amazon-basics-logo.png";
export default function Homepage() {
  return (
    <header className="main-header d-flex felx-row justify-content-around bg-primary">
      <img
        src={logo}
        width={300}
        height={100}
        alt="Logo del sito (Amazon Basics)"
      ></img>
      <ul className="d-flex gap-5 list-unstyled me-3 mt-4">
        <li>
          <nav>
            <NavLink
              to="/ChiSiamo"
              className="text-danger fs-4 text-decoration-none"
            >
              Chi siamo
            </NavLink>
          </nav>
        </li>
        <li>
          <nav>
            <NavLink
              to="/Prodotti"
              className="text-danger fs-4 text-decoration-none"
            >
              Prodotti
            </NavLink>
          </nav>
        </li>
      </ul>
    </header>
  );
}
