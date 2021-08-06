import React from 'react';
import "react-table/react-table.css"
import Const from '../services/Constants';
import AjaxService from '../services/AjaxService';

class Authenticate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  handleSubmit = () => {


const encodedString = Buffer.from(this.state.name + ":" + this.state.pass).toString('base64');

    let promise = AjaxService.doPost(Const.URLS.AUTH, encodedString, {});

    promise.then((data) => {
      console.log(data);

    }).catch((e) => {

       console.error(e);
    })
  }

  onChangeFunc = (e, key) => {
    this.setState( {[key]: e.target.value} )
  }

  render() {
    return (
      <div className="text-left text-wrap">
        <br />
        <div className="text-left text-wrap">
           <input className="form-control" onChange={(ev) => this.onChangeFunc(ev, "name" )} type="text" placeholder="Имe..."></input>
          <input className="form-control" onChange={(ev) => this.onChangeFunc(ev, "pass" )} type="password" placeholder="Парола..."></input>
          <br />
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>go!</button>
        </div>
      </div>
    )
  }
}

export default Authenticate;
