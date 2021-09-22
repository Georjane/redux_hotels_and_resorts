import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Hotels(props) {
  const { handleAddFavs } = props;
  const id = sessionStorage.getItem('user_id');
  // const { id, username } = user[0];
  const [hotels, setHotels] = useState([]);
  const Button = styled.button`
  background-color: #E7522B; 
  padding: 12px 0; 
  width: 150px;
  border: none;
  font-size: larger;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  z-index: 5;
`;
  const handleAddFavorite = (e) => {
    e.preventDefault();
    const fav = {
      user_id: id,
      hotel_id: e.target.name,
    };
    handleAddFavs(fav);
    e.target.nextSibling.classList.add('hrtbtn-clicked');
  };

  useEffect(() => {
    axios.get('https://redux-authentication-api.herokuapp.com/hotels', { withCredentials: true })
      .then((res) => {
        setHotels(res.data);
      });
  }, []);

  return (
    <div className="Hotels">
      <div className="favdiv container">
        <h1>View Our Offers</h1>
        <Link
          to={{
            pathname: '/favorites',
            userInfo: {
              id,
              hotels,
            },
          }}
        >
          <button className="favbtn" type="button">
            Your Favorites
          </button>
        </Link>
      </div>
      {hotels.map((hotel) => (
        <div key={hotel.id} className="card mb-3 stylecard">
          <div className="row no-gutters">
            <div className="col-md-6">
              <img src={hotel.image_url} className="card-img" alt={hotel.title} />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title"><h2>{hotel.title}</h2></h5>
                <p className="card-text">{hotel.description}</p>
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
                <p className="card-text">
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
                    <Button>
                      View Details
                    </Button>
                  </Link>
                </p>
                <p className="card-text">
                  <span className="hrtdiv">
                    <button type="button" className="hrtbtn" onClick={handleAddFavorite} name={hotel.id}>Add to Favorites</button>
                    <i className="fa fa-heart heart" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
Hotels.propTypes = {
  // user: PropTypes.objectOf(PropTypes.any).isRequired,
  // id: PropTypes.objectOf(PropTypes.any).isRequired,
  handleAddFavs: PropTypes.func.isRequired,
};

export default Hotels;
