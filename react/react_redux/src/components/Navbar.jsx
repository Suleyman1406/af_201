import React from 'react'
import "assets/navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/favorites'>Favorites</Link></li>
        </ul>
    )
}

export default Navbar