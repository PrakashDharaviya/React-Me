import React from 'react'
import Button from '../button/Button'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
        <h4 className={styles.logo}>Prakash</h4>
        <button className={styles.btn}>Click Me</button>
    </div>
  )
}
