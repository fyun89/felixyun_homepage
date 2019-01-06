import React from 'react';
// import PropTypes from 'prop-types';
import profileImage from '../../../assets/FelixYun close.jpg';

const imageCrop = {
  width: '100px',
  height: '100px',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '50%',
  display: 'inline',
  margin: '0 auto',
};

const MainPage = () => (
  <div className='mainPage'>
    <img
    className='profilePhoto'
    src={profileImage}
    style={imageCrop}
    />
    <div>
      <h1>Name: Felix Yun</h1>
      <h2>Software Engineer</h2>
    </div>
  </div>
);

export default MainPage;
