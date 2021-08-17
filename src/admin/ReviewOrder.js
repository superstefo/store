import React from 'react';
import "react-table/react-table.css"
import ReactTable from "react-table";
import { SetStateInput } from '../parts/TinyParts'
import DataAccessService from '../services/DataAccessService';
import { prepareCalculationPricelist } from '../customer/Basket';
import History from '../services/RouteHistoryProvider';

class ReviewOrder extends React.Component {
  constructor(props) {
    super(props);
    this.allOrders = props?.location?.state?.allOrders || [];
    let order = props?.location?.state?.order || {};
    this.index = props?.location?.state?.index || 0;
    this.state = this.makeStateObject(order);
  }

  makeStateObject = (order) => {
    let priceMap = DataAccessService.getPriceListObj();
    let ordersArr = order?.order || [];

    for (let index = 0; index < ordersArr.length; index++) {
      let orderItem = ordersArr[index]; // one item from the order
      let priceListItem = priceMap[orderItem.id] || {};
      orderItem.title = priceListItem.title
      let warning = "";
      if (priceListItem.price !== orderItem.price) {
        warning = "⚠️ Различни цени: ценова листа: " + priceListItem.price + "; поръчка: " + orderItem.price + "; ";
      }
      orderItem.info = warning + priceListItem.info;
    }

    return {
      address: order.address || " ",
      email: order.email || " ",
      more: order.more || " ",
      hour: new Date(parseInt(order.date + "000")).toLocaleString() || " ",
      name: order.name || " ",
      phone: order.phone || " ",
      orderedItems: ordersArr || []
    }
  }

  setTheState = (index) => {
    if (index === undefined) {
      return;
    }

    let order = this.allOrders[index] || {};
    let newState = this.makeStateObject(order);
    this.setState(newState)
  }

  prev = () => {
    if (this.index < 1) {
      return;
    }
    this.index--;
    this.setTheState(this.index);
  }

  next = () => {
    if (this.index >= this.allOrders.length - 1) {
      return;
    }
    this.index++;
    this.setTheState(this.index);
  }

  goToView = () => {
    History.goTo("/select-orders")
  }

  render() {
    let data = this.state.orderedItems;

    data = prepareCalculationPricelist(data);

    let present = [
      {
        columns: [
          {
            Header: "Артикул",
            accessor: "title"
          },
          {
            Header: "Инфо",
            accessor: "info",
            maxWidth: 250
          },
          {
            Header: "Цена, опаковка",
            accessor: "price",
            maxWidth: 140
          },
          {
            Header: "К-во",
            accessor: "quantity",
            maxWidth: 75
          },
          {
            Header: "Общо",
            accessor: "total",
            maxWidth: 100
          }
        ]
      }
    ];

    return (
      <div>
        <div className="text-center">
          <div className=" btn-group ">
            <div className="text-left">
              <button className="btn btn-primary mr-4" onClick={this.goToView} >Обратно</button>
            </div>
            <div className="mr-1">
              <button className="btn btn-primary" onClick={() => this.prev()} >◀️</button>
            </div>
            <div >
              <button className="btn btn-primary" onClick={() => this.next()} >▶️</button>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <SetStateInput stateFieldName="name" statefulObject={this} label="Име" disabled={true} />
            </div>
            <div className="col">
              <SetStateInput stateFieldName="phone" statefulObject={this} label="Телефон" disabled={true} />
            </div>
            <div className="col">
              <SetStateInput stateFieldName="email" statefulObject={this} label="e-mail" disabled={true} />
            </div>
            <div className="col">
              <SetStateInput stateFieldName="hour" statefulObject={this} label="Час на поръчка" disabled={true} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <SetStateInput stateFieldName="address" statefulObject={this} label="Адрес" disabled={true} />
            </div>
            <div className="col">
              <SetStateInput stateFieldName="more" statefulObject={this} label="Допълнителна информация" disabled={true} />
            </div>
          </div>
        </div>
        <br />
        <ReactTable className="-striped -highlight"
          data={data}
          columns={present}
          sortable={false}
          defaultPageSize={data.length}
          pageSize={data.length}
          showPagination={false}
        />
        <br />
        <div className="text-center">
          <div className="btn-group">
            <button className="btn btn-primary mr-1" title="Обратно" onClick={this.goToView} >Обратно</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewOrder;