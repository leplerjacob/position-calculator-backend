const axios = require("axios");

// axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {

// })
function getBTCPrice() {
  return axios.get("http://localhost:3002/data").then((res) => {
    return res.data[0].quote.USD.price
  });
}

function getETHPrice() {
  return axios.get("http://localhost:3002/data").then((res) => {
    return res.data[1].quote.USD.price
  })
}

module.exports = {
  getBTC: getBTCPrice,
  getETH: getETHPrice
}

/*
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '5000',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
  },
  json: true,
  gzip: true
};
*/
