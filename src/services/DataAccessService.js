import React from 'react';
import Const from './Constants';
import AjaxService from './AjaxService';


class DataKeeperService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.currentOrder = {};
  };

  getCurrentOrder = () => {
    return this.currentOrder;
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
      }
    ];
  }

}
export default new DataKeeperService();


