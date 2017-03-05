const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const port = 8000;
const app = express();

app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(port, function(){
  console.log("==============");
  console.log(`=====${port}=====`);
  console.log("==============");
});
