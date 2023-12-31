const express = require("express");
const app = express();
const port = 5050;

const mysql = require("mysql2");

require("dotenv").config();

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

const dataBase = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
};

const pool = mysql.createPool(dataBase);
module.exports = pool;

const { productRouter } = require("./routes/product/product");

const { adminRouter } = require("./routes/admin/admin");

const { orderRouter } = require("./routes/order/order");

app.use("/product", productRouter);
app.use("/admin", adminRouter);
app.use("/order", orderRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
