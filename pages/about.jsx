import React, { Component } from 'react';

// WHEN TO USE :
// 1.WHEN IT IS A SMALLER COMPONENT
// 2.REUSABLE COMPONENT
// 3. PRESENTIONAL COMPONENTS, PATIALY RIGHT, we can use HOOKS and specify state
// const About = () => {
//  const message = 'Hello World';
//  return <h1>Hello About Page - {message}</h1>;
// };

// WHEN TO USE:
// 1.WHEN IT LARGE COMPONENT
// 2.When it lot of state or lot of data
// 3.Much of controllers or functionallity
export default class About extends Component {
 render() {
  return <h1>Hello, im class component</h1>;
 }
}

// export default About;
