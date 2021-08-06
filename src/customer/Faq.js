import React from 'react';
import "react-table/react-table.css"
import ReactTable from "react-table";
import { TextWrapper, OrderWrapper } from '../parts/TinyParts'
import DataAccessService from '../services/DataAccessService';
import History from '../services/RouteHistoryProvider';
 

class Faq extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOrder: DataAccessService.getCurrentOrder()
    };
  }

  goBasket = () => {
    History.goTo("/auth")
  }

  submit = () => {
    this.goBasket()
  }

  getData = () => {
    return [{
      question: "какви са контактите Ви?",
      answer: "........"
    },
    {
      question: "Как става поръчката...",
      answer: "става..."
    },
    {
      question: "Има ли цена за доставка",
      answer: "за доставки над 100 лв транспортът е безплатен"
    }]
  }

  prepareViewData = (allItems) => {
    let data = allItems.map(one => {
      let obj = {
        question: <TextWrapper title={one.question} />,
        answer: <TextWrapper title={one.answer} />
      }
      return { ...obj };
    });
    return data
  }

  render() {
    let allItems = this.getData();

    let data = this.prepareViewData(allItems)

    let present = [
      {
        columns: [
          {
            Header: "Въпроси",
            accessor: "question",
            width: 250
          },
          {
            Header: "Отговори",
            accessor: "answer"
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
        <button className="btn btn-primary" onClick={this.submit} >A</button>
      </div>
    )
  }
}

export default Faq;