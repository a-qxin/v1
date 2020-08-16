import React from 'react';
import './App.css';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'brenda',
      headerLinks: [
        { title: 'Home', path: "/" },
        { about: 'About', path: "/about" },
        { title: 'Contact', path: "/contact" }
      ],
      home: {
        title: "welcome",
        subtitle: "✌️",
        text: "here are some of my projects!"
      },
      about: {
        title: "about"
      },
      contact: {
        title: "let's get in touch"
      }
    }
  }

  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

export default App;
