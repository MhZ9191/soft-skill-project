import { Link, Outlet } from "react-router";

// creo la navbar per viaggiare tra le pagine

export default function DefaultLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="text-primary navbar-brand fs-3 fw-bold">
          <i className="bi bi-airplane text-primary me-2"></i>
            BooRoad
          </Link>
          <div className="navbar-nav ms-auto d-flex">
            <Link
              className="nav-link fs-4 fw-bold text-primary px-3"
              aria-current="page"
              to="/"
            >
              Home
            </Link>
            <Link
              className="nav-link fs-4 fw-bold text-primary px-3"
              aria-current="page"
              to="/address-book"
            >
              Rubrica
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mt-4 flex-grow-1">
        <Outlet />
      </main>
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className="text-primary">BooRoad</h5>
              <p className="small text-secondary">
                Viaggia lontano, vivi davvero.
              </p>
            </div>
            <div className="col text-end">
              <p className="small text-secondary">
                &copy; {new Date().getFullYear()} BooRoad Inc. Tutti i diritti
                riservati.
              </p>
              <div className="mt-2">
                <Link
                  to="#"
                  className="text-white-50 text-decoration-none me-3 small"
                >
                  Privacy
                </Link>
                <Link
                  to="#"
                  className="text-white-50 text-decoration-none small"
                >
                  Termini
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
