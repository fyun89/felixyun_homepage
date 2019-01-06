import React, { Component } from 'react';
import NavContainer from './NavContainer';
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
        <NavContainer />
        <MainPage test={this.state.test} />
      </div>
    );
  }
}

export default MainContainer;
