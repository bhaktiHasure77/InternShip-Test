import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <section>
    <aside className={styles.sidebar}>
      <div className={styles.filterSection}>
        <h3 className={styles.title}>Hot Deals</h3>
        <ul className={styles.filterList}>
          <li className={styles.active}>Nike <span>24</span></li>
          <li>All Brands <span>49</span></li>
          <li>Adidas <span>15</span></li>
          <li>Vans <span>21</span></li>
          <li>All Stars <span>55</span></li>
        </ul>
      </div>
    
      <div className={styles.filterSection}>
        <h3 className={styles.title}>Prices</h3>
        <input type="range" min="10" max="500" defaultValue="250" className={styles.priceSlider} />
        <div className={styles.priceRange}>
          <span>Range:</span>
          <span>$10 - $500</span>
        </div>
      </div>

      <div className={styles.filterSection}>
        <h3 className={styles.title}>Color</h3>
        <div className={styles.colorSwatches}>
          <span className={styles.color} style={{ backgroundColor: '#0000FF' }}></span>
          <span className={styles.color} style={{ backgroundColor: '#FF0000' }}></span>
          <span className={styles.color} style={{ backgroundColor: '#000000' }}></span>
          <span className={styles.color} style={{ backgroundColor: '#FFFF00' }}></span>
          <span className={styles.color} style={{ backgroundColor: '#008000' }}></span>
          <span className={styles.color} style={{ backgroundColor: '#FFA500' }}></span>
        </div>
      </div>

      
      <div className={styles.filterSection}>
                    <h3 className={styles.title}>BRAND</h3>
                     <ul className={styles.filterList}>
                        <li>Nike <span>99</span></li>
                        <li>Nike <span>99</span></li>
                        <li>Adidas <span>99</span></li>
                        <li>Siemens <span>99</span></li>
                    </ul>
                </div>
                <button className={styles.moreButton}>MORE</button>
    </aside>
    
    </section>
    
  );
};

export default Sidebar;