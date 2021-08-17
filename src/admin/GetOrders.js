import React from 'react';
import "react-table/react-table.css"
import { withRouter } from 'react-router-dom'
import { SetStateInput } from '../parts/TinyParts'
import Const from '../services/Constants';
import DataAccessService from '../services/DataAccessService';
import AjaxService from '../services/AjaxService';
import History from '../services/RouteHistoryProvider';

///Gets orders from backend
class GetOrders extends React.Component {
  constructor(props) {
    super(props);
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1;
    this.state = {
      date: date,
      month: month
    };
  }

  getOrders = () => {
    let month = "" + this.state?.month;
    let day = "" + this.state?.date;

    if (!month || !day) {
      return;
    }

    month = month.startsWith("0") ? month.replace("0", "") : month;
    day = day.startsWith("0") ? day.replace("0", "") : day;
    day = month + "/" + day;

    let promise = AjaxService.doGet(Const.URLS.ORDERS + day);
    promise.then(data => {
      DataAccessService.setSelectedDateForOrders(day);
      DataAccessService.setOrdersForDate(day, data?.data);
      History.goTo("/select-orders")
    }).catch(e => {
      History.goTo("/error", e)
    })
  }

  render() {
    return (
      <div className="text-center">
        <label>Показване на поръчки. Изберете дата:</label>
        <br />
        <div className="btn-group">
          <div className="mr-3">
            <SetStateInput stateFieldName="date" statefulObject={this} min={1} max={31} type="number" label="Дата" />
          </div>
          <SetStateInput stateFieldName="month" statefulObject={this} min={1} max={12} type="number" label="Месец" />
        </div>
        <p />
        <br />
        <button className="btn btn-primary" onClick={() => this.getOrders()} >ОК</button>
      </div>
    )
  }
}

export default withRouter(GetOrders);