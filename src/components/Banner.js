import React from 'react';
import styles from '../styles/Banner.module.css';

export default function Banner(props) {
  return (
    <div className={styles.banner}>
      <p>{props.msg}</p>
    </div>
  );
};
