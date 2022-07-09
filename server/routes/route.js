const express = require("express");
const route = express.Router();
const services = require("../services/render.js");

route.get("/", services.homeRoute);

route.get("/update-user", services.addUserRoute);

route.get("/add-user", services.updateRoute);

module.exports = route;
