import React from 'react'
import './Dashboard.scss'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Widget from '../components/Widget'
import Datatable from '../components/Datatable'

const Dashboard = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='homeContainer'>
        <Navbar/>
          <div className='title'>
            <h1 className='title1'>Users</h1>
          </div>
        <div className='widgets'>
            <Widget type='user'/>
            <Widget type='active users'/>
            <Widget type='users with loans'/>
            <Widget type='users with savings'/>
        </div>
        <div className='listContainer'>
          <Datatable/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard