import { Link, Outlet } from "react-router";

// creo la navbar per viaggiare tra le pagine

export default function DefaultLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="navbar-nav">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" aria-current="page" to="/address-book">
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
