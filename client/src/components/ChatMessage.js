import React, {useEffect, useState} from "react"
import axios from "axios"
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const ChatMessage = () => {
  const [chat_content, setChatContent] = useState("")
  const [chat_list, setChatList] = useState([])
  useEffect(() => {
    handleGetList()
  },[])
  const handleAddChat = () => {
    let obj = {
     chat_content:chat_content
    }
    if(chat_content === ""){
      toast.error("Please enter your chat message", {position:"top-center"})
      return false
    }
    axios.post("http://localhost:8888/api/chat-content/create", obj).then(() => {
      toast.success("Message sent successfully", {position:"top-center"})
      handleGetList()
      setChatContent("")
    })
  }
  const handleGetList = () => {
    axios.get("http://localhost:8888/api/chat-content/get-list").then((res) => {
      setChatList(res.data)
    })
  }
  const handleDelete = (_id) => {
    axios.delete(`http://localhost:8888/api/chat-content/delete/${_id}`).then(() => {
      toast.success("Message deleted sucessfully", {position:"top-center"})
      handleGetList()
    })
  }
  return (
   <>
    <ToastContainer/>
    <div className="container">
      <h1 className="text-center text-primary">Chat Message</h1>
       {chat_list.map((i, index) => {
         return(
           <div key={index}>
              <div className="card mt-2">
                <p className="p-2">{i.chat_content}</p>
              </div>
              <button className="btn btn-danger mt-2 btn-delete" onClick={() => handleDelete(i._id)}>Delete</button>
           </div>
          )
        })
       }
      <div className="d-flex">
        <input 
          type="text" 
          className="form-control ta-form-control mt-2"
          value={chat_content}
          onChange={(e) => setChatContent(e.target.value)}
        />
        <button type="button" className="btn btn-primary mt-2 ml-2" onClick={handleAddChat}>Send</button>
      </div>
    </div>
   </>
  )
}

export default ChatMessage