import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Statistic = (props) => {

  const paramNames = Object.keys(props.params)

  return (
    <div className={styles.statistic}>
      {
        paramNames.map((param, index) => 
          <label
            key={index} 
            className={styles.label}>
              {param}: <span>{props.params[param]}</span>
          </label>)
      }
    </div>
  );
};

Statistic.propTypes = {
  params: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positiveFeedBack: PropTypes.any,
  })
  
};

export default Statistic;
