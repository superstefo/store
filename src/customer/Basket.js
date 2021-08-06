import React from 'react';
import "react-table/react-table.css"
import ReactTable from "react-table";
import { withRouter } from 'react-router-dom'
import AjaxService from '../services/AjaxService';
import Const from '../services/Constants';
import { TextWrapper } from '../parts/TinyParts'
import DataAccessService from '../services/DataAccessService';
import History from '../services/RouteHistoryProvider';

class Basket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beanId: props.beanId,
      allFr: [],
      currentOrder: DataAccessService.getCurrentOrder()
    };
  }

  fff = () => {
    let promise = AjaxService.doGet(Const.URLS.ORDER, {})
    promise.then((data) => {

    }).catch((e) => {
      console.log(e);
    })
  }

  submit = () => {
  
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

    let totalPrice = 0.0;

    arr = arr
      .filter(one => { return one.quantity != 0 })
      .map(one => {
        let quantity = one.quantity
        one = one.orderedItem
        totalPrice = totalPrice + (quantity * one.price)

        let obj = {
          title: this.text(one.title),
          quantity: this.text(quantity + " " + one.unit),
          price: this.text(one.price + " лв/" + one.unit),
          order: this.text(quantity * one.price + " лв"),
        }
        return { ...obj };
      });

    arr.push({
      title: this.text("Общо за поръчка"),
      quantity: this.text(" "),
      price: this.text(""),
      order: this.text(totalPrice + " лв")
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

      </div>
    )
  }
}

export default withRouter(Basket);
