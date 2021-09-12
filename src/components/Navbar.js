const Navbar = () => (
  <nav className="navbar navbar-expand-lg bglight">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <a className="navbar-brand white" href="/register">Hotels & Resorts</a>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <a className="nav-link white" href="/register">
            Residences
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link white" href="/register">Dinning</a>
        </li>
        <li className="nav-item">
          <a className="nav-link white" href="/register" tabIndex="-1" aria-disabled="true">Events</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2 transparent" type="search" placeholder="Search" aria-label="Search" />
      </form>
    </div>
  </nav>
);

export default Navbar;
