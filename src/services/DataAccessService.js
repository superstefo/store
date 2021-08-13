import React from 'react';
import Const from './Constants';
import AjaxService from './AjaxService';


class DataKeeperService extends React.Component {
  constructor(props) {
    super(props);
    this.currentOrder = {};
    this.isSitePristine = true;
    this.allOrders = {};
    this.selectedDateForOrders = ""; //  to keep state for SelectOrders view
    this.priceList = [
      {
        title: "тиквени семки",
        id: "boiko01",
        unit: "кг",
        price: 5.25,
        info: "0,30 кг./опаковка"
      },
      {
        title: "фъстъци",
        id: "peanuts01",
        unit: "кг",
        price: 1.05,
        info: "фъстъци едри"
      },
      {
        title: "фурми",
        id: "furmi01",
        unit: "кг",
        price: 18.05,
        info: "фурми мноо яки"
      },
      {
        title: "авокадо",
        id: "avokado01",
        unit: "бр",
        price: 4.00,
        info: "авокадо"
      },
      {
        title: "kруша",
        id: "круша01",
        unit: "бр",
        price: 2.3,
        info: "сладка kруша"
      },
      {
        title: "желатин",
        id: "желатин01",
        unit: "бр",
        price: 0.09,
        info: "желатин 1"
      },
      {
        title: "захар",
        id: "захар01",
        unit: "бр",
        price: 0.1,
        info: "захар 1"
      }
    ];
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

  getSelectedDateForOrders= () => {
    return this.selectedDateForOrders;
  }

  setSelectedDateForOrders= (date) => {
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
  getPriceList = () => {
    return this.priceList;
  }

  setPriceList = (priceList) => {
    this.priceList = priceList;
  }

}
export default new DataKeeperService();


