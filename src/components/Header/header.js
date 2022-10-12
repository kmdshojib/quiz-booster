import React from 'react'
import {Container,Navbar} from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand><NavLink to="/">Quiz Boost</NavLink></Navbar.Brand>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink  className={({ isActive }) =>isActive ? "nav-link active text-decoration-underline" : "nav-link" }  to="/">Topics</NavLink>
                <NavLink className={({ isActive }) =>isActive ? "nav-link active text-decoration-underline" : "nav-link" } to="/statistics">Statistics</NavLink>
                <NavLink className={({ isActive }) =>isActive ? "nav-link active text-decoration-underline" : "nav-link" } to="/blog">Blog</NavLink>
            </div>
            </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
