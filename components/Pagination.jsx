import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={styles.paginationContainer}>
      <ul className={styles.pagination}>
        {pages.map((page) => (
          <li
            key={page}
            className={`${styles.pageItem} ${currentPage === page ? styles.active : ''}`}
          >
            <a href="#" className={styles.pageLink}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;