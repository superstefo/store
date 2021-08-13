import React from 'react';
import Authenticate from './admin/Authenticate';
import Basket from './customer/Basket';
import EditItem from './admin/EditItem';
import EditItemsList from './admin/EditItemsList';
import Faq from './customer/Faq';
import GetOrders from './admin/GetOrders';
import HistoryHolder from './services/RouteHistoryProvider';
import Home from './Home';
import ItemsList from './customer/ItemsList';
import ReviewOrder from './admin/ReviewOrder';
import SelectOrders from './admin/SelectOrders';
import OrderDetails from './customer/OrderDetails';
import OrderResult from './customer/OrderResult';
import TopHeader from './parts/TopHeader';
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
          < Route path="/get-orders" component={GetOrders} />
          < Route path="/select-orders" component={SelectOrders} />
          < Route path="/review-order" component={ReviewOrder} />
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
