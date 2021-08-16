import React from 'react';
import "react-table/react-table.css"
import { withRouter } from 'react-router-dom'
import DataAccessService from '../services/DataAccessService';
import { SetStateInput } from '../parts/TinyParts';
import AjaxService from '../services/AjaxService';
import Const from '../services/Constants';
import History from '../services/RouteHistoryProvider';


class EditItems extends React.Component {
  constructor(props) {
    super(props);
    let item = props?.location?.state?.item || {};

    if (!!item.id) { // make the id field immutable, as the backend uses it
      this.isImmutableId = true;
    };

    this.state = {
      title: item.title || "",
      id: item.id || this.getId(),
      price: item.price || "",
      info: item.info || ""
    };
  };

  stateToObj = () => {
    let price = "" + this.state.price;
    price = parseFloat(price.replace(",", "."));
    return {
      title: this.state.title,
      id: this.state.id,
      price: parseFloat(price),
      info: this.state.info
    };
  };

  getId = () => {
    let str = new Date().getTime() + "i";
    str = str.split('').reverse().join('').substring(0, 6);

    let arr = DataAccessService.getPriceList();
    let index = arr.findIndex(item => item.id === str);

    if (index > -1) {
      return this.getId();
    }

    return str;
  };

  change = () => {
    let arr = DataAccessService.getPriceList()
    let obj = {};

    arr.forEach(one => {
      obj[one.id] = one
    });

    let editedObj = this.stateToObj();

    obj[editedObj.id] = editedObj;
    arr = [];

    Object.keys(obj)
      .forEach((key) => {
        arr.push(obj[key])
      });

    this.saveToBackend(arr);
  };

  cancel = () => {
    History.goTo("/edit-items-list");
  };

  delete = (id) => {
    var answer = window.confirm("🔥🔥🔥 Изтриване завинаги? 🔥🔥🔥");
    if (answer) {
      let array = DataAccessService.getPriceList();
      let newArray = [];
      let newArrayIndex = 0;
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.id !== id) {
          newArray[newArrayIndex] = element;
          newArrayIndex++;
        };
      };
      this.saveToBackend(newArray);
    };
  };

  saveToBackend = (items) => {
    console.log(items);
    let promise = AjaxService.doPost(Const.URLS.ITEMS, { items }, true);
    promise.then((data) => {
      DataAccessService.setPriceList(items);
      History.goTo("/edit-items-list");
    }).catch((e) => {
      console.error(e);
    });
  };

  render() {
    return (
      <div>
        <div title="Например Бадем, Белени семки и тн.">
          <SetStateInput stateFieldName="title" statefulObject={this} label="Име на артикул " />
        </div>
        <div title="Цена в лева за 1 опаковка, с точност до втория знак. Например 18.05.">
          <SetStateInput stateFieldName="price" statefulObject={this} label="Цена" type="number" />
        </div>
        <div title="Например тегло или големина на опаковките.">
          <SetStateInput stateFieldName="info" statefulObject={this} label="Допълнителна информация" />
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={this.change} >Запази</button>
          <button className="btn btn-primary" onClick={this.cancel} >Откажи</button>
        </div>
        <br />
        <div className="text-center" title="ВНИМАНИЕ!!! Изтрива този артикул от базата!">
          <button className="btn btn-danger" onClick={() => this.delete(this.state?.id)} >Изтрий</button>
        </div>
      </div>
    )
  }
}

export default withRouter(EditItems);