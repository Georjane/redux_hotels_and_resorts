import axios from 'axios';
import { useEffect, useState } from 'react';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/favorites', { withCredentials: true })
      .then((res) => {
        console.log('favourites ', res);
        console.log(setFavorites);
      })
      .catch((err) => {
        console.log('favourites ', err);
      });
  }, []);

  return (
    <div className="favorites">
      <h1>Favorites</h1>
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

export default Favorites;
