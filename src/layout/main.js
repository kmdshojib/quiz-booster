import React from 'react'
import { Outlet } from 'react-router-dom'

// importing Header
import Header from '../components/Header/header'

const Main = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default Main