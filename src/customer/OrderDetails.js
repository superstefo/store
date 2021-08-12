
import React from 'react';
import "react-table/react-table.css"
import Const from '../services/Constants';
import AjaxService from '../services/AjaxService';
import DataAccessService from '../services/DataAccessService';
import { SetStateInput } from '../parts/TinyParts';
import History from '../services/RouteHistoryProvider';

class OrderDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = () => {
    let allItems = DataAccessService.getCurrentOrder();
    let arr = [];

    Object.keys(allItems)
      .forEach((key) => {
        arr.push(allItems[key])
      });

    arr = arr
      .filter(one => { return one.quantity !== 0 })
      .map(one => {
        return {
          quantity: one.quantity,
          price: one.orderedItem.price,
          id: one.orderedItem.id
        }
      });

    let data = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      phone: this.state.phone,
      more: this.state.more,
      order: arr
    }

    let promise = AjaxService.doPost(Const.URLS.ORDER, data, true);
    promise.then((data) => {
      History.goTo("/order-result", { "result": "Поръчката беше успешна. поръчка номер.. " + data.data })
    }).catch((e) => {
      console.error(e);
    })
  }

  render() {
    return (
      <div className="text-left text-wrap">
        <br />
        <div className="text-left text-wrap">
          <SetStateInput stateFieldName="name" statefulObject={this} label="Имe" />
          <SetStateInput stateFieldName="email" statefulObject={this} label="e-mail" type="email" />
          <SetStateInput stateFieldName="phone" statefulObject={this} label="Телефон" type="tel" />
          <SetStateInput stateFieldName="address" statefulObject={this} label="Aдрес за доставка" />
          <SetStateInput stateFieldName="more" statefulObject={this} label="Още насоки" />
          <br />
          <div className="text-center">
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Поръчай!</button>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderDetails;