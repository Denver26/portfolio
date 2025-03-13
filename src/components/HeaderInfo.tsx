import { Link } from "react-router-dom";

function HeaderInfo() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand ms-3 fw-bolder" to="/">JDC</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderInfo;
