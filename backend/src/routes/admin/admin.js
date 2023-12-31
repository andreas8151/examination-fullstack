const express = require("express");

const adminRouter = express.Router();

const { getAdmins } = require("../../controllers/adminController/getAdmins");

const { addAdmin } = require("../../controllers/adminController/addAdmin");

const { patchAdmin } = require("../../controllers/adminController/patchAdmin");

const {
  deleteAdmin,
} = require("../../controllers/adminController/deleteAdmin");

const { login } = require("../../controllers/adminController/login");

adminRouter.get("/", getAdmins);
adminRouter.post("/", addAdmin);
adminRouter.patch("/:id", patchAdmin);
adminRouter.delete("/:id", deleteAdmin);
adminRouter.post("/login", login);

module.exports = { adminRouter };
