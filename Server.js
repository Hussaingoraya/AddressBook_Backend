const express = require("express");
const mongoose = require("mongoose");
const AdrressRoutes = require("./Routes/AddressBook_Routes");
const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

function DataBaseConnect() {
  mongoose
    .connect(process.env.mongo_URL || "mongodb://127.0.0.1:27017/addressBook")
    .then(() => {
      console.log("Database Connected Succesfully");
    })
    .catch((error) => {
      console.log("Server error Data base not connected", error);
    });
}
DataBaseConnect();

app.use("/addressBook", AdrressRoutes);

const Host = process.env.host || "localhost";
const Port = process.env.port || 8000;

app.listen(Port, Host, () => {
  console.log(`Server is runnig on http://${Host}:${Port}`);
});
