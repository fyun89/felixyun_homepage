import React from 'react';
import propTypes from 'prop-types';

function Navigation({ menu, id }) {
  return (
    <div className='navContainer'>
      <ul className='nav flex-column'>
        {menu.map((e, i) => (<li className="nav-item" key={id + i}>
            <a className="nav-link active" href="#">{e}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;

Navigation.propTypes = {
  menu: propTypes.array.isRequired,
  id: propTypes.number.isRequired,
};
