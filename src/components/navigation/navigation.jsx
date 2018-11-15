import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <div className="nav-wrapper">
            <NavLink className="nav-item" activeClassName="selected" to="/" exact >Player</NavLink>
            <NavLink className="nav-item" activeClassName="selected" to="/users">Users</NavLink>
            <NavLink className="nav-item" activeClassName="selected" to="/albums">Albums</NavLink>
        </div>
    )
}
