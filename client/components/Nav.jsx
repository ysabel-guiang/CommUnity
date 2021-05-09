import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav () {
  return (
    <>
      <header className='flex flex-wrap p-5'>
        <div className='text-right object-right-top pr-4 py-2'>
          <NavLink to='/'><img className='tracking-wide' width='100' src='/images/OnlyLogo.png' /></NavLink>
          <NavLink to='/'><img className='tracking-wide' width='100' src='/images/CommUnity.png' /></NavLink>
          <NavLink to='signIn' className='ml-2 text-2xl uppercase tracking-wide text-blue-400 font-bold mb-2'>Login</NavLink>
          <NavLink to='register' className='ml-7 text-2xl uppercase tracking-wide text-blue-400 font-bold mb-2'>Register</NavLink>
        </div>
      </header>
    </>
  )
}

export default Nav
