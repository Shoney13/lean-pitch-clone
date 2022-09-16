import React from 'react'
import styles from './NavBar.module.css'
const NavBar = () => {
  return (
    <div className={`${styles.navbar_main}`}>
      {/* TODO: Add Logo */}
      <img src="" alt=""  className={`${styles.navbar_logo}`}/>
      <span className={`${styles.navbar_title}`}>
        Leanpitch
      </span>
      <button className={`${styles.navbar_button} ${styles.navbar_sub_button}`}>
        Subscribe
      </button>
      <button className={`${styles.navbar_button} ${styles.navbar_contact_button}`}>
        Contact Us
      </button>
    </div>
  )
}

export default NavBar