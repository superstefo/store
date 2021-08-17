import React from 'react';
import "react-table/react-table.css"
import ReactTable from "react-table";
import { TextWrapper } from '../parts/TinyParts'
import History from '../services/RouteHistoryProvider';
import Const from '../services/Constants';

class Faq extends React.Component {

  submit = () => {
    History.goTo("/auth");
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
      answer: "за доставки над ... лв транспортът е безплатен"
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
        <button className="btn btn-primary" onClick={this.submit} >🛠️</button>
        <br />
        <p />
        <label>ver: {Const.VERSION}</label>
      </div>
    )
  }
}

export default Faq;