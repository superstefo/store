
import React from 'react';
import "react-table/react-table.css"
import Const from '../services/Constants';
import AjaxService from '../services/AjaxService';
import DataAccessService from '../services/DataAccessService';
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

    let promise = AjaxService.doPost(Const.URLS.ORDER, data, {});

    promise.then((data) => {
      console.log(data);
      History.goTo("/order-result", { "result": "Поръчката беше успешна. поръчка номер.." })
    }).catch((e) => {

      console.error(e);
    })
  }

  set = (e, key) => {
    this.setState({ [key]: e.target.value })
  }

  render() {
    return (
      <div className="text-left text-wrap">
        <br />
        <div className="text-left text-wrap">
          <input className="form-control mb-3" onChange={e => this.set(e, "name")} placeholder="Имe..."></input>
          <input className="form-control mb-3" onChange={e => this.set(e, "email")} placeholder="email..."></input>
          <input className="form-control mb-3" onChange={e => this.set(e, "phone")} placeholder="телефон..."></input>
          <input className="form-control mb-3" onChange={e => this.set(e, "address")} placeholder="Aдрес на доставка..."></input>
          <input className="form-control mb-3" onChange={e => this.set(e, "more")} placeholder="допълнителна информация..."></input>
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