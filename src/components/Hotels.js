import axios from 'axios';
import { useEffect, useState } from 'react';

function Hotels() {
  const [hotels, setHotels] = useState([]);
  // const hotels = [];
  // axios.get('http://localhost:3001/favorites', { withCredentials: true })
  //   .then((res) => {
  //     console.log('favourites ', res);
  //   })
  //   .catch((err) => {
  //     console.log('favourites ', err);
  //   });

  useEffect(() => {
    axios.get('http://localhost:3001/hotels', { withCredentials: true })
      .then((res) => {
        console.log('hotels ', res);
        console.log('hotels ', res.data);
        // const jane = [];
        // res.data.forEach((element) => {
        //   jane.push(element.image_url);
        //   console.log(element.image_url);
        // });
        setHotels(res.data);
      })
      .catch((err) => {
        console.log('hotels ', err);
      });
  }, []);

  return (
    <div className="Hotels">
      <h1>Hotels</h1>
      {hotels.map((hotel) => (
        <div key={hotel.id}>
          <h2>{hotel.title}</h2>
          <p>{hotel.description}</p>
          <img src={hotel.image_url} alt={hotel.title} />
        </div>
      ))}
    </div>
  );
}

export default Hotels;
