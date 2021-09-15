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

async function postTrade(trade) {
  return await axios.post("http://localhost:3002/history", trade)
}

module.exports = {
  getBTC: getBTCPrice,
  getETH: getETHPrice,
  postTrade: postTrade,
}
