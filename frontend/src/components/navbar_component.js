import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/topbar.module.css';

export default function Topbar(props) {


  return (
     //Creating template for topbar and adding links to social media and logos
     //Then add templlate for navbar to navigate between pages
    <>
      <div className={styles.topbar}>
        <div className={styles.topbar_phone}>
          <a className={styles.topbar_links} href="tel:318-200-9883">(318)-200-9883</a>
          <a className={styles.topbar_links} href="mailto:fit4you@gmail.com">fit4you@gmail.com</a>
        </div>
        <div className={styles.topbar_social}>

          
            <>
              <Link className={styles.topbar_links} to="/sign-in">
                Logout
              </Link>
            </>
       
          <a className="links" href="https://www.facebook.com/" target="">
            <img rel="noreferrer" src="../images/fb.png" alt="" />
          </a>
          <a className="links" href="https://twitter.com/login?lang=en" target="">
            <img rel="noreferrer" src="../images/tweet.png" alt="" />
          </a>
          <a className="links" href="https://www.instagram.com/?hl=en" target="">
            <img rel="noreferrer" src="../images/insta.png" alt="" />
          </a>
        </div>
      </div>

      
      <nav className={styles.navbar}>
        <div className={styles.navbar_logo}>FitForYou<i className="fab fa-foursquare"></i>
          <div className={styles.navbar_groups}>
            <ul className={styles.navbar_groups}>
              <li>
                  <Link className={styles.navbar_links} to="/">
                    Create Workout
                  </Link>
              </li>
              <li>
                  <Link className={styles.navbar_links} to="/exercises">
                    Your Exercises
                  </Link>
              </li>
              <li>
                  <Link className={styles.navbar_links} to="/records">
                    Records
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
} 