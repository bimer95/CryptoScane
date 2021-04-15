import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    
    return (
        <header className={classes.header}>
            <img src='https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=010' />
            <button >
                <NavLink to="/top" activeClassName={classes.activeLink}>Top</NavLink>
               {/*  <input type='text' placeholder='Search'
          className='coin-input' onChange={props.handleChange}/> */}
            </button>
        </header>

    )

}



export default Header;