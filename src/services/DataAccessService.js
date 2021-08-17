import React from 'react';
import Const from './Constants';
import AjaxService from './AjaxService';
import History from './RouteHistoryProvider';

class DataKeeperService extends React.Component {
  constructor(props) {
    super(props);
    this.currentOrder = {};
    this.isSitePristine = true;
    this.allOrders = {};
    this.selectedDateForOrders = ""; //  to keep state for SelectOrders view
    this.isAdmin = false;
    this.priceList = [];
    AjaxService.wakeServer();
  };

  getCurrentOrder = () => {
    return this.currentOrder;
  }

  getOrdersForDate = (date) => {
    return this.allOrders[date];
  }

  setOrdersForDate = (date, orders) => {
    this.allOrders[date] = orders;
  }

  getSelectedDateForOrders = () => {
    return this.selectedDateForOrders;
  }

  setSelectedDateForOrders = (date) => {
    this.selectedDateForOrders = date;
  }

  clearCurrentOrder = () => {
    this.currentOrder = {};
  }

  isPristine = () => {
    return this.isSitePristine;
  }
  setPristine = (isPristine) => {
    this.isSitePristine = isPristine;
  }

  getPriceListObj = () => {
    let arr = this.getPriceList()
    let obj = {};

    arr.forEach(one => {
      obj[one.id] = one
    });
    return obj;
  }

  getPriceList = () => {
    if (!!this.priceList && this.priceList.length > 0) {
      return this.priceList;
    }
    let promise = AjaxService.doGet(Const.URLS.ITEMS);
    promise.then(data => {
      this.setPriceList(data?.data?.items || []);
    }).catch(e => {
      History.goTo("/error", e)
    })
    return this.priceList;
  }

  setPriceList = (priceList) => {
    this.priceList = priceList;
  }

  getIsAdmin = () => {
    return this.isAdmin;
  }

  setIsAdmin = (isAdmin) => {
    this.isAdmin = isAdmin;
  }
}
export default new DataKeeperService();


