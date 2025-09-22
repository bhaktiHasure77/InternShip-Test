import React from 'react';
import styles from './ProductCard.module.css';
import { BsStarFill, BsStarHalf, BsCartPlus, BsHeart, BsStar } from 'react-icons/bs';

// Pass product data as props
const ProductCard = ({ product }) => {
  const { image, name, originalPrice, discountedPrice, tag } = product;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.productImage} />
        {tag && <span className={styles.tag}>{tag}</span>}      
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.productName}>{name}</h3>
        <div className={styles.rating}>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStar />
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.discountedPrice}>${discountedPrice}</span>
          <span className={styles.originalPrice}>${originalPrice}</span>
          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;