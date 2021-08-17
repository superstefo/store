import React, { Component } from 'react';
import DataAccessService from './services/DataAccessService';
import History from './services/RouteHistoryProvider';
import AjaxService from './services/AjaxService';
import Const from './services/Constants';
import logo from './assests/snacking.gif'



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      isButtonDisabled: false
    };
  }

  getPriceList = () => {
    this.setState({ isHidden: false, isButtonDisabled: true })
    let promise = AjaxService.doGet(Const.URLS.ITEMS);
    promise.then(data => {
      DataAccessService.setPristine(false);
      DataAccessService.setPriceList(data?.data?.items || []);
      History.goTo("/items")
    }).catch(e => {
      History.goTo("/error", e)
    })
    return this.priceList;
  }

  render() {
    return (
      <div className="text-center">
        <p />
        <br />
        <img src={logo} alt="loading..." />
        <br />
        <h5>За поръчка на ядки, моля, разгледайте каталога!</h5>
        <p />
        <br />
        <button disabled={this.state.isButtonDisabled} className="btn btn-primary" onClick={this.getPriceList}>Каталог</button>
        <p />
        <br />
        {this.state.isHidden ? null : <div className="spinner-border text-primary" role="status"></div>}
      </div>
    )
  }
}

export default Home;
