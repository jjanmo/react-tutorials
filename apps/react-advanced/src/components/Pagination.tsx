import { useState } from 'react';
import styles from '../styles/Pagination.module.css';

interface Props {
  pages?: number[];
}

const Pagination = ({ pages = [1, 2, 3] }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pages.length;

  const handlePageClick = () => {
    alert('Page clicked');
  };
  const handlePrevClick = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage === pages.length) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className={styles.container}>
      <button className={styles['action-button']} onClick={handlePrevClick} disabled={isFirstPage}>
        Previous
      </button>
      {pages.map((page, index) => (
        <button
          className={currentPage === page ? styles['selected-page-button'] : styles['page-button']}
          key={index}
          onClick={handlePageClick}
        >
          {page}
        </button>
      ))}
      <button className={styles['action-button']} onClick={handleNextClick} disabled={isLastPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
