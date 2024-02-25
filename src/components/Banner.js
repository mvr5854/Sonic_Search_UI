import React, { useEffect } from 'react';
import styles from '../styles/Banner.module.css';

export default function Banner(props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClosing();
    }, 10000);

    return () => clearTimeout(timer);
  // eslint-disable-next-line
  }, []);

  function handleClosing() {
    props.setSearchTerm("");
  }

  return (
    <div className={styles.banner}>
      <p>{props.msg}</p>
      <button className={styles.close_btn} onClick={handleClosing}>&#10761;</button>
    </div>
  );
};
