//let ipAdress = 'http://localhost:5000/';
let ipAdress = 'https://nut-store.herokuapp.com/';

const Const = {
  URLS: {
    AUTH: ipAdress + "auth",
    BASE_URL: ipAdress,
    ITEMS:  ipAdress + "items",
    ORDER:  ipAdress + "order",
    ORDERS:  ipAdress + "orders/",
    WAKE_SERVER: ipAdress + "status"
  },
  AUTH_HEADER_NAME: 'authsecret',
  VERSION: '1.01'
};

export default Const;
