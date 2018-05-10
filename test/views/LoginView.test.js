import React from 'react';
import LoginView from '../../src/views/LoginView.jsx'
import renderer from 'react-test-renderer'; //this package makes it easy to grab a snapshot of the "DOM tree" rendered by a React DOM 
//import logo from '../../src/images/logo';

test('LoginView test', () => {
  const loginForm ="[\
      { key: 'username', label: 'User Name (email address)', type: 'email', fieldValidations: { required: true,emailFormat: true },options: {autoComplete: 'email',placeholder: 'Email address...',icon: 'fa fa fa-envelope-o'}  },\
      { key: 'password', label: 'Password', type: 'password', fieldValidations: {required: true,minLength: 6},options: {autoComplete: 'current-password',placeholder: 'Password..',icon: 'fa fa fa-lock'}  }\
  ]";
  const component = renderer.create(
    <LoginView modelForm={loginForm} groups={1} columns="col-md-12" />,
  );
  
  let tree = component.toJSON();
  console.log("tree:",tree)
  expect(tree).toMatchSnapshot();
});