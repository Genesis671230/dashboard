import React from 'react'
import "./User.css"
import avatar from  "../../images/train.png"
import {PermIdentity,CalendarToday,PhoneAndroid,MailOutline,LocationSearching, Publish} from '@mui/icons-material';
import {Link} from "react-router-dom"

export default function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
            <button className="userAddButton">create</button>
            </Link>
        </div>

        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src={avatar} alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Frankie</span>
                        <span className="userShowUserTitle">VR Designer</span>
                    </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">frankieal</span>
                        </div>
                        <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">12 11 2022</span>
                        </div>
                        
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">+1 651 545 2113</span>
                        </div>
                        <div className="userShowInfo">
                        <MailOutline className='userShowIcon'/>
                        <span className="userShowInfoTitle">frankieal@gmail.com</span>
                        </div>
                        
                        <div className="userShowInfo">
                        <LocationSearching className='userShowIcon'/>
                        <span className="userShowInfoTitle">NewYork | USA</span>
                        </div>  
                </div>
            </div>

            <div className="userUpdate">
                <span className="userUpdateTitle">Update</span>
                <form  className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label >Username</label>
                            <input type="text"
                            placeholder='Input your Username'
                            className='userUpdateInput'
                            />
                        </div>

                        <div className="userUpdateItem">
                            <label >Full Name</label>
                            <input type="text"
                            placeholder='Input your Full Name'
                            className='userUpdateInput'
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label >Email</label>
                            <input type="text"
                            placeholder='Input your Email'
                            className='userUpdateInput'
                            />
                        </div>

                        <div className="userUpdateItem">
                            <label >Phone Number</label>
                            <input type="text"
                            placeholder='Input your Phone Number'
                            className='userUpdateInput'
                            />
                        </div>


                        <div className="userUpdateItem">
                            <label >Address</label>
                            <input type="text"
                            placeholder='Input your Address'
                            className='userUpdateInput'
                            />
                        </div>
                    </div>

                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                             <img src={avatar} alt="" className="userUpdateImg" />
                             <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                             <input type="file"  id='file' style={{display: "none"}}/>
                        </div>
                        <button className="userUpdateButton">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>


    </div>
  )
}
