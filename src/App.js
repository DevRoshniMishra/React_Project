import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Layout/Navbar';
import NotFound from './Components/Pages/NotFound';
import AddUsers from './Components/Users/AddUsers';
import EditUser from './Components/Users/EditUser';
import ViewUsers from './Components/Users/ViewUsers';

import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/addusers' component={AddUsers} />
          <Route exact path='/viewusers/:id' component={ViewUsers} />
          <Route exact path='/editusers/:id' component={EditUser}  />
         
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
