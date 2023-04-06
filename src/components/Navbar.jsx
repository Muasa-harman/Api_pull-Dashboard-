import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import DropDown from './DropDown';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='search'>
                <input type='text' placeholder='Search for anything'/>
                <SearchOutlinedIcon className='icon1'/>
            </div>
            <div className='items'>
                <div className='item'>
                 <Link>Docs</Link>
                 </div>
                <div className='item'>
                 <NotificationsNoneOutlinedIcon className='icon'/>
                 <div className='counter'>1</div>
                </div>
                <div className='item'>
                 <ChatBubbleOutlineOutlinedIcon className='icon'/>
                 <div className='counter'>2</div>
                </div>
                <div className='item'>
                 <AccountCircleOutlinedIcon className='avatar'/>
                 <span className='username'>Adedeji</span>
                 <div className='dropdown'>
                 <button className='dropbtn'><ExpandMoreIcon className='icon'/></button>
                 <div class="dropdown-content">
                  <a href="/profile">Edit Name</a>
                   <a href="/auth">Change password</a>
                   <a href="/delete">Delete account</a>
                    <a href="/logout">Logout</a>
                   </div>
                 </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar