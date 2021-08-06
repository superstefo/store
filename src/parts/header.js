import React from "react";

import { NavLinkButton } from "../parts/TinyParts";
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <nav>
        <div className="text-center">
          <div className="btn-group">
          <NavLinkButton to="/home" label="Начало" />
          <NavLinkButton to="/items" label="Каталог" />
          <NavLinkButton to="/basket" label="Кошница" />
          <NavLinkButton to="/faq" label="Информация" />
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);