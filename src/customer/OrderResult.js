import React from 'react';
import "react-table/react-table.css"
import DataAccessService from '../services/DataAccessService';
import History from '../services/RouteHistoryProvider';

class OrderResult extends React.Component {
  constructor(props) {
    super(props);
    this.result = props?.location?.state?.result || "Unknown result..."
  }

  submit = () => {
    DataAccessService.clearCurrentOrder();
    History.goTo("/items");
  }

  render() {
    return (
      <div className="text-center">
        <br />
        <h5> {this.result}</h5>
        <p />
        <br />
        <button className="btn btn-primary" onClick={this.submit} >Друга поръчка?</button>
      </div>
    )
  }
}

export default OrderResult;