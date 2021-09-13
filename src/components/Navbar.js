import styled from 'styled-components';

const Navbar = () => {
  const Button = styled.button`
  background-color: transparent; 
  padding: 5px 0; 
  width: 150px;
  border: 1px solid #E7522B;
  font-size: large;
  border-radius: 10px;
  color: #E7522B;
  font-family: Segoe UI, sans-serif;
  z-index: 5;
  outline: none;
  margin-right: 12px;
`;

  return (
    <nav className="navbar navbar-expand-lg bglight">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <a className="navbar-brand white" href="/register">
        <img href="images/img7.jpg" alt="logo" />
        Hotels & Resorts
      </a>

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
        <div>
          <a href="login"><Button>Sign In</Button></a>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2 transparent" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </nav>
  );
};
export default Navbar;
