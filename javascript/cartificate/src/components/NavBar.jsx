import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav class="navbar" role="navigation">
        <div class="navbar-brand">
          <div class="navbar-start">
            <Link to="/" className="navbar-item">
              <p>CARtificate</p>
            </Link>
            <Link to="/update" className="navbar-item">
              <p>Add</p>
            </Link>
          </div>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">

          
        </div>
      </nav>
    </>
  )
}

export default NavBar