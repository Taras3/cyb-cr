import React from 'react';
import classes from './App.module.css';
import './App.css';
import Header from './components/Header/Header';
import Users from './components/Users/Users';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import Useritem from './components/Useritem/Useritem';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
 
  return (
    <BrowserRouter>
      <div className="App">
         <Header />
         <Navbar />
         <Route path='/users' render={ () => <UsersContainer state={props.state} store={props.store}/> } />
         <Route path='/useritem' render={ () => <Useritem /> } />
      </div>
    </BrowserRouter>
  );
}

export default App;
