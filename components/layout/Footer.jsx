import React from 'react';
import styles from './Footer.module.css';
import { IoStorefrontOutline } from 'react-icons/io5';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

// Reusable component for the link columns in the bottom section
const FooterLinkColumn = ({ title, links }) => (
  <div className={styles.linkColumn}>
    <h4 className={styles.columnTitle}>{title}</h4>
    <ul>
      {links.map((link, index) => (
        <li key={index}><a href="#">{link}</a></li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const commonLinks = ['About Us', 'Information', 'Privacy Policy', 'Terms & Conditions'];

  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.column}>
            <div className={styles.logoContainer}>
              <div className={styles.logoIconWrapper}>
                <IoStorefrontOutline size={24} color="white" />
              </div>
              <span className={styles.logoText}>E-Comm</span>
            </div>
            <p className={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Since the 1500s, when an unknown printer.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Follow Us</h4>
            <p className={styles.description}>
              Since the 1500s, when an unknown printer took a galley of type and scrambled.
            </p>
            <div className={styles.socialIcons}>
              <a href="#"><FaFacebookF /></a><br />
              <a href="#"><FaTwitter /></a>
              
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact Us</h4>
            <p className={styles.description}>
              E-Comm, 4578 Marmora Road, Glasgow D04 89GR
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <FooterLinkColumn title="Information" links={commonLinks} />
          <FooterLinkColumn title="Service" links={commonLinks} />
          <FooterLinkColumn title="My Account" links={commonLinks} />
          <FooterLinkColumn title="Our Offers" links={commonLinks} />
          
        </div>
      </div>  
      
      {/* Copyright Bar */}
      <div className={styles.copyrightBar}>
        <div className={styles.container}>
            <span>2018 Ecommerce theme by www.bisenbaev.com</span>
            <img src="https://egysat.net/wp-content/uploads/2022/07/payment-icons-set-1.webp" alt="" height={50}/>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;