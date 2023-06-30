const express = require('express')
const connectDB = require("./config/db");
const candidate = require("./models/candidate")
const port = 3000

const app = express()
connectDB();


app.get('/', async (req, res) => {
  // const candidate1 = new candidate({
  //   name: "Saurav",
  //   email: "sauravraj276@gmail.com",
  //   password: "123456789",
  //   mobile: "9587584186",
  // });

  // candidate1.save();
  res.send('Hello World!');
});
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})