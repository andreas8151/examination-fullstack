const express = require("express");

const orderRouter = express.Router();

const { getOrders } = require("../../controllers/orderController/getOrders");

const { addOrder } = require("../../controllers/orderController/addOrder");

const {
  statusOrder,
} = require("../../controllers/orderController/statusOrder");

const {
  deleteOrder,
} = require("../../controllers/orderController/deleteOrder");

orderRouter.get("/", getOrders);
orderRouter.post("/", addOrder);
orderRouter.patch("/:id", statusOrder);
orderRouter.delete("/:id", deleteOrder);

module.exports = { orderRouter };
