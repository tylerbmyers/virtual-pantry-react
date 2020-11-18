import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../../pages/homepage/homepage.component';
import Login from '../../pages/login/login.component';
import Pantry from '../../pages/pantry/pantry.component';
import Recipes from '../../pages/recipes/recipes.component';
import ShoppingList from '../../pages/shopping-list/shopping-list.component';
import Header from '../Header/header.component';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/pantry' component={Pantry} />
        <Route exact path='/recipes' component={Recipes} />
        <Route exact path='/shopping-list' component={ShoppingList} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
};

export default App;
