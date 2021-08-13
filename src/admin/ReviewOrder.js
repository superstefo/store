import React from 'react';
import "react-table/react-table.css"
import ReactTable from "react-table";
import { TextWrapper, SetStateInput } from '../parts/TinyParts'
import DataAccessService from '../services/DataAccessService';
import History from '../services/RouteHistoryProvider';

class ReviewOrder extends React.Component {
  constructor(props) {
    super(props);
    console.log(props?.location?.state);
    this.allOrders = props?.location?.state?.allOrders || [];
    let order = props?.location?.state?.order || {};
    this.index = props?.location?.state?.index || 0;
    this.state = this.makeStateObject(order);
  }

  makeStateObject = (order) => {
    return {
      address: order.address || " ",
      email: order.email || " ",
      more: order.more || " ",
      hour: new Date(parseInt(order.date + "000")).toLocaleString() || " ",
      name: order.name || " ",
      phone: order.phone || " "
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

  render() {
    let data = []

    let present = [
      {
        columns: [
          {
            Header: "Клиент",
            accessor: "name"
          },
          {
            Header: "Адрес",
            accessor: "address"
          },
          {
            Header: "Телефон",
            accessor: "phone",
            width: 140
          },
          {
            Header: "Пакети",
            accessor: "count",
            width: 65
          },
          {
            Header: "Час",
            accessor: "hour",
            width: 70,
          },
          {
            Header: " ",
            accessor: "buttons",
            width: 69,
          }
        ]
      }
    ]

    return (
      <div>
        <div className="text-center">
          <div className=" btn-group ">
            <div className="mdr-r1">
              <button className="btn btn-primary" onClick={() => this.prev()} >◀️</button>
            </div>
            <button className="btn btn-primary" onClick={() => this.next()} >▶️</button>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <SetStateInput stateFieldName="name" statefulObject={this} label="Име" disabled={true} />
            </div>
            <div className="col">
              <SetStateInput stateFieldName="phone" statefulObject={this} label="Тел." disabled={true} />
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
      </div>
    )
  }
}

export default ReviewOrder;