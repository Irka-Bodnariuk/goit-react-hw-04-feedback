import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Box } from './Feedback.styled';

export default class Feedback extends Component {
  static total = null;
  static positiveFeetback = null;

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  handleClickGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handleClickNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleClickBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return (this.total = good + neutral + bad);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return (this.positiveFeetback = Math.ceil((good / this.total) * 100));
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleClickGood}>
          Good
        </button>
        <button type="button" onClick={this.handleClickNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleClickBad}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feetback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}
