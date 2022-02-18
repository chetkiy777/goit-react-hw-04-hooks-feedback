import React, { useState } from 'react';
import Control from './Control/Control';
import Section from './Section/Section';
import Statistic from './Statistic/Statistic';
import Notification from './Notification/Notification';

export const App = () => {
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);
  let [total, setTotal] = useState(0);
  let [positiveFeedBack, setPositiveFeedback] = useState(0);

  const incrementGood = () => {
    setGood((good += 1));
    summTotal();
    calcPositive();
  };

  const incrementNeutral = () => {
    setNeutral((neutral += 1));
    summTotal();
    calcPositive();
  };

  const incrementBad = () => {
    setBad((bad += 1));
    summTotal();
    calcPositive();
  };

  const summTotal = () => {
    let calcTotal = good + neutral + bad;
    setTotal(calcTotal);
  };

  const calcPositive = () => {
    let calculate = (good / total) * 100;
    setPositiveFeedback(calculate);
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
