const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  message: {type: String, required: true, minlength: 2, maxlength: 100},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}],
  _user:{type: mongoose.Schema.Types.ObjectId, ref: "User"}
},{timestamps: true});

mongoose.model("Message", MessageSchema);
