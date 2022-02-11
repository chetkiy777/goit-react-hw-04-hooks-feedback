import React from 'react';
import Control from './Control/Control';
import Section from './Section/Section';
import Statistic from './Statistic/Statistic';
import Notification from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedBack: 0,
  };

  incrementGood = () =>
    this.setState({ good: this.state.good + 1 }, this.countTotalFeedback);
  incrementNeutral = () =>
    this.setState({ neutral: this.state.neutral + 1 }, this.countTotalFeedback);
  incrementBad = () =>
    this.setState({ bad: this.state.bad + 1 }, this.countTotalFeedback);
  countTotalFeedback = () =>
    this.setState(
      {
        total: this.state.good + this.state.neutral + this.state.bad,
      },
      this.countPositiveFeedbackPercentage
    );
  countPositiveFeedbackPercentage = () =>
    this.setState({
      positiveFeedBack: (this.state.good / this.state.total) * 100,
    });

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <Control
            incrementGood={this.incrementGood}
            incrementNeutral={this.incrementNeutral}
            incrementBad={this.incrementBad}
          />
        </Section>
        {this.state.total ? (
          <Section title="Statistics">
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positiveFeedBack={this.state.positiveFeedBack}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
