import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import { GlobalStyle } from './GlobalStyle';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <Feedback />
        <GlobalStyle />
      </div>
    );
  }
}
