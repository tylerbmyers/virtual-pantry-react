import React from 'react';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';

const Homepage = () => (
  <div className='homepage-component'>
    <div className='header-content'>
      <h1>Virtual Pantry</h1>
      <p>
        Have you ever had trouble keeping track of what ingredients you have?
      </p>
      <p>
        Great news! Virtual Pantry can help you track all of the food you have
        on hand, store your recipes, and easily create a shopping list based on
        what you don't have yet!
      </p>
    </div>
    <div className='card-container'>
      <Link to='/pantry' className='card'>
        <div className='title'>Pantry</div>
        <div className='description'>View your virtual pantry</div>
      </Link>
      <Link to='/recipes' className='card'>
        <div className='title'>Recipes</div>
        <div className='description'>View your saved recipes</div>
      </Link>
      <Link to='/shopping-list' className='card'>
        <div className='title'>Shopping List</div>
        <div className='description'>View your saved shopping list</div>
      </Link>
    </div>
  </div>
);

export default Homepage;
