import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import MainPage from '../presentational/MainPage';

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      test: 'test',
    };
  }

  render() {
    return (
      <div>
        <MainPage test={this.state.test} />
      </div>
    );
  }
}

export default MainContainer;
