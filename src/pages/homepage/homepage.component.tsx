import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';

const Homepage = () => (
  <div className='homepage-component'>
    <div className='content'>
      <div className='title'>Welcome to the Virtual Pantry</div>
      <div className='button-container'>
        <Button variant='contained' className='homepage-button'>
          Sign Up/ Login
        </Button>
        <Link to='/recipes'>
          <Button variant='contained' className='homepage-button'>
            View Recipes
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default Homepage;
