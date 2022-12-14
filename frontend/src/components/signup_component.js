import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/signup.module.css';
import axios from 'axios';
import Topbar from './topbar_component';


const Signup  = () =>
{
  //Adding state for registration data
  const[data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
  });

  //Handling changes in input
  const handleChange = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value});
  };
  //Addding state for errors
  const [error, setError] = useState("");

  //Handling submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //Connecting to api
      const url = "http://localhost:4000/api/users";
      const {data: res} = await axios.post(url, data);
      localStorage.setItem("token", res.data);
			window.location = "/sign-in";
    } catch (error) {
      if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			  }
		}
  };


  return (
    //Adding topbar and html for signup has a container and a form with inputs
    <div><Topbar/>
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to ="/sign-in">
            <button type = 'button' className = {styles.white_btn}>
              Sign In
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name='firstName'
              onChange={handleChange}
              value={data.firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name='lastName'
              onChange={handleChange}
              value={data.lastName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Email"
              name='email'
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            /><input
            type="password"
            placeholder="Password"
            name='password'
            onChange={handleChange}
            value={data.password}
            required
            className={styles.input}
          />
          {error && <div className={styles.error_msg}>{error}</div>}
          <button type="submit" className={styles.pink_btn}>
            Sign up
          </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Signup;