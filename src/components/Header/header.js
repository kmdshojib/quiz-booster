import React from 'react'
import {Container,Navbar} from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand className='text-bold'><NavLink to="/">Quiz Booster</NavLink></Navbar.Brand>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink  className={({ isActive }) =>isActive ? "nav-link active text-decoration-underline text-bold" : "nav-link text-bold" }  to="/">Topics</NavLink>
                <NavLink className={({ isActive }) =>isActive ? "nav-link active text-decoration-underline text-bold" : "nav-link text-bold" } to="/statistics">Statistics</NavLink>
                <NavLink className={({ isActive }) =>isActive ? "nav-link active text-decoration-underline text-bold" : "nav-link text-bold" } to="/blog">Blog</NavLink>
            </div>
            </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
