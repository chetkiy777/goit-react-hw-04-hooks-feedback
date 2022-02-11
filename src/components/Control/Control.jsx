import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Control = props => {
  return (
    <div>
      <div>
        <button className={styles.btn} onClick={props.incrementGood}>
          Good
        </button>
        <button className={styles.btn} onClick={props.incrementNeutral}>
          Neutral
        </button>
        <button className={styles.btn} onClick={props.incrementBad}>
          Bad
        </button>
      </div>
    </div>
  );
};

Control.propTypes = {
  incrementGood: PropTypes.func,
  incrementNeutral: PropTypes.func,
  incrementBad: PropTypes.func,
};

export default Control;
