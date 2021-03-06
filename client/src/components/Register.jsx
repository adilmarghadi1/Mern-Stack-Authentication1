import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

import { useHistory } from 'react-router-dom'


const Register = (props) => {
  let navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  })
  
  const { name, email, password } = data

  const handleChange = e =>
    setData({ ...data, [e.target.name]: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault()
    
        try {
          await axios.post(
            "/auth/register",
            { name, email, password },
            { headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*', } }
          )
          navigate("/login")
        } catch (err) {
          console.log(err)
        }
      }
  return (
    <div>
      <h4>Create an account</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
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
          <button>Register</button>
        </div>
        <p>
          Already a user? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Register