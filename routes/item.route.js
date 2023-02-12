"use strict";
const express = require("express");
const router = express.Router();
const db = require("../models/index");

router.get("/items", getAllItems);
router.get("/items/:id", getItemById);
// router to get item by barcode
router.get("/items/barcode/:barcode", getItemByBarcode);
router.post("/items", createItem);
router.put("/items/:id", updateItem);
router.delete("/items/:id", deleteItem);

async function getAllItems(req, res) {
  let items = await db.items.read();
  res.status(200).json(items);
}

async function createItem(req, res) {
  let item = req.body;
  let newItem = await db.items.create(item);
  res.status(201).json(newItem);
}

async function getItemById(req, res) {
  let id = req.params.id;
  let item = await db.items.read(id);
  res.status(200).json(item);
}

async function updateItem(req, res) {
  let id = req.params.id;
  let item = req.body;
  let updatedItem = await db.items.update(id, item);
  res.status(200).json(updatedItem);
}

async function deleteItem(req, res) {
  let id = req.params.id;
  let deletedItem = await db.items.delete(id);
  res.status(200).json(deletedItem);
}

async function getItemByBarcode(req, res) {
  let barcode = req.params.barcode;
  let item = await db.items.findByBarcode(barcode);
  res.status(200).json(item);
}

module.exports = router;
