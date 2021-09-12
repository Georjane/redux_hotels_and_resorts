import styled from 'styled-components';

const Hero = () => {
  const Button1 = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid white;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide landingpage" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" />
          <li data-target="#carouselExampleCaptions" data-slide-to="1" />
          <li data-target="#carouselExampleCaptions" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/img7.jpg" className="d-block w-100" alt="carosel" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Leisure and Family Vacations</h2>
              <p>at Address Hotels + Resorts</p>
              <Button1>Learn More</Button1>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/img3.jpg" className="d-block w-100" alt="carosel" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Fun-Filled Stays</h2>
              <p>at Address Hotels + Resorts</p>
              <Button1>Learn More</Button1>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/img5.jpg" className="d-block w-100" alt="carosel" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Experience Expo 2021 Free!</h2>
              <p>Get 2 complimentary tickets to the world’s greatest show when you book with us.</p>
              <Button1>Learn More</Button1>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev gradientover" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next gradientover" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
export default Hero;
