import React, { Component } from 'react';
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
        <NavLinkButton to="/items" label="Каталог" />
      </div >
    )
  }
}

export default Home;
