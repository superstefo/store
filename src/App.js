import React from 'react';
import Home from './Home';
import ItemsList from './customer/ItemsList';
import Basket from './customer/Basket';
import TopHeader from './parts/TopHeader';
import Faq from './customer/Faq';
import OrderDetails from './customer/OrderDetails';
import Authenticate from './admin/Authenticate';
import HistoryHolder from './services/RouteHistoryProvider';
import OrderResult from './customer/OrderResult';
import EditItemsList from './admin/EditItemsList';
import EditItem from './admin/EditItem';
import {RouteHistoryProvider} from './services/RouteHistoryProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <div className="container" style={{ paddingTop: 10 }}>

      <Router>
        <TopHeader />
        <RouteHistoryProvider historyHolder={HistoryHolder} />
        <Switch>
          < Route exact path="/" component={Home} />
          < Route exact path="/basket" component={Basket} />
          < Route path="/items" component={ItemsList} />
          < Route path="/faq" component={Faq} />
          < Route path="/order-details" component={OrderDetails} />
          < Route path="/order-result" component={OrderResult} />
          < Route path="/auth" component={Authenticate} />
          < Route path="/edit-items-list" component={EditItemsList} />
          < Route path="/edit-item" component={EditItem} />
          < Route path="*" component={Home} />
        </Switch>
      </Router>
    </div >
  );
};

export default App;
