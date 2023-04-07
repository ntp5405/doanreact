import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import './userprofile.css'

const UserProfile = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="user">
            <h1 className='profile'>Profile</h1>
            <form className='profileform'>

                <div className="contentform">

                    <div className="leftcontact">
                        <div className="form-group">
                            <p className='txt'>Name: {user.name}</p>



                        </div>
                        <div className="form-group">
                            <p className='txt'>E-mail: {user.email}</p>



                        </div>
                    </div>

                </div>
                {/* <button type="button" className="bouton-contact">EDIT</button> */}
            </form>
        </div>
    )
}

export default UserProfile