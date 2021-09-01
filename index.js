const express = require('express')
const request = require('./request.js')
const app = express()

const port = 3000

app.get('/btcusd', async (req, res) => {
    const data = await request.getBTC()
    const json = JSON.stringify(data)

    res.send(json)
})

// app.get('/ethusd', (req, res) => {
//   res.send('Eth Price')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})