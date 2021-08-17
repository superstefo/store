import React from 'react';
import "react-table/react-table.css"
import ReactTable from "react-table";
import { TextWrapper, OrderWrapper } from '../parts/TinyParts'
import DataAccessService from '../services/DataAccessService';
import History from '../services/RouteHistoryProvider';

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOrder: DataAccessService.getCurrentOrder()
    };
  };

  submit = () => {
    History.goTo("/basket");
  };

  onChangeFunc = (e, orderedItem, currentOrder) => {
    let q = parseInt(e.target.value)

    if (isNaN(q)) {
      q = 0;
    }

    let newOrder = {
      quantity: q,
      orderedItem: orderedItem
    };
    currentOrder[orderedItem.id] = newOrder;
    this.setState({ currentOrder: currentOrder });
  };

  orderWrapperProps = (item) => {
    return {
      orderedItem: item,
      wholeOrder: this.state.currentOrder,
      onChangeFunc: this.onChangeFunc,
      initialValue: this.state.currentOrder[item?.id]?.quantity || ""
    };
  };

  prepareViewData = (allItems) => {
    let data = allItems.map(oneItem => {
      let obj = {
        title: <TextWrapper title={oneItem.title} />,
        info: <TextWrapper title={oneItem.info} />,
        price: <TextWrapper title={oneItem.price + " лв."} />,
        order: <OrderWrapper {...this.orderWrapperProps(oneItem)} />
      };
      return { ...obj };
    });
    return data;
  }

  render() {
    let allItems = DataAccessService.getPriceList();

    let data = this.prepareViewData(allItems);

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
            accessor: "order",
            maxWidth: 75
          }
        ]
      }
    ];

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
        <div className="text-center">
          <button className="btn btn-primary" onClick={this.submit} >Напред</button>
        </div>
      </div>
    )
  }
}

export default ItemsList;