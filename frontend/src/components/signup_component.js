import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/signup.module.css';

const Signup  = () =>
{
  const [data, setData] = useState
  ({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  });

  const handleChange=({ currentTarget: input}) => 
  {
    setData({...data, [input.name]: input.value})
  }

  const handleSubmit = (e) =>
  {
      e.preventDefault();
  }
  return (
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
          <button type="submit" className={styles.tan_btn}>
            Sign up
          </button>
          </form>
        </div>
      </div>
    </div>

  )
};

export default Signup;