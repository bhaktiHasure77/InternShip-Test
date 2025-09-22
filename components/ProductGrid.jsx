import React from 'react';
import ProductCard from './ProductCard';  
import Pagination from './Pagination';
import styles from './ProductGrid.module.css';
import { BsGrid3X3Gap, BsList } from 'react-icons/bs';


const mockProducts = [
  {
    id: 1,
    name: 'Nike Air Max 270 React',
    image: 'https://static.flexdog.com/flexdog-9/products/images/bad1f194-f0ce-4368-a327-0ef8bdad3159_imager.jpeg?width=828&quality=40',
    originalPrice: 299.43,
    discountedPrice: 299.43,
    discountPercent: 24,
    tag: 'HOT',
  },
  {
    id: 2,
    name: 'Nike Air Max 270 React',
    image: 'https://media.karousell.com/media/photos/products/2022/9/2/zara_animal_print_3in1_croco_b_1662096750_7e38026c_progressive.jpg',
    originalPrice: 325.50,
    discountedPrice: 295.43,
    discountPercent: 24,
    tag: 'HOT'
  },
  {
    id: 3,
    name: 'Nike Air Max 270 React',
    image: 'https://hips.hearstapps.com/hmg-prod/images/bandolera-portamovil-zara2-1580312154.jpg?resize=980:*',
    originalPrice: 534.33,
       discountedPrice: 299.43, 
       discountPercent: 24, 
    tag: 'HOT',
  },

    { 
      id: 4,
       name: 'Nike Air Max 270 React', 
      image: 'https://myreact.ru/storage/catalog/products/43/dZrkqp.jpg', 
      originalPrice: 534.33,
       discountedPrice: 299.43, 
       discountPercent: 24, 
       tag: 'HOT',
      },

    { 
      id: 5, 
      name: 'Nike Air Max 270 React', 
      image: 'https://m.media-amazon.com/images/I/71dAjD-46uL._UY900_.jpg', 
      originalPrice: 534.33,
      discountedPrice: 299.43, 
      discountPercent: 24, 
      tag: 'HOT',
     },
    {
       id: 6, 
      name: 'Nike Air Max 270 React', 
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ6UkjNlJXANCClT09uYFahLwzzBlnFSp5BvbwHCykcIEjEouTy', 
      originalPrice: 534.33,
       discountedPrice: 299.43, 
       discountPercent: 24, 
       tag: 'HOT',
      },
  
];

const ProductGrid = () => {
  return (
    <main className={styles.mainContent}>
      {/* Promotion Banner */}
      <div className={styles.promoBanner}>
        <div className={styles.bannerText}>
          <h2>Adidas Men Running Sneakers</h2>
          <p>Performance and design. Taken to the wild.</p>
          <a href="#" className={styles.shopNowBtn}>SHOP NOW</a>
        </div>
        <img src="https://demo.glthemes.com/elegant-shop-pro/wp-content/uploads/sites/16/2022/03/shoes-shoe-png-transparent-shoe-images-pluspng-17-1.png" alt="Running Sneaker" className={styles.bannerImage} />
      </div>
      
      {/* Filter/Sort Bar */}
      <div className={styles.filterBar}>
        
        <div className={styles.sortSection}>
          <span>13 Items</span>
          <label htmlFor="sort">Sort By:</label>
          <select id="sort" className={styles.sortDropdown}>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
           <label htmlFor="sort">Show</label>
          <select id="sort" className={styles.sortDropdown}>
            <option value="12">12</option>
            <option value="24">24</option>
          </select>   
        </div>
        <div className={styles.viewOptions}>
          <button className={styles.active}><BsGrid3X3Gap /></button>
          <button><BsList /></button>
        </div>
      </div>

      {/* Product Grid */}
      <div className={styles.grid}>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination currentPage={3} totalPages={5} />

    </main>
  );
};

export default ProductGrid;