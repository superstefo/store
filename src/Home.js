import React, { Component } from 'react';
import { NavLinkButton } from "./parts/TinyParts";
import DataAccessService from './services/DataAccessService';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    DataAccessService.setPristine(false);
  }

  render() {
    return (
        <div className="text-center">
          <p />
          <br />
          <h2>Добре дошли!</h2>
          <p />
          <br />
          <h5>За поръчка на ядки, моля, разгледайте каталога!</h5>
          <p />
          <div onClick={this.onClick}>
            <NavLinkButton to="/items" label="Каталог" />
          </div>
        </div>
    )
  }
}

export default Home;
