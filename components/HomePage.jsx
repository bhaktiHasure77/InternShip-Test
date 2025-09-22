import React from 'react';
import Sidebar from './sidebar/Sidebar'; // Adjust path
import ProductGrid from './ProductGrid'; // Adjust path
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ProductGrid />
    </div>
  );
};

export default HomePage;