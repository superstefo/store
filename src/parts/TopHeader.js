import React from "react";

import { NavLinkButton } from "./TinyParts";
import { withRouter } from 'react-router-dom';
import DataAccessService from "../services/DataAccessService";

class TopHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let isPristine = DataAccessService.isPristine();
    return (
      <nav>
        <div className="text-center">
          <div className="btn-group">
           { !isPristine ? (<NavLinkButton to="/items" label="Каталог" />) : null } 
           { !isPristine ? (<NavLinkButton to="/basket" label="Кошница" />) : null } 
           { !isPristine ? (<NavLinkButton to="/faq" label="Информация" />) : null } 
          </div>
        </div>
        <br/>
      </nav>
    );
  }
}

export default withRouter(TopHeader);