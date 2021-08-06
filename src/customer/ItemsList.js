import React from 'react';
import "react-table/react-table.css"
import ReactTable from "react-table";
import { withRouter } from 'react-router-dom'
import { TextWrapper, OrderWrapper } from '../parts/TinyParts'
import DataAccessService from '../services/DataAccessService';
import History from '../services/RouteHistoryProvider';
 

class ItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOrder: DataAccessService.getCurrentOrder()
    };
  }

  goBasket = () => {
    History.goTo("/basket")
  }

  submit = () => {
    this.goBasket()
  }

  onChangeFunc = (e, orderedItem, currentOrder) => {
    let q = parseInt(e.target.value)
    let newOrder = {
      quantity: q,
      orderedItem: orderedItem
    }
    currentOrder[orderedItem.id] = newOrder
    this.setState({ currentOrder: currentOrder })
  }

  orderWrapperProps = (item) => {
    return {
      orderedItem: item,
      wholeOrder: this.state.currentOrder,
      onChangeFunc: this.onChangeFunc,
      initialValue: this.state.currentOrder[item.id]?.quantity || ""
    }
  }

  prepareViewData = (allItems) => {
    let data = allItems.map(oneItem => {
      let obj = {
        title: <TextWrapper title={oneItem.title} />,
        unit: <TextWrapper title={oneItem.unit} />,
        price: <TextWrapper title={oneItem.price + " лв/" + oneItem.unit} />,
        order: <OrderWrapper {...this.orderWrapperProps(oneItem)} />
      }
      return { ...obj };
    });
    return data
  }

  render() {
    let allItems = DataAccessService.getPriceList();

    let data = this.prepareViewData(allItems)

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
            accessor: "order",
            width: 220,
          }   ,   {
            Header: "Мярка",
            accessor: "unit",
            width: 100
          }
        ]
      }
    ]

    return (
      <div>
        <div>
          <ReactTable className="-striped -highlight"
            data={data}
            columns={present}
            sortable={false}
            defaultPageSize={data.length}
            pageSize={data.length}
            showPagination={false}

          />
          <br />
        </div>
        <button className="btn btn-primary" onClick={this.submit} >Напред</button>
      </div>
    )
  }
}

export default withRouter(ItemsList);