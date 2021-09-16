import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';
import Logout from './Logout';

function Favorites(props) {
  const { location } = props;
  const { userInfo } = location;
  if (userInfo === undefined) {
    return <Redirect to="/login" />;
  }
  const history = useHistory();
  const { id, hotels } = userInfo;
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    axios.get('https://redux-authentication-api.herokuapp.com/favorites', { withCredentials: true })
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
      });
  }, []);

  return (
    <div className="favorites">
      <Logout />
      <button className="carousel-control-prev-icon red" type="button" onClick={() => history.goBack()} aria-hidden="true" />
      {favorites.length === 0
        ? <h2>You have no favorite hotels yet</h2>
        : (
          <div>
            {favorites.map((favorite) => (
              <div key={favorite.id} className="card mb-3 stylecard">
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <img src={favorite.image_url} className="card-img" alt={favorite.title} />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title"><h2>{favorite.title}</h2></h5>
                      <p className="card-text">{favorite.description}</p>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                      <p className="card-text">
                        <span>01 October – 31 March 2022</span>
                      </p>
                      <p className="card-text">
                        <span>Multiple Location </span>
                      </p>
                      <p className="card-text">
                        <span>stay@addresshotels.com</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
    </div>
  );
}
Favorites.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default Favorites;
