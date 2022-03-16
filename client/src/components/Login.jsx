import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login = props => {
  let navigate = useNavigate();

  const [data, setData] = useState({    
    email: "",
    password: "",
  })

  const { email, password } = data

  const handleChange = e =>
    setData({ ...data, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const res = await axios.post(
        "/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*', } }

      )
      localStorage.setItem("token", res.data.token)
      navigate("/home")

    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <h4>Log into your account</h4>
      <form onSubmit={handleSubmit}>        
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Login</button>
        </div>
        <p>
          Not a user? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login