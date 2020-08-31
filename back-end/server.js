const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { MONGOURI } = require("./keys");

app.use(cors());
// Database
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connect to mongDB");
});

mongoose.connection.on("error", (err) => {
  console.log("err connecting", err);
});

require("./models/user");
require("./models/post");
//Middleware
app.use(express.json()); // we need to parse
app.use(require("./routes/auth")); // then handle routes
app.use(require("./routes/post")); // then handle routes

// Start Server
app.listen(4000, () => console.log("Server started on port 4000"));
