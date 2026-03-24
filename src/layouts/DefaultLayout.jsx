import { Link, Outlet } from "react-router";

// creo la navbar per viaggiare tra le pagine

export default function DefaultLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="text-primary navbar-brand fs-3 fw-semibold">BooRoad</span>
          <div className="navbar-nav ms-auto d-flex">
            <Link className="nav-link fs-4 fw-medium" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link fs-4 fw-medium" aria-current="page" to="/address-book">
              Rubrica
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mt-4">
        <Outlet />
      </main>
    </>
  );
}
