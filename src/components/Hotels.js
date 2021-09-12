import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Favorites from './Favorites';
import PropTypes from 'prop-types';

function Hotels(props) {
  const { user } = props;
  const { id, username } = user[0];
  const [hotels, setHotels] = useState([]);

  const handleAddFavorite = (e) => {
    e.preventDefault();
    console.log('add fav', e.target.name, id);
  };

  useEffect(() => {
    axios.get('http://localhost:3001/hotels', { withCredentials: true })
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => {
        console.log('hotels ', err);
      });
  }, []);

  return (
    <div className="Hotels">
      <Link
        to={{
          pathname: '/favorites',
          userInfo: {
            id,
            username,
          },
        }}
      >
        <button className="meal" type="button">
          My Favorites
        </button>
      </Link>

      <h1>Hotels</h1>
      {hotels.map((hotel) => (
        <div key={hotel.id}>
          <h2>{hotel.title}</h2>
          <p>{hotel.description}</p>
          <img src={hotel.image_url} alt={hotel.title} />
          <button type="button" onClick={handleAddFavorite} name={hotel.id}>Add Fav</button>
          <Link
            to={{
              pathname: '/details',
              hotel: {
                id: hotel.id,
                title: hotel.title,
                description: hotel.description,
                image_url: hotel.image_url,
              },
            }}
          >
            <button className="meal" type="button">
              Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
Hotels.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Hotels;
