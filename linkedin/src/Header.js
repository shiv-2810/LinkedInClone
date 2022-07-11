import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
function Header() {
  return (
    <div className='header'>
      <div className="header_left">
         <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

         <div className="header_search">
        <SearchIcon />
        <input type="text" />
         </div>
      </div>

      <div className="header_right">
      <HeaderOption Icon={HomeIcon} title='Home' />
      <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
      <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
      <HeaderOption Icon={ChatIcon} title='Messaging' />
      <HeaderOption Icon={NotificationsIcon} title='Notifications' />
      <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5603AQFFWqFItbnwrQ/profile-displayphoto-shrink_400_400/0/1625829322994?e=1663200000&v=beta&t=6YM8E6v-iCAKrbM1cn9Gommg2udrLD1fIP6phqVTwoQ" title='me' />
      </div>
    </div>
  )
}

export default Header