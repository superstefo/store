import React from 'react';
import Const from './Constants';
import AjaxService from './AjaxService';


class DataKeeperService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.currentOrder = {};
    this.isSitePristine = true;
  };

  getCurrentOrder = () => {
    return this.currentOrder;
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
    return [
      {
        title: "тиквени семки",
        id: "boiko01",
        unit: "кг",
        price: 5.25,
        info: "тиквени семки oт банкянска тиква"
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
  }

}
export default new DataKeeperService();


