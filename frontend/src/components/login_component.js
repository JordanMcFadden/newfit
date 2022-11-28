import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/signin.module.css';
import axios from 'axios';

const Signin  = () =>
{
  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
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
            <button type="submit" className={styles.pink_btn}>
              Sign in
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here?</h1>
            <Link to ="/sign-up">
            {error && <div className={styles.error_msg}>{error}</div>}
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