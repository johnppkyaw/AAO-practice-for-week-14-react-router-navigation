import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';

function App() {
  return (
    <div className='main'>
      <h1>App Component</h1>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName='purple' activeStyle={{ fontWeight: 'bold' }} exact={true} to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName='purple' activeStyle={{ fontWeight: 'bold' }} exact={true} to='/stocks'>Stocks</NavLink>
          </li>
          <li>
            <NavLink activeClassName='purple' activeStyle={{ fontWeight: 'bold' }} exact={true} to='/movies'>Movies</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/stocks'>
          <Stocks />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/not-logged-in'>
          <h1>You Must Be Logged In To Enter.</h1>
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
