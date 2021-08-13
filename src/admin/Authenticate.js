import React from 'react';
import "react-table/react-table.css"
import Const from '../services/Constants';
import AjaxService from '../services/AjaxService';
import { SetStateInput } from '../parts/TinyParts';
import History from '../services/RouteHistoryProvider';

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
      History.goTo("/faq");
    }).catch((e) => {
      AjaxService.setSecret(null);
    })
  }

  render() {
    return (
      <div className="text-left text-wrap">
        <br />
        <div className="text-left text-wrap">
          <SetStateInput stateFieldName="name" statefulObject={this} label="Username" />
          <SetStateInput stateFieldName="pass" statefulObject={this} label="Password" type="password" />
          <br />
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Готово</button>
        </div>
      </div>
    )
  }
}

export default Authenticate;
