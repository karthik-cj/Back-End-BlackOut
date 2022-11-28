const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");
const PORT = process.env.PORT;
const app = express();
const DB = process.env.URL;

app.use(cors());
app.use(express.json());
app.use(adminRouter);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
