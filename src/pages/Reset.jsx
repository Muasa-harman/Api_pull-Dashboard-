import React from 'react'
import './Reset.scss'
import { Toaster } from 'react-hot-toast'
// import { Link } from 'react-router-dom'

const Reset = () => {
  return (
    <div className='reset'>
        <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='wrapper'>
        <div className='right'>
        <h1 className='loginTitle'>Reset password </h1>
        <span> Enter new password</span>
        {/* <form> */}
          <input  type='password' placeholder='password'/>
          <input  type='password' placeholder='confirm_password'/>
          <button   className='submit1'>Reset</button>
        {/* </form> */}
      </div>
      </div>
    </div>
  )
}

export default Reset