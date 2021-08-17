import React from 'react';
import "react-table/react-table.css"
import ReactTable from "react-table";
import { TextWrapper } from '../parts/TinyParts';
import DataAccessService from '../services/DataAccessService';
import { NavLinkButton } from '../parts/TinyParts';
import { intToFl, flToInt } from '../services/MathUtils';
import History from '../services/RouteHistoryProvider';

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOrder: DataAccessService.getCurrentOrder()
    };
  };

  clear = () => {
    DataAccessService.clearCurrentOrder();
    this.setState({ currentOrder: DataAccessService.getCurrentOrder() })
  };

  makeOrder = () => {
    let order = DataAccessService.getCurrentOrder();
    if (Object.keys(order).length < 1) {
      window.alert("Количката е празна!");
      return;
    }
    History.goTo("/order-details");
  };

  render() {

    let allItems = DataAccessService.getCurrentOrder();
    let arr = [];

    //object to array:
    Object.keys(allItems)
      .forEach((key) => {
        arr.push(allItems[key])
      });

    arr = arr
      .filter(one => { return one.quantity !== 0 })
      .map(one => {
        return { ...one.orderedItem, quantity: one.quantity }
      });

    arr = prepareCalculationPricelist(arr);

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
            maxWidth: 100,
          }
        ]
      }
    ];

    return (
      <div>
        <div>
          <ReactTable className="-striped -highlight"
            data={arr}
            columns={present}
            sortable={false}
            defaultPageSize={arr.length}
            pageSize={arr.length}
            showPagination={false}
          />
          <br />
        </div>
        <div className="text-center">
          <div className=" btn-group ">
            <NavLinkButton to="/items" label="Назад" />
            <div className="ml-1">
              <button className="btn btn-danger" onClick={this.clear}>Изтрий</button>
            </div>
            <div className="ml-1">
              <button className="btn btn-primary" onClick={this.makeOrder}>Напред</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Basket;

export const prepareCalculationPricelist = (arr) => {
  let totalPrice = 0;
  arr = arr
    .map(one => {
      let quantity = one.quantity;
      let currentSum = quantity * flToInt(one.price, 2);
      totalPrice = totalPrice + currentSum;

      let obj = {
        title: <TextWrapper title={one.title} />,
        quantity: <TextWrapper title={quantity} />,
        info: <TextWrapper title={one.info} />,
        price: <TextWrapper title={one.price + " лв"} />,
        total: <TextWrapper title={intToFl(currentSum, 2) + " лв"} />,
      }
      return { ...obj };
    });

  arr.push({
    title: <TextWrapper title={"Общо за поръчка"} />,
    quantity: <TextWrapper title={""} />,
    price: <TextWrapper title={""} />,
    total: <TextWrapper title={intToFl(totalPrice, 2) + " лв"} />
  });

  return arr;
};

