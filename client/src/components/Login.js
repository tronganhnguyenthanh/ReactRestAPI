import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const Login = () => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const handleLogin = () => {
    if (username === "") {
      toast.error("Please enter your username", {position:"top-center"})
      return false
    }
    if (password === "") {
      toast.error("Please enter your password", {position:"top-center"})
      return false
    }
    if (password.length < 8) {
      toast.error("Your password must be at least 8 characters",{
        position:"top-center",
      })
      return false
    } else {
      navigate("/chat-message")
      return true
    }
  }
  return (
    <div className="container">
      <ToastContainer />
      <form>
        <h1 className="text-center text-primary">Login form</h1>
        <div className="form-group">
          <label className="text-white">Username</label>
          <input
             type="text"
             className="form-control ta-form-control"
             placeholder="Username"
             onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="text-white">Password</label>
          <input
             type="password"
             className="form-control ta-form-control"
             placeholder="Password"
             onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-primary ml-2" onClick={handleLogin}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
