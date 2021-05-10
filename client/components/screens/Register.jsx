import React, { useState } from 'react'
import { registerUser, getUser } from '../../apis/passportapi'
import { setUser } from '../../actions/user'
import { connect } from 'react-redux'

// might have to change to camelCase
const initialForm = {
  first_name: '',
  last_name: '',
  username: '',
  password_hash: '',
  email: ''
}

function Register (props) {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')

  function handleChange (evt) {
    evt.preventDefault()
    setForm({
      ...form,
      [evt.target.name]: evt.target.value
    })
  }

  function handleSumbit (evt) {
    evt.preventDefault()
    registerUser(form)
      .then((result) => {
        setForm(initialForm)
        if (result === 'User Created') {
          // just return the promise and move the then block to below line 49, you would need to test to see if newUser exists before doing the dispatch/redirect
          // eslint-disable-next-line promise/no-nesting
          getUser()
            .then(newUser => {
              props.dispatch(setUser(newUser))
              props.history.push('/whatshappening')
              return null
            })
            .catch(err => {
              console.log(err.message)
              return null
            })
        } else {
          setError(result)
        }
        return null
      })
      .catch(err =>
        console.log(err.message))
  }
  return (
    <div className="signIn-page mt-16 mb-12">
      <div>
        <h2 className="text-center text-3xl leading-9 font-extrabold">Create Your Account</h2>
        {error && <h3 className="text-center text-red-700">Error: {error}</h3>}
        <form onSubmit={handleSumbit}>
          <div className="flex justify-center mt-4">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label className="block uppercase tracking-wide text-blue-400 text-xs font-bold mb-2" htmlFor="name">First Name</label>
              <input type="name" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" required name='first_name' onChange={handleChange} value={form.first_name}/>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label className="block uppercase tracking-wide text-blue-400 text-xs font-bold mb-2" htmlFor="name">Last Name</label>
              <input type="name" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" required name='last_name' onChange={handleChange} value={form.last_name} />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label className="block uppercase tracking-wide text-blue-400 text-xs font-bold mb-2" htmlFor="name">Username</label>
              <input type="name" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" required name='username' onChange={handleChange} value={form.username} />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label className="block uppercase tracking-wide text-blue-400 text-xs font-bold mb-2" htmlFor="email">Email</label>
              <input type="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" required name='email' onChange={handleChange} value={form.email} />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label className="block uppercase tracking-wide text-blue-400 text-xs font-bold mb-2" htmlFor="password">Password</label>
              <input type="password" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" required name='password_hash' onChange={handleChange} value={form.password_hash} />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <input type="checkbox" id="agree"/>
              <label className="block uppercase tracking-wide text-blue-400 text-xs font-bold mb-2" htmlFor="password">I agree to the terms and privacy</label>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button type="submit" className="group w-full lg:w-1/3 md:w-2/3 py-2 px-4 border border-transparent text-md leading-5 font-medium rounded-md text-white bg-blue-400 focus:outline-none focus:border-blue-400">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Register)
