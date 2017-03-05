const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  name: {
    type: String, required:true,
    validate: {
      validator: function(testString){
        return /^[A-Za-z0-9]+$/.test(testString);
      }, message: "User name can only be letters and numbers"
    }
  },
  messages:[{type: mongoose.Schema.Types.ObjectId, ref: "Message"}],
  comments:[{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}]
});

mongoose.model("User", UserSchema);
