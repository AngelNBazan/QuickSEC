import React from 'react'
import Logo from '../imgs/logo.svg'
import styles from "../styles/Home.module.css"

export default function NavBar() {
  return (
    <nav className={styles.nav_wrapper}>
    <span className={styles.logo_span}>
      <Logo color="red"/>
    </span>
  </nav>  
  )
}
