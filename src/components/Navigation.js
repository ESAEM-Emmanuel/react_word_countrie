import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <div className='navigation'>
            {/* <NavLink to='/about' activeClassName = "nav-active">'A propos'</NavLink>   */}
            <NavLink to='/' className={({ isActive }) => (isActive ? 'nav-active' : '')}> Accueil </NavLink>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'nav-active' : '')}> A propos </NavLink>  
        </div>
    )
}

export default Navigation
