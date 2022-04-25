const express = require("express")
const router = express.Router()
const chatModel = require("../models/ChatModel")
// Create Chat Message
router.post("/chat-content/create", async (req, res) => {
 try {
  let chat_message = new chatModel({
   chat_content:req.body.chat_content
  })
  let message = await chat_message.save()
  res.json(message)
 }catch(error){
   res.status(400).json({message:error})
 }
})
// Get chat message
router.get("/chat-content/get-list", async (req, res) => {
 try {
   let display_chat_message = await chatModel.find()
   res.json(display_chat_message)
 }catch(error){
   res.status(400).json({message:error})
 }
})
// Delete chat message
router.delete("/chat-content/delete/:id", async (req, res) => {
  try {
    let _id = req.params.id
    let rm_message = await chatModel.findByIdAndDelete(_id)
    res.json(rm_message)   
  }catch(error){
    res.status(400).json({message:error})   
  }
})
module.exports = router