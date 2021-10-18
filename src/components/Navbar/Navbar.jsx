import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';


const  Navbar = () => {
  return (
    <div>
        <div className={classes.item}>
            <NavLink to="/users">Users</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/useritem">useritem</NavLink>
        </div>
         
    </div>
  );
}

export default Navbar;