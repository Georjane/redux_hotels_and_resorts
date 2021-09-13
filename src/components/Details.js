// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import Logout from './Logout';

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
    <div className="dpage">
      <Logout />

      <div className="detai">

        <div className="card mb-3 stylecard">
          <div className="row no-gutters">
            <div className="col-md-6">
              <img src={hotel.image_url} className="card-img" alt={hotel.title} />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title"><h2>{hotel.title}</h2></h5>
                <p className="card-text">{hotel.description}</p>
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
