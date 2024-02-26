import React, { useEffect } from 'react';
import styles from '../styles/Banner.module.css';

/**
 * Renders a banner component with a message and a close button.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.msg - The message to be displayed in the banner.
 * @param {Function} props.setSearchTerm - The function to be called when the banner is closed.
 * 
 * @returns {JSX.Element} The rendered banner component.
 */
export default function Banner(props) {
  /**
   * Handles the closing of the banner by resetting the search term.
   */
  function handleClosing() {
    props.setSearchTerm("");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClosing();
    }, 10000);

    return () => clearTimeout(timer);
  // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.banner}>
      <p>{props.msg}</p>
      <button className={styles.close_btn} onClick={handleClosing}>&#10761;</button>
    </div>
  );
};
