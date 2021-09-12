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
