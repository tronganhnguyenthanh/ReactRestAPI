import React from "react"
import {Route, Routes} from "react-router-dom"
import NotFound from "../components/404"
import ChatMessage from "../components/ChatMessage"
import Login from "../components/Login"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="chat-message" element={<ChatMessage/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
