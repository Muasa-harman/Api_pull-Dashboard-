import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import PersonAddDisabledOutlinedIcon from '@mui/icons-material/PersonAddDisabledOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Link } from 'react-router-dom';
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
         <div className='top'>
            <Link to="/" style={{textDecoration:"none"}}>
            <span className='logo'>lendsqr</span>
            </Link>
            </div>
            <hr/>
        <div className='center'>
            <ul>
            <li>
                    <WorkOutlinedIcon className='icon'/>
                    <span>Switch Organization</span>
                    <ArrowDropDownOutlinedIcon className='icon'/>
                    </li>
                <li>
                <Link to="/" style={{textDecoration:"none"}}>    
                    <HomeOutlinedIcon className='icon'/>
                    <span>Dashboard</span>
                    </Link>
                    </li>
                    <p className='title'>CUSTOMERS</p>
    
                    <Link to="/list" style={{textDecoration:"none"}}>
                    <li>
                        <PeopleOutlinedIcon className='icon'/>
                    <span>Users</span>
                    </li>
                    </Link>
                    <Link to="/products" style={{textDecoration:"none"}}>
                    <li>
                        <GroupsOutlinedIcon className='icon'/>
                    <span>Quarantors</span>
                    </li>
                    </Link>
                    <li>
                        <MonetizationOnOutlinedIcon className='icon'/>
                    <span>Loans</span>
                    </li>
                    <li>
                        <HandshakeOutlinedIcon className='icon'/>
                    <span>Decision Models</span>
                    </li>
                    <li>
                        <SavingsOutlinedIcon className='icon'/>
                    <span>Savings</span>
                    </li>
                    <li>
                        <RequestQuoteOutlinedIcon className='icon'/>
                    <span>Loan Request</span>
                    </li>
                    <li>
                        <HowToRegOutlinedIcon className='icon'/>
                    <span>Whitelist</span>
                    </li>
                    <li>
                        <PersonAddDisabledOutlinedIcon className='icon'/>
                    <span>Karma</span>
                    </li>
                    <p className='title'>BUSINESSES</p>
                    <li>
                        <BusinessCenterOutlinedIcon className='icon'/>
                    <span>Organisation</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className='icon'/>
                    <span>Loan Products</span>
                    </li>
                    <li>
                        <WorkOutlinedIcon className='icon'/>
                    <span>Organisation</span>
                    </li>
                    <li>
                        <RequestQuoteOutlinedIcon className='icon'/>
                    <span>Loan Products</span>
                    </li>
                    <li>
                        <StoreOutlinedIcon className='icon'/>
                    <span>Savings Products</span>
                    </li>
                    <li>
                        <DynamicFeedOutlinedIcon className='icon'/>
                    <span>Fees and Charges</span>
                    </li>
                    <li>
                        <ReceiptOutlinedIcon className='icon'/>
                    <span>Transactions</span>
                    </li>
                    <li>
                        <MiscellaneousServicesOutlinedIcon className='icon'/>
                    <span>Services</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className='icon'/>
                    <span>Service Account</span>
                    </li>
                    <li>
                        <CreditScoreOutlinedIcon className='icon'/>
                    <span>Settlements</span>
                    </li>
                    <li>
                        <AssessmentOutlinedIcon className='icon'/>
                    <span>Reports</span>
                    </li>
                    <p className='title'>SETTINGS</p>
                    <li>
                        <DisplaySettingsOutlinedIcon className='icon'/>
                    <span>Preferences</span>
                    </li>
                    <li>
                        <SyncAltOutlinedIcon className='icon'/>
                    <span>Fees and Pricing</span>
                    </li>
                    <li>
                        <TaskOutlinedIcon className='icon'/>
                    <span>Audit Logs</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon'/>
                    <span>Logout</span>
                    </li>
                </ul>
            </div>
        <div className='bottom'>
            {/* <div className='colorOption' onClick={()=>dispatch({type:"LIGHT"})}></div> */}
            {/* <div className='colorOption' onClick={()=>dispatch({type:"DARK"})}></div> */}
        </div>
    </div>
  )
}

export default Sidebar