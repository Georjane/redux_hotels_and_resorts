import axios from 'axios';
import { useEffect, useState } from 'react';

function Hotels() {
  const [images, setImages] = useState([]);
  // const images = [];
  axios.get('http://localhost:3001/favorites', { withCredentials: true })
    .then((res) => {
      console.log('favourites ', res);
    })
    .catch((err) => {
      console.log('favourites ', err);
    });

  useEffect(() => {
    axios.get('http://localhost:3001/hotels', { withCredentials: true })
      .then((res) => {
        console.log('hotels ', res);
        console.log('hotels ', res.data);
        const jane = [];
        res.data.forEach((element) => {
          jane.push(element.image_url);
          console.log(element.image_url);
        });
        setImages(jane);
      })
      .catch((err) => {
        console.log('hotels ', err);
      });
  }, []);

  return (
    <div className="Hotels">
      <ol>
        {images.map((img) => (
          <li key={img}><img src={img} alt="Logo" key={img} /></li>
        ))}
      </ol>
      <h1>Hotels</h1>
      {/* <img src="https://i.postimg.cc/DzKyqkK8/Img-Placeholder-3.png" alt="jane" /> */}
    </div>
  );
}

export default Hotels;
