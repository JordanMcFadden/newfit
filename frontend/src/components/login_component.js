import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/signin.module.css';

const Signin  = () =>
{
  const [data, setData] = useState
  ({
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
    <div className={styles.signin_container}>
      <div className={styles.signin_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>Login to FitForYou</h1>
              <input
                type="text"
                placeholder="Email"
                name='email'
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
              <input
              type="password"
              placeholder="Password"
              name='password'
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            <button type="submit" className={styles.tan_btn}>
              Sign in
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here?</h1>
            <Link to ="/sign-up">
              <button type = 'button' className = {styles.white_btn}>
                Sign Up
              </button>
            </Link>
        </div>
      </div>
    </div>

  )
};

export default Signin;