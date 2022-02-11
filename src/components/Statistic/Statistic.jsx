import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Statistic = ({ good, neutral, bad, total, positiveFeedBack }) => {
  return (
    <div className={styles.statistic}>
      <label className={styles.label}>
        Good: <span>{good}</span>
      </label>

      <label className={styles.label}>
        Neutral: <span>{neutral}</span>
      </label>

      <label className={styles.label}>
        Bad: <span>{bad}</span>
      </label>

      <label className={styles.label}>
        Total: <span>{total}</span>
      </label>

      <label className={styles.label}>
        positive Feedback: <span>{positiveFeedBack.toFixed(2)}%</span>
      </label>
    </div>
  );
};

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedBack: PropTypes.number,
};

export default Statistic;
