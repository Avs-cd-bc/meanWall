const mongoose = require("mongoose");
const User = mongoose.model("User");
const Message = mongoose.model("Message");
const Comment = mongoose.model("Comment");

function MeanController(){
  var self = this;
  self.Users = [];
  self.login = function(req, res){
    User.findOne({name: req.body.name}, function(err, user){
      if(err) res.json(err)
      else if(user){
        if(self.Users.includes(user.name))
        res.json({message: "User Already Logged In", kind: "Login Error"});
        else {
          self.Users.push(user.name);
          console.log(user.name+" logged in.");
          res.json(user.name)
        }
      }
      else {
        const tempUser = new User({
          name: req.body.name
        });
        tempUser.save(function(err, newUser){
          if(err) res.json(err)
          else res.json(newUser.name);
        });
      }
    });
  }
  self.messages = function(req, res){
    console.log("In Messages!");
    console.log(req.body);
    User.findOne({name: req.body.name}, function(err, user){
      if(err) res.json(err);
      else{
        tempMessage = new Message({
          message: req.body.message,
          _user: user._id
        });
        tempMessage.save(function(err, newMessage){
          if(err) res.json(err);
          else {
            user.messages.push(newMessage._id);
            user.save(function(err, updatedUser){
              if(err) res.json(err);
              else {
                res.redirect("/wall");
              }
            });
          }
        });
      }
    });
  }

  self.index = function(req, res){
    console.log("redirected to wall");
    Message.find({}).populate("comments").populate("_user").exec(function(err, messages){
      if(err) res.json(err);
      else res.json(messages);
    });
  }
}

module.exports = new MeanController();
