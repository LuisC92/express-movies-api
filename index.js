const express = require("express");
const router = require("./src/routes/routes");
const cors = require("cors")

require("dotenv").config();
const serverPort = process.env.PORT || 8000;
// init the express app
const app = express();
// define the index route
app.use(cors())
app.use(express.json());
app.get("/", (req, res) => {
    console.log("A new request just hit the API !");
    res.send("Hello dear API client :)");
});
app.use("/",router)
// listen to incoming requests
app.listen(serverPort, () => console.log("Express server is running"));
