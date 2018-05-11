import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" exact={true} activeClassName="is-active">Go home</NavLink>
        <NavLink to="/create" exact={true} activeClassName="is-active">Create expense</NavLink>
        <NavLink to="/edit" exact={true} activeClassName="is-active">Edit expense</NavLink>
    </header>
);

export default Header;