import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

it('renders the navbar properly', () => {
  const tree = renderer.create(<Navbar />);
  expect(tree).toMatchSnapshot();
});
