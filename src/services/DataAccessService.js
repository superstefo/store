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
        price: 5.25,
        info: "0,30 кг./опаковка"
      },
      {
        title: "фъстъци",
        id: "peanuts01",
        price: 1.05,
        info: "0,5кг пакет фъстъци едри"
      },
      {
        title: "фурми",
        id: "furmi01",
        price: 18.05,
        info: "0.5кг в кутия"
      },
      {
        title: "авокадо",
        id: "avokado01",
        price: 4.00,
        info: "брой"
      },
      {
        title: "kруша",
        id: "круша01",
        price: 2.3,
        info: "цена за 1 брой"
      },
      {
        title: "желатин",
        id: "желатин01",
        price: 0.09,
        info: "1 пакет"
      },
      {
        title: "захар",
        id: "захар01",
        price: 0.1,
        info: "1 кг./пакет"
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


