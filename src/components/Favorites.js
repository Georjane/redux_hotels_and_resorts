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
  const { id, username } = userInfo;
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/favorites', { withCredentials: true })
      .then((res) => {
        const myfavorites = [];
        res.data.forEach((element) => {
          if (element.user_id === id) {
            myfavorites.push(element);
          }
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
