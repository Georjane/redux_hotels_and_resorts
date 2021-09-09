import axios from 'axios';

function Hotels() {
  axios.get('http://localhost:3001/favorites', { withCredentials: true })
    .then((res) => {
      console.log('favourites ', res);
    })
    .catch((err) => {
      console.log('favourites ', err);
    });

  return (
    <div className="Hotels">
      <h1>Hotels</h1>
    </div>
  );
}

export default Hotels;
