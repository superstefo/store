import React from "react";

import { NavLinkButton } from "./TinyParts";
import { withRouter } from 'react-router-dom';
import DataAccessService from "../services/DataAccessService";

class TopHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let isPristine = DataAccessService.isPristine();
    let isAdmin = DataAccessService.getIsAdmin();
    return (
      <nav>
        <div className="text-center">
          <div className="btn-group">
            {!isPristine ? (<NavLinkButton to="/items" label="Каталог" />) : null}
            {!isPristine ? (<NavLinkButton to="/basket" label="Кошница" />) : null}
            {!isPristine ? (<NavLinkButton to="/faq" label="Информация" />) : null}
            {isAdmin ? (<NavLinkButton to="/edit-items-list" label="Промяна" />) : null}
            {isAdmin ? (<NavLinkButton to="/get-orders" label="Поръчки" />) : null}
          </div>
        </div>
        <br />
      </nav>
    );
  }
}

export default withRouter(TopHeader);