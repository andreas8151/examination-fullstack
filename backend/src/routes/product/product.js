const express = require("express");

const productRouter = express.Router();

const {
  getAllProducts,
} = require("../../controllers/productControllers/getAllProducts");

const {
  addProduct,
} = require("../../controllers/productControllers/addProduct");

const {
  patchProduct,
} = require("../../controllers/productControllers/patchProduct");

const {
  deleteProduct,
} = require("../../controllers/productControllers/deleteProduct");

productRouter.get("/", getAllProducts);
productRouter.post("/", addProduct);
productRouter.patch("/:id", patchProduct);
productRouter.delete("/:id", deleteProduct);

module.exports = { productRouter };
