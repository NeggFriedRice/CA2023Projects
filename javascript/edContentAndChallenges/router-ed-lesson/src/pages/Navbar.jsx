import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {

  let activeNavStyle = {
    textDecorationColor: "green",
    textDecorationLine: "line-through"
  }


  return(
    <nav>
        <ul>
            <li>
                <NavLink to="/" style={({isActive}) => isActive ? activeNavStyle : undefined}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" end style={({isActive}) => isActive ? activeNavStyle : undefined}>About</NavLink>
            </li>
            <li>
              <NavLink to="/about/contact" style={({isActive}) => isActive ? activeNavStyle : undefined}>Contact</NavLink>
            </li>
        </ul>
    </nav>
)
}

export default Navbar