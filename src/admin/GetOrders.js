import React from 'react';
import "react-table/react-table.css"
import ReactTable from "react-table";
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
    this.state = { };
  }

  submit = () => {
    let month = this.state?.month || "";
    let day = this.state?.date || "";

     month = month.startsWith("0") ? month.replace("0", "") : month;
     day = day.startsWith("0") ? day.replace("0", "") : day;
     day = month + "/" + day;

    let data = {
      "1628779457": { "address": "Grad Sofiq, kvartal Mladost 3, blok 304 etaj 5, whod 4", "email": "superstefo124@mailgmam.com", "name": "stefan vasile stefanov", "more": " aaaaaaaa, bbbbbb bbbbb, ccccc ccccccc, dddddddddddd ddddddd, eeeeeeeeeee, eeeeeeffff ffffff ", "order": [{ "id": "boiko01", "price": 5.25, "quantity": 1 }, { "id": "peanuts01", "price": 1.05, "quantity": 1 }], "phone": "+359878489088" },
      "1628780224": { "address": "dfgdgd dfg df", "email": "iv@avc.vf", "more": " 001 12312 12312 123 1 2aaaaaaaa, bbbbbb bbbbb, ccccc ccccccc, dddddddddddd ddddddd, eeeeeeeeeee, eeeeeeffff ffffff ", "name": "ivan", "order": [{ "id": "захар01", "price": 0.1, "quantity": 2 }], "phone": "1851651" },
      "1628780736": { "order": [{ "id": "avokado01", "price": 4, "quantity": 1 }] },
      "1628781224": { "address": "dwerwer df", "email": "iwerwer@avc.vf", "more": " ttttttttttt ttt001 12312 12312 123 1 2aaatctdddd, eeeeeeeeeee, eeeeeeffff ffffff ", "name": "pin4o", "order": [{ "id": "захар01", "price": 0.1, "quantity": 2 }], "phone": "5454 5454 54 " },

    };
    DataAccessService.setSelectedDateForOrders(day);
    DataAccessService.setOrdersForDate(day, data);
    History.goTo("/select-orders")

    //  let promise = AjaxService.doGet(Const.URLS.ORDERS + day, {}, false);
    //   promise.then(data => {
    //     console.log( data?.data);
    //     console.log(JSON.stringify(data?.data) );
    //     DataAccessService.setSelectedDateForOrders(this.date);
    //     DataAccessService.setOrdersForDate(this.date, data?.data);
    //     History.goTo("/select-orders")
    //   }).catch(e => {
    //   })
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
        <button className="btn btn-primary" onClick={() => this.submit()} >ОК</button>
      </div>
    )
  }
}

export default withRouter(GetOrders);