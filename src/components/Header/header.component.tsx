import React from 'react';
import { Link } from 'react-router-dom';
import { LocalDining } from '@material-ui/icons';

import './header.styles.scss';

const Header = () => {
  return (
    <div className='header-component'>
      <Link to='/'>
        <LocalDining className='logo' />
      </Link>
      <div className='links-container'>
        <Link to='/pantry' className='header-button'>
          Pantry
        </Link>
        <Link to='/recipes' className='header-button'>
          Recipes
        </Link>
        <Link to='/shopping-list' className='header-button'>
          Shopping List
        </Link>
        <Link to='/login' className='header-button'>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
