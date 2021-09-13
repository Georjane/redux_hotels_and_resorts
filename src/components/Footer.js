const Footer = () => (
  <div className="jumbotron footer">
    <h1 className="display-4">Address Hotels & Resorts</h1>
    <p className="lead">Compare Prices & Save Money with AddressHotel® (Worlds Largest Travel Website). Save money & book with Tripadvisor, the worlds largest travel website. Fun Things to Do.</p>
    <hr className="my-4" />
    <p>Sign up to receive exclusive offers and news from Address Hotels + Resorts</p>
    <a className="btn btn-primary btn-lg footerbtn" href="/home" role="button">Learn more</a>
    <h6>
      Designed by Jane, Copyright
      {' '}
      {new Date().getFullYear()}
      {' '}
      &copy;
      {' '}
      all rights reserved
    </h6>
    <div className="footericons">
      <a aria-label="Mute volume" href="https://witahgeorjane.tech/"><i className="fa fa-instagram" /></a>
      <a aria-label="Mute volume" href="https://www.twitter.com/WittyJany"><i className="fa fa-twitter" /></a>
      <a aria-label="Mute volume" href="ttps://www.github.com/Georjane"><i className="fa fa-github" /></a>
      <a aria-label="Mute volume" href="https://www.linkedin.com/in/witah-georjane"><i className="fa fa-linkedin" /></a>
    </div>
  </div>
);

export default Footer;
