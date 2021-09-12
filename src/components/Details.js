// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

function Details(props) {
  const { location } = props;
  const { hotel } = location;
  if (hotel === undefined) {
    return <Redirect to="/login" />;
  }
  // const { title, description, image_url } = user[0];
  // const [hotels, setHotels] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3001/hotels', { withCredentials: true })
  //     .then((res) => {
  //       setHotels(res.data);
  //     })
  //     .catch((err) => {
  //       console.log('hotels ', err);
  //     });
  // }, []);

  return (
    <div className="Hotels">
      <h1>Each Hotel Details</h1>
      <div className="details">
        <img className="detailsimg" alt="lolo" src="images/img4.jpg" />
        <div className="detailsdiv">
          <h2>Dine Around at Address Hotels + Resorts</h2>
          <p>
            Get up to 2 complimentary
            tickets to the world’s greatest
            show when you book with us this September.
          </p>
          <span>01 October – 31 March 2022</span>
          <span>Multiple Location </span>
          <span>stay@addresshotels.com</span>
        </div>
      </div>
      <div key={hotel.id}>
        <h2>{hotel.title}</h2>
        <p>{hotel.description}</p>
        <img src={hotel.image_url} alt={hotel.title} />
      </div>
    </div>
  );
}
Details.propTypes = {
  hotel: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  // id: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Details;
