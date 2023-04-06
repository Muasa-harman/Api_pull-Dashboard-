import React from 'react'
import './Info.scss'
import { Avatar } from '@mui/material'

const Info = () => {
  return (
    <div className='info'>
      <div className='userProfile'>
        <div className='profile'>
            <Avatar className='icon'/>
            <div className='username'>
            <h3>Grace Effiom</h3>
            <p>LSQF1687g90</p>
            </div>
        </div>
        <div className='underline1'></div>
        <div className='center'>
        <span>User's Tier</span>
        <p>***</p>
        <div className='underline2'></div>
        </div>
        <div className='right'>
          <span>$200,000.00</span>
          <p>9912345678/Providus Bank</p>
        </div>
        </div>
        <div className='bottom'>
          <ul>
            <li>General Details</li>
            <li>Documents</li>
            <li>Bank Details</li>
            <li>Loans</li>
            <li>Savings</li>
            <li>App and System</li>
          </ul>
        </div>
    </div>
  )
}

export default Info