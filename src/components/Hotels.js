import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Hotels = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong>
          {' '}
          Hotels
        </h3>
      </header>
      <p>
        <strong>Id:</strong>
        {' '}
        {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong>
        {' '}
        {currentUser.email}
      </p>
    </div>
  );
};

export default Hotels;
