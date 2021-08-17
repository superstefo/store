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

  doGet = (url) => {
    return this.execute('get', url, {}, false);
  };

  doDelete = (url) => {
    return this.execute('delete', url, {}, false);
  };

  setSecret = (secret) => {
    this[Const.AUTH_HEADER_NAME] = secret;
  };

  /// wake up backend server as it falls asleep if not used
  wakeServer = () => {
    this.doGet(Const.URLS.WAKE_SERVER);
  }
}

export default new AjaxService();
