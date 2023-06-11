const express = require("express");
const dotenv = require("dotenv");
const dbConfig=require('./config/dbConfig')
const app = express();
dotenv.config();

dbConfig();

port = 4000 || process.env.port;
app.use(express.json());
app.use('/api/v1/users/',require('./route/UserRoute'));

app.listen(port, () => {
  console.log(`server run on ${port}`);
});
