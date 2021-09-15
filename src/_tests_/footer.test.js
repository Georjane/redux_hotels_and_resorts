import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer';

it('renders the Footer properly', () => {
  const tree = renderer.create(<Footer />);
  expect(tree).toMatchSnapshot();
});
