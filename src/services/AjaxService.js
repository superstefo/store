import React from 'react';
import axios from 'axios';
import Const from './Constants';

class AjaxService extends React.Component {

  execute = (method, url, data, isToEscape) => {
    let headers = {};
    headers["Content-Type"] = "application/json;charset=utf-8";
    headers[Const.AUTH_HEADER_NAME] = this[Const.AUTH_HEADER_NAME];

    if (isToEscape) {
      data = JSON.stringify(data).replace("{", "");
    }

    return axios({
      method: method,
      url: url,
      data: { "json": data },
      headers: headers
    });
  };

  doPost = (url, data, isToescape) => {
    return this.execute('post', url, data, isToescape);
  };

  doPut = (url, data, isToescape) => {
    return this.execute('put', url, data, isToescape);
  };

  doGet = (url, isToescape) => {
    return this.execute('get', url, {}, isToescape);
  };

  doDelete = (url, isToescape) => {
    return this.execute('delete', url, {}, isToescape);
  };

  setSecret = (secret) => {
    this[Const.AUTH_HEADER_NAME] = secret;
  };
}

export default new AjaxService();
