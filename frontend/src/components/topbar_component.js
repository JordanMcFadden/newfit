import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/topbar.module.css';
export default function Topbar(props) {


    return (
      <>
        <div className={styles.topbar}>
          <div className={styles.topbar_phone}>
            <a className={styles.topbar_links} href="tel:318-200-9883">(318)-200-9883</a>
            <a className={styles.topbar_links} href="mailto:fit4you@gmail.com">fit4you@gmail.com</a>
          </div>
          <div className={styles.topbar_social}>
  
            
  
              <>
                <Link className={styles.topbar_links} to="/sign-in">
                  Login
                </Link>
                <Link className={styles.topbar_links} to="/sign-up">
                  Register
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
    </> 
    );
}
