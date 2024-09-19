import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid main-cont">
          <a className="navbar-brand " href="#">
            <img
              className="logo-image"
              src="https://cdn.prod.website-files.com/62720565a7b402ef161555a0/627211c95ff193b88aa90ed9_synfena-logo.svg"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex align-items-center ">
              <li className="nav-item">
                <div className="dropdown ">
                  <a className="btn dropdown-toggle" data-bs-toggle="dropdown">
                    Products
                  </a>

                  <ul className="dropdown-menu fluid">
                    <li>
                      <NavLink className="dropdown-item" to={"/"}>
                        Action
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to={"/"}>
                        Another action
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to={"/"}>
                        Something else here
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">
                  Faqs
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">
                  Our Projects
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">
                  Our mission
                </a>
              </li>

              <li className="nav-item mx-3">
                <a className="nav-link" href="#">
                  Our artiles
                </a>
              </li>
              <li className="nav-item ">
                <button className="btn btn-primary rounded-pill py-3">
                  Log in to FarmCloud
                </button>
              </li>
              <li className="nav-item ">
                <button className="btn btn-primary rounded-pill py-3 ">
                  Talk to a Consultant
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
