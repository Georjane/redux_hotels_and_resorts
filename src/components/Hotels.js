import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Hotels(props) {
  const { user, handleAddFavs } = props;
  const { id, username } = user[0];
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
    // const hrtbtn = document.querySelector('.heart');
    e.target.nextSibling.classList.add('hrtbtn-clicked');
    // hrtbtn.classList = 'hrtbtn-clicked';
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
      <div className="favdiv">
        <h1>View Our Offers</h1>
        <Link
          to={{
            pathname: '/favorites',
            userInfo: {
              id,
              username,
              hotels,
            },
          }}
        >
          <button className="favbtn" type="button">
            Your Favorites
          </button>
        </Link>
      </div>

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
          <Button>View Details</Button>
          <span>Add to Favorites</span>
          <i className="fa fa-heart heart" />
        </div>
      </div>
      {hotels.map((hotel) => (
        <div className="details" key={hotel.id}>
          <img src={hotel.image_url} className="detailsimg" alt={hotel.title} />
          <div className="detailsdiv">
            <h2>
              {hotel.title}
            </h2>
            <p>{hotel.description}</p>
            <span>01 October – 31 March 2022</span>
            <span>Multiple Location </span>
            <span>stay@addresshotels.com</span>

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

            <span className="hrtdiv">
              <button type="button" className="hrtbtn" onClick={handleAddFavorite} name={hotel.id}>Add to Favorites</button>
              <i className="fa fa-heart heart" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
Hotels.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.objectOf(PropTypes.any).isRequired,
  handleAddFavs: PropTypes.func.isRequired,
};

export default Hotels;
