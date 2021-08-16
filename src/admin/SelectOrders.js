import React from 'react';
import "react-table/react-table.css"
import ReactTable from "react-table";
import { TextWrapper, SetStateInput } from '../parts/TinyParts'
import DataAccessService from '../services/DataAccessService';
import History from '../services/RouteHistoryProvider';

class SelectOrders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: this.getData()
    };
  }

  getData = () => {
    let selectedDate = DataAccessService.getSelectedDateForOrders();
    let orders = DataAccessService.getOrdersForDate(selectedDate) || {};
    return this.objToArr(orders);
  }

  objToArr = (obj) => {
    let arr = [];

    let arrKeys = Object.keys(obj);

    for (let index = 0; index < arrKeys.length; index++) {
      const key = arrKeys[index];
      const newObj = {
        date: key,
        ...obj[key]
      };
      arr[index] = newObj;
    }

    return arr;
  }

  submit = (order, index, allOrders) => {
    History.goTo("/review-order", {order, index, allOrders} )
  }

  prepareViewData = (allItems) => {
    let index = 0;
    let data = allItems.map(oneItem => {
      let hour = new Date(parseInt(oneItem.date + "000")).toLocaleString();
      hour = hour.split(", ")?.[1];
      let ind = index++;
      let obj = {
        name: <TextWrapper title={oneItem.name} />,
        phone: <TextWrapper title={oneItem.phone} />,
        address: <TextWrapper title={oneItem.address} />,
        count: <TextWrapper title={oneItem.order?.length} />,
        buttons: <button className="btn btn-primary" onClick={() => this.submit(oneItem, ind, allItems)} >🔍</button>,
        hour: <TextWrapper title={hour} />,
      }
      return { ...obj };
    });
    return data
  }

  render() {
    let data = this.prepareViewData(this.state?.orders)

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
            width: 90,
          },
          {
            Header: "",
            accessor: "buttons",
            width: 60,
          }
        ]
      }
    ]

    return (
      <div>
        <br />
        <ReactTable className="-striped -highlight"
          data={data}
          columns={present}
          sortable={false}
          defaultPageSize={data.length}
          pageSize={data.length}
        />
      </div>
    )
  }
}

export default SelectOrders;