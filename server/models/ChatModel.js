const mongoose = require("mongoose")
let ChatSchema = new mongoose.Schema({
  chat_content:{
    type:String,
    required:[true, "Please enter your chat content"]
  }
},{
  collection:"chat"
})
module.exports = mongoose.model("ChatSchema", ChatSchema)