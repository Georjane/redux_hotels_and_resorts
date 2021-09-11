import React, { useState, useEffect } from 'react';

import UserService from '../services/user.service';

const Home = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    UserService.getHotels().then(
      (response) => {
        console.log('this is the error', response.data.json);
        console.log('this is the error', response);
        setContent(JSON.stringify(response.data));
      },
      (error) => {
        const content = (error.response && error.response.data)
          || error.message
          || error.toString();

        setContent(content);
      },
    );
  }, []);
  //  const jane = JSON.parse(content)
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
        {/* {content.map((book) => (
          <h2 key={book.id}>{book.title}</h2>
        ))} */}
      </header>
    </div>
  );
};

export default Home;
