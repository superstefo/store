import React from 'react';
import "react-table/react-table.css"
import ReactTable from "react-table";
import { withRouter } from 'react-router-dom'
import { TextWrapper } from '../parts/TinyParts'
import DataAccessService from '../services/DataAccessService';
import { NavLinkButton } from '../parts/TinyParts';
import { intToFl, flToInt } from '../services/MathUtils'

class Basket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beanId: props.beanId,
      allFr: [],
      currentOrder: DataAccessService.getCurrentOrder()
    };
  }

  text = (text) => {
    return (<TextWrapper title={text} />)
  }

  render() {

    let allItems = DataAccessService.getCurrentOrder();
    let arr = [];

    //object to array:
    Object.keys(allItems)
      .map((key) => {
        arr.push(allItems[key])
      });

    let totalPrice = 0;

    arr = arr
      .filter(one => { return one.quantity != 0 })
      .map(one => {
        let quantity = one.quantity;
        one = one.orderedItem;
        let currentSum = quantity * flToInt(one.price, 2);
        totalPrice = totalPrice + currentSum;

        let obj = {
          title: this.text(one.title),
          quantity: this.text(quantity + " " + one.unit),
          price: this.text(one.price + " лв/" + one.unit),
          order: this.text(intToFl(currentSum, 2) + " лв"),
        }
        return { ...obj };
      });

    arr.push({
      title: this.text("Общо за поръчка"),
      quantity: this.text(""),
      price: this.text(""),
      order: this.text(intToFl(totalPrice, 2) + " лв")
    })

    let present = [
      {
        columns: [
          {
            Header: "Артикул",
            accessor: "title"
          },
          {
            Header: "Цена",
            accessor: "price",
            width: 100
          },
          {
            Header: "К-во",
            accessor: "quantity",
            width: 100
          },
          {
            Header: "Общо",
            accessor: "order",
            width: 220,
          }
        ]
      }
    ]

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
            <NavLinkButton to="/order-details" label="Напред" />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Basket);
