import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

import Dropdown from './Dropdown'

function Nav () {
  return (
    <>
      <header className='bg-white font-sans flex flex-col items-center'>
        <div className='w-full px-4 py-3'>
          <div className='flex items-center justify-between'>
            <NavLink to='/'><img className='r' width='150' src='/images/Community.png' /></NavLink>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </div>
          <Dropdown />
        </div>
      </header>
    </>
  )
}

export default Nav
