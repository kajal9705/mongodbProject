const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const config = require("./config");

// security
app.use(helmet());

// cors
app.use(cors());

// convert everything to json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongodb database connect admin dgeQuatics
mongoose
  .connect(
    `mongodb+srv://aswin:${config.MONGODB_CONNECTON_PWD}@cluster0.mfkse.mongodb.net/chessProject`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("mongodb connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("success"));