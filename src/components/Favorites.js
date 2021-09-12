import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

function Favorites(props) {
  const { location } = props;
  const { userInfo } = location;
  if (userInfo === undefined) {
    return <Redirect to="/login" />;
  }
  const { id, username, hotels } = userInfo;
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/favorites', { withCredentials: true })
      .then((res) => {
        const myfavorites = [];
        res.data.forEach((fav) => {
          hotels.forEach((hotel) => {
            if (fav.user_id === id && fav.hotel_id === hotel.id) {
              myfavorites.push(hotel);
            }
          });
        });
        setFavorites(myfavorites);
      })
      .catch((err) => {
        console.log('favourites ', err);
      });
  }, []);

  return (
    <div className="favorites">
      <h1>
        {username}
        &apos;`s Favorites
      </h1>
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
      {favorites.map((favorite) => (
        <div key={favorite.id}>
          <h2>{favorite.title}</h2>
          <p>{favorite.description}</p>
          <img src={favorite.image_url} alt={favorite.title} />
        </div>
      ))}
    </div>
  );
}
Favorites.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default Favorites;
