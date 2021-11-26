require("dotenv").config();

const db = require("./utilities/db");
const http = require("http");
const express = require("express");
const authRoute = require("./routes/Auth");
const userRoute = require("./routes/User");
const adminRoute = require("./routes/Admin");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5050;

db.connect();

app.set("port", port);
app.use(express.json());
app.use(cors());

const server = http.createServer(app);
server.listen(port);

server.on("error", (error) => {
  console.error(error);
});

server.on("listening", () => {
  console.log(`Listening on port ${port}`);
});

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/admin", adminRoute);

module.exports = { app, server };
