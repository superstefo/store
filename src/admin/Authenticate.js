import React from 'react';
import "react-table/react-table.css"
import Const from '../services/Constants';
import AjaxService from '../services/AjaxService';
import { SetStateInput } from '../parts/TinyParts';
import History from '../services/RouteHistoryProvider';
import DataAccessService from '../services/DataAccessService';

class Authenticate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = () => {
    const encodedString = Buffer.from(this.state.name + ":" + this.state.pass).toString('base64');
    let promise = AjaxService.doPost(Const.URLS.AUTH, encodedString, false);
    promise.then((data) => {
      AjaxService.setSecret(data?.data);
      DataAccessService.setIsAdmin(true);
      History.goTo("/get-orders");
    }).catch((e) => {
      History.goTo("/error", e)
      AjaxService.setSecret(null);
    })
  }

  render() {
    return (
      <div className="text-center text-wrap">
        <br />
        <p />
        <br />
        <p />
        <label>За администратор:</label>
        <br />
        <div className=" btn-group ">
          <SetStateInput stateFieldName="name" statefulObject={this} label="Username" />
        </div>
        <br />
        <div className=" btn-group ">
          <SetStateInput stateFieldName="pass" statefulObject={this} label="Password" type="password" />
        </div>
        <br />
        <p />
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Вход</button>
      </div>
    )
  }
}

export default Authenticate;
