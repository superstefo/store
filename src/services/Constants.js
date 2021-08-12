let ipAdress = 'http://localhost:5000/';
//let ipAdress = 'https://nut-store.herokuapp.com/';

const Const = {
  URLS: {
    BASE_URL: ipAdress,
    ORDER:  ipAdress + "order",
    AUTH: ipAdress + "auth",
    ITEMS:  ipAdress + "items"
  },
  AUTH_HEADER_NAME: 'authsecret',
  VERSION: '0.10'
}

export default Const;
