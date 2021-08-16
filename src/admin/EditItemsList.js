import React from 'react';
import "react-table/react-table.css"
import ReactTable from "react-table";
import { TextWrapper } from '../parts/TinyParts'
import DataAccessService from '../services/DataAccessService';
import History from '../services/RouteHistoryProvider';

const Buttons = (args) => {
  let { submitF, item } = args
  return (
    <div className="text-center text-wrap">
      <div className=" btn-group ">
        <button className="btn btn-primary" onClick={() => submitF(item)} >🛠️</button>
      </div>
    </div>
  )
}

class EditItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOrder: DataAccessService.getCurrentOrder()
    };
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

  submit = (item) => {
    History.goTo("/edit-item", { "item": item })
  }

  goToFaqView = () => {
    History.goTo("/faq")
  }

  prepareViewData = (allItems) => {
    let data = allItems.map(oneItem => {
      let obj = {
        title: <TextWrapper title={oneItem.title} />,
        info: <TextWrapper title={oneItem.info} />,
        price: <TextWrapper title={oneItem.price + " лв"} />,
        buttons: <Buttons item={oneItem} submitF={this.submit} />,
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
            Header: "Инфо",
            accessor: "info"
          },
          {
            Header: "Цена, опаковка",
            accessor: "price",
            width: 140
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
        <div className="text-left">
        <div className=" btn-group ">
        <button className="btn btn-primary mr-1" title="Обратно" onClick={this.goToFaqView} >◀️</button>
        <button className="btn btn-primary" title="Добави нов артикул" onClick={() => this.submit()} >➕</button>
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
       
      </div>
    )
  }
}

export default EditItemsList;