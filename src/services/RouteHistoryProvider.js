import React from 'react';
import { withRouter } from 'react-router-dom'

class RouteHistoryProviderCl extends React.Component {
  constructor(props) {
    super(props);
    let { history, historyHolder } = props;
    if (!!history && !!historyHolder) {
      historyHolder.importHistory(history)
    } else {
      console.error("Those objects should NOT be null " + history + historyHolder);
    }
  }

  render() { return null }
}

export const RouteHistoryProvider = withRouter(RouteHistoryProviderCl);

////////////

class History extends React.Component {
  constructor(props) {
    super(props);
  }

  importHistory = (historyObj) => {
    if (!!historyObj) {
      this.history = historyObj
    } else {
      console.error("One object CANNOT be null: " + historyObj);
    }
  }

  goTo = (url, data) => {
    if (!this.history) {
      console.error("The object should NOT be null: " + this.history);
      return;
    }

    this.history.push({
      pathname: url,
      state: { data: data }
    })
  }

}

export default new History()