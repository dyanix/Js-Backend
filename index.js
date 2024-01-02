const express = require('express')
const app = express()
require('dotenv').config()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})