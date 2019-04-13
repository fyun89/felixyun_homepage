import React, { Component } from 'react';
import Navigation from '../presentational/Nav';

class NavContainer extends Component {
  constructor() {
    super();
    this.state = {
      menus: ['About', 'Projects', 'Contact'],
    };
  }

  render() {
    const menu = this.state.menus;
    const id = 0;
    return <Navigation menu={menu} id={id} />;
  }
}

export default NavContainer;
