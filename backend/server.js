const express = require('express')
const connectDB = require("./config/db");
const port = 3000

const app = express()
connectDB();


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})