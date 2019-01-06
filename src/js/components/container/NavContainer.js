import React, { Component } from 'react';

class NavContainer extends Component {
  constructor() {
    super();
    this.state = {
      menus: ['About', 'Blog', 'Projects', 'Contact'],
    };
  }

  render() {
    const menu = this.state.menus;
    const id = 0;
    return (
      <div className='navContainer'>
        <ul className="nav flex-column">
          {
            menu.map((e, i) => (<li className="nav-item" key={id + i}>
                  <a className="nav-link active" href="#">{e}</a>
                </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default NavContainer;
