import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LocalDining } from '@material-ui/icons';

import './header.styles.scss';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className='header-component'>
      <Link to='/'>
        <LocalDining className='logo' />
      </Link>
      <div className='links-container'>
        <Link
          to='/pantry'
          className={`header-button ${pathname === '/pantry' ? 'active' : ''}`}
        >
          Pantry
        </Link>
        <Link
          to='/recipes'
          className={`header-button ${pathname === '/recipes' ? 'active' : ''}`}
        >
          Recipes
        </Link>
        <Link
          to='/shopping-list'
          className={`header-button ${
            pathname === '/shopping-list' ? 'active' : ''
          }`}
        >
          Shopping List
        </Link>
        <Link
          to='/login'
          className={`header-button ${pathname === '/login' ? 'active' : ''}`}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
