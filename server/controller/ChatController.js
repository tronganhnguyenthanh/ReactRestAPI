const chatModel = require("../models/ChatModel");
module.exports = {
  // Send Chat Message
  sendMessage: async (req, res) => {
    try {
      let chat_message = new chatModel({
        chat_content:req.body.chat_content
      })
      let message = await chat_message.save()
      res.json(message)
    } catch (error) {
      res.status(400).json({message:error})
    }
  },
  // Get chat message
  getMessage: async (req, res) => {
    try {
      let display_chat_message = await chatModel.find()
      res.json(display_chat_message)
    }catch (error) {
      res.status(400).json({message:error})
    }
  },
  // Delete chat message
  deleteMessage:async (req, res) => {
    try {
      let _id = req.params.id
      let rm_message = await chatModel.findByIdAndDelete(_id)
      res.json(rm_message)   
    }catch(error){
      res.status(400).json({message:error})   
    }
  }
}
