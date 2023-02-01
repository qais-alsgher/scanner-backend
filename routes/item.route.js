"use strict";
const express = require("express");
const router = express.Router();
const db = require("../models/index");

router.get("/items", getAllItems);
router.get("/items/:id", getItemById);
router.post("/items", createItem);
router.put("/items/:id", updateItem);
router.delete("/items/:id", deleteItem);

async function getAllItems(req, res) {
  let items = await db.items.red();
  res.status(200).json(items);
}

module.exports = router;
