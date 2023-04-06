import React from 'react'
import './UserDetails.scss'
import { Link } from 'react-router-dom'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const UserDetails = () => {
  return (
    <div className='userdetails'>
      <div className='top'>
        <div className='left'>
        <Link to="/list" style={{textDecoration:"none"}}>
                    <li>
                        <KeyboardBackspaceOutlinedIcon className='icon'/>
                    <span> Back to Users</span>
                    </li>
                    </Link>
                    <h3 className='title'>User Details</h3>
        </div>
        <div className='right'>
          <button className='btn-blacklist'>BLACKLIST USER</button>
          <button className='btn-active'>ACTIVATE USER</button>
        </div>
      </div>
    </div>
  )
}

export default UserDetails