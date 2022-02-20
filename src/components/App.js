import React, { useState, useEffect } from 'react';
import Control from './Control/Control';
import Section from './Section/Section';
import Statistic from './Statistic/Statistic';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedBack, setPositiveFeedback] = useState(0);

  const incrementGood = () => {
    setGood(prevState => prevState + 1);
  };

  const incrementNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };

  const incrementBad = () => {
    setBad(prevState => prevState + 1);
  };

  useEffect(() => {
    summTotal();
    calcPositive();
  });

  const summTotal = () => {
    setTotal(good + neutral + bad);
  };

  const calcPositive = () => {
    setPositiveFeedback((good / total) * 100);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <Control
          incrementGood={incrementGood}
          incrementNeutral={incrementNeutral}
          incrementBad={incrementBad}
        />
      </Section>
      {total !== 0 ? (
        <Section title="Statistics">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedBack={positiveFeedBack}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
