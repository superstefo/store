let ipAdress = 'http://localhost:5000/';
//let ipAdress = 'https://nut-store.herokuapp.com/';

const Const = {
  URLS: {
    AUTH: ipAdress + "auth",
    BASE_URL: ipAdress,
    ITEMS:  ipAdress + "items",
    ORDER:  ipAdress + "order",
    ORDERS:  ipAdress + "orders/"
  },
  AUTH_HEADER_NAME: 'authsecret',
  VERSION: '0.10'
};

export default Const;