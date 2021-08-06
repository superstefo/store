import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLinkButton } from "./parts/TinyParts";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <h1>Welcome</h1>
        <p/>
        <Link to="/items">  items</Link>
        <NavLinkButton to="/items" label="Каталог" />
      </div >
    )
  }
}

export default Home;
