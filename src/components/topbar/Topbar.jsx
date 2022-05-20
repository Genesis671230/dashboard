import React from 'react'
import "./Topbar.css"
import avatar from  "../../images/train.png"
import {NotificationsNone,Language,Settings} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">

            <div className="topLeft">
                <span className='logo'>EasyLife</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                <NotificationsNone/>
                <span className='topIconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                <Language/>
                <span className='topIconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                <Settings/>
                <span className='topIconBadge'>2</span>
                </div>
                <img src={avatar} alt="Alice" className='alice' />
                
            </div>
        </div>
    </div>
  )
}
