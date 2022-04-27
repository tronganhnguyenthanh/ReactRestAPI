const express = require("express")
const router = express.Router()
const chatController = require("../controller/ChatController")
// Create Chat Message
router.post("/chat-content/create", chatController.sendMessage)
// Get chat message
router.get("/chat-content/get-list", chatController.getMessage)
// Delete chat message
router.delete("/chat-content/delete/:id", chatController.deleteMessage)
module.exports = router