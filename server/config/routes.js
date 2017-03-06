const mean = require("../controllers/meanController.js");

module.exports = function(app){
  app.post("/login", mean.login);
  // app.post("/logout", mean.logout);
  app.post("/messages", mean.messages);
  // app.post("/comments", mean.comments);
  app.get("/wall", mean.index);
}
