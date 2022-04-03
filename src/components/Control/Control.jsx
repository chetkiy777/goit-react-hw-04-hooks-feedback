import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Control = props => {

  const paramNames = Object.keys(props.params).splice(0,3)


  return (
      <div>
      {paramNames.map(param => 
        <button 
          key={param} 
          className={styles.btn} 
          onClick={() => props.incrementValue(param)}>
            {param}
        </button> )}
      </div>
  );
};

Control.propTypes = {
  incrementValue: PropTypes.func,
  params: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number
  })
};

export default Control;
