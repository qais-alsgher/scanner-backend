"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
const itemsRouter = require("./routes/item.route");

app.use(cors());
app.use(express.json());
// app.use(itemsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

function startServer(port) {
  app.listen(port, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = { startServer, app };
