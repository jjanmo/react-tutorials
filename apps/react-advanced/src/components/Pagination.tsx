import { MouseEvent, useState } from 'react';
import styles from '../styles/Pagination.module.css';

interface Props {
  totalItems: number;
  itemsPerPage: number;
}

const Pagination = ({ totalItems, itemsPerPage }: Props) => {
  const totalPages = Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, index) => index + 1);
  const [currentPage, setCurrentPage] = useState(1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages.length;

  const handlePageClick = (e: MouseEvent<HTMLButtonElement>) => {
    const page = Number(e.currentTarget.textContent);
    setCurrentPage(page);
  };
  const handlePrevClick = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const handleNextClick = () => {
    if (currentPage === totalPages.length) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className={styles.container}>
      <button className={styles['action-button']} onClick={handlePrevClick} disabled={isFirstPage}>
        Previous
      </button>
      {totalPages.map((page, index) => (
        <button
          key={index}
          className={styles['page-button'] + (currentPage === page ? ` ${styles.selected}` : '')}
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
