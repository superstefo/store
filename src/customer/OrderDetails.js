
import React from 'react';
import "react-table/react-table.css"
import Const from '../services/Constants';
import AjaxService from '../services/AjaxService';
import DataAccessService from '../services/DataAccessService';
import { SetStateInput, NavLinkButton } from '../parts/TinyParts';
import History from '../services/RouteHistoryProvider';

class OrderDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false
    };
  }

  handleSubmit = () => {
    let st = this.state;
    if (!st.name || !st.email || !st.address || !st.phone) {
      window.alert("Задължителни полета: Име, email, адрес, телефон!");
      return;
    }

    let confirm = window.confirm("Моля, потвърдете поръчката!");
    if (!confirm) {
      return;
    }
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
        };
      });

    let data = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      phone: this.state.phone,
      more: this.state.more,
      order: arr
    };

    this.setState({ isDisabled: true });
    let promise = AjaxService.doPost(Const.URLS.ORDER, data, true);
    promise.then((data) => {
      History.goTo("/order-result", { "result": "Поръчка номер: " + data.data + " беше приета." });
    }).catch((e) => {
      this.setState({ isDisabled: false });
      History.goTo("/error", e);
    });
  };

  render() {
    return (
      <div className="text-left text-wrap">
        <label>Детайли за доставката:</label>
        <br />
        <p />
        <br />
        <div className="text-left text-wrap">
          <SetStateInput stateFieldName="name" statefulObject={this} label="Имe" />
          <div className="row">
            <div className="col">
              <SetStateInput stateFieldName="phone" statefulObject={this} label="Телефон" type="tel" />
            </div>
            <div className="col">
              <SetStateInput stateFieldName="email" statefulObject={this} label="e-mail" type="email" />
            </div>
          </div>
          <SetStateInput stateFieldName="address" statefulObject={this} label="Aдрес за доставка" />
          <SetStateInput stateFieldName="more" statefulObject={this} label="Още насоки" />
          <br />
          <div className="text-center">
            <div className=" btn-group ">
              <NavLinkButton to="/basket" label="Обратно" />
              <div>
                <button type="submit" className="btn btn-primary ml-1" disabled={this.state.isDisabled} onClick={this.handleSubmit}>Поръчай!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderDetails;