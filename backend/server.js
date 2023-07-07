const express = require('express')
const connectDB = require("./config/db");
const candidate = require("./models/candidate")
const candidateRoutes = require("./api/candidate")
const port = 3000

const app = express()
connectDB();

const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

// Register the logger middleware
app.use(logger);

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  res.send('Hello World!');
});
app.use("/api/candidate", candidateRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})