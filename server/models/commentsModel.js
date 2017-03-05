const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  comment:{
    type:String, required: true, minlength: 2, maxlength: 100
  },
  _message:{type: mongoose.Schema.Types.ObjectId, ref: "Message"},
  _user:{type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, {timestamps: true});

mongoose.model("Comment", CommentSchema);
