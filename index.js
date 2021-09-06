const express = require("express");
const request = require("./request.js");
const cors = require("cors");
const app = express();

const port = 3000;

app.use(cors());

const corsOptions = {
  origin: "http://localhost:3002",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get("/btcusd", cors(corsOptions), async (req, res) => {
  const data = await request.getBTC();
  const json = JSON.stringify(data);

  res.send(json);
});

// app.get('/ethusd', (req, res) => {
//   res.send('Eth Price')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
