'use client'
import { useState } from 'react';
import styles from './Table.module.css';

const ITEMS_COUNT = 95;
const DATA_COUNT = 20;

export default function Table() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsCount = Math.ceil(ITEMS_COUNT / DATA_COUNT);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getDataCount = (page) => {
    const remainingItems = ITEMS_COUNT - (page * DATA_COUNT);
    return remainingItems < DATA_COUNT ? remainingItems : DATA_COUNT;
  };

  return (
    <div className={styles.card}>
      <div className={styles.tableTitle}>
        <h2>CSS ONLY TABLE</h2>
      </div>
      <div className={styles.buttonContainer}>
        <span>These buttons aren't working</span>
        <button className={styles.danger} title="Delete Selected">
          <svg viewBox="0 0 448 512" width="16">
            <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
          </svg>
        </button>
        <button className={styles.primary} title="Add New Data">
          <svg viewBox="0 0 512 512" width="16">
            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" />
          </svg>
        </button>
      </div>
      <TableContent currentPage={currentPage} dataCount={getDataCount(currentPage)} />
      <Pagination itemsCount={itemsCount} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}

function TableContent({ currentPage, dataCount }) {
  let counter = currentPage * DATA_COUNT + 1;
  if (counter === null || typeof ITEMS_COUNT === 'undefined' || typeof dataCount === 'undefined') {
    return null; // Avoid rendering until all values are defined
  }
  return (
    <div className={styles.tableConcept}>
      <div className={styles.tableDisplay}>Showing {counter} to {counter + dataCount - 1} of {ITEMS_COUNT} items </div>
      <input className={styles.tableRadio} type="radio" name="table_radio" id="table_radio_0" checked="checked"></input>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>No</th>
            <th>FIRST HEADER</th>
            <th>SECOND HEADER</th>
            <th>THIRD HEADER</th>
            <th>FOURTH HEADER</th>
            <th>FIFTH HEADER</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: dataCount }).map((_, idx) => (
            <tr key={idx}>
              <td><input type="checkbox" /></td>
              <td>{counter}</td>
              <td>This is Item number 1-{counter}</td>
              <td>This is Item number 2-{counter}</td>
              <td>This is Item number 3-{counter}</td>
              <td>This is Item number 4-{counter}</td>
              <td>This is Item number 5-{counter}</td>
              {counter++}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Pagination({ itemsCount, currentPage, onPageChange }) {
  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >&laquo; Previous</button>
      {Array.from({ length: itemsCount }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onPageChange(idx)}
          className={currentPage === idx ? styles.active : ''}
        >{idx + 1}</button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === itemsCount - 1}
      >Next &raquo;</button>
    </div>
  );
}
