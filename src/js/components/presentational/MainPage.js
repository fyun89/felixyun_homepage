import React from 'react';
// import PropTypes from 'prop-types';
import profileImage from '../../../assets/FelixYun close.jpg';

const summary = <p>
    Felix is a self motivated full stack software engineer
    <br />
    with over six years of technical and cross-functional experience.
    <br />
    Having both a start up and large company experience, Felix can adapt
    <br />
    to various working environments and leverage the skills from the experience.
  </p>;

const MainPage = () => (
  <div className='mainPage'>
    <img
    className='profilePhoto'
    src={profileImage}
    />
    <div>
      <h1>Name: Felix Yun</h1>
      <h2>Software Engineer</h2>
    </div>
    <div>
      {summary}
    </div>
  </div>
);

export default MainPage;
