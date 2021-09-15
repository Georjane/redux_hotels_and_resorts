import React from 'react';
import renderer from 'react-test-renderer';
import Hero from '../components/Hero';

it('renders the Hero properly', () => {
  const tree = renderer.create(<Hero />);
  expect(tree).toMatchSnapshot();
});
