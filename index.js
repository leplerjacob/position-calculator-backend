const express = require("express");
const request = require("./request.js");
const cors = require("cors");
const app = express();

const port = 3001;

app.use(cors());

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get("/btcusd", cors(corsOptions), async (req, res) => {
  const data = await request.getBTC();
  const json = JSON.stringify(data);

  res.send(json);
});

app.get("/ethusd", cors(corsOptions), async (req, res) => {
  const data = await request.getETH();
  const json = JSON.stringify(data);

  res.send(json);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
