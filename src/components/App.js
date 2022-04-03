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

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        return;
      case 'neutral':
        setNeutral(state => state + 1);
        return;
      case 'bad':
        setBad(state => state + 1);
        return;
      default:
        return;
    }
  };

  const params = {
    good, neutral, bad, total, positiveFeedBack
  }

  useEffect(() => {
    summTotal();
    calcPositive();
  });

  const summTotal = () => {
    setTotal(good + neutral + bad);
  };

  const calcPositive = () => {
    setPositiveFeedback(((good / total) * 100).toFixed(0) + "%");
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <Control
          incrementValue={onLeaveFeedback}
          params={params}
        />
      </Section>
      {total !== 0 ? (
        <Section title="Statistics">
          <Statistic
            params={params}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
