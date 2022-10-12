import React from 'react'
import {Container,Navbar} from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand to="/">Quiz Boost</Navbar.Brand>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink className="nav-link active" aria-current="page" to="/">Topics</NavLink>
                <NavLink className="nav-link" to="/statistics">Statistics</NavLink>
                <NavLink className="nav-link" to="">Blog</NavLink>
            </div>
            </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
