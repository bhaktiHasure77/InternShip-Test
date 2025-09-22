import React from 'react';
import { IoStorefrontOutline } from 'react-icons/io5';
import { BsCart } from 'react-icons/bs';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Left Section: Logo */}
      <div className={styles.logoContainer}>
        <div className={styles.logoIconWrapper}>
          <IoStorefrontOutline size={24} color="white" />
        </div>
        <span className={styles.logoText}>E-Comm</span>
      </div>

      {/* Center Section: Navigation Links */}
      <div className={styles.navLinks}>
        <ul>
          {/* Add 'active' class for the current page */}
          <li className={styles.active}><a href="#">Home</a></li>
          <li><a href="#">Bag</a></li>
          <li><a href="#">Sneakers</a></li>
          <li><a href="#">Belt</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      {/* Right Section: Cart Info */}
      <div className={styles.cartContainer}>
        <BsCart size={22} /><br />
        <span className={styles.cartText}>items: $0.00</span>
      </div>
    </nav>
  );
};

export default Navbar;