import React from 'react';
import BlankView from '../../src/views/BlankView.jsx'
import renderer from 'react-test-renderer';

test('BlankView test', () => {
  const component = renderer.create(
    <BlankView modelForm="test"/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseEnter();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseLeave();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
});