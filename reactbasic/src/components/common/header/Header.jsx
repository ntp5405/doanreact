import React, { useState } from "react"
import Cookies from 'js-cookie';
import Head from "./Head"
import "./header.css"
import { Link, useNavigate } from "react-router-dom"

const Header = () => {
    const [navbar, setnavbar] = useState(false)
    const token = Cookies.get('token');
    const user = JSON.parse(localStorage.getItem('user'));
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('user');
        Cookies.remove('token');
        navigate('/Login');
    }
    return (
        <>
            <Head />
            <header>
                <div className='container paddingSmall'>
                    <nav className='navheader'>
                        <ul className={navbar ? "navbar" : "flex"} onClick={() => setnavbar(false)}>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/culture'>Culture</Link>
                            </li>
                            <li>
                                <Link to='/politics'>Politics</Link>
                            </li>
                            <li>
                                <Link to='/memes'>Memes</Link>
                            </li>
                            <li>
                                <Link to='/sports'>Sports</Link>
                            </li>
                            <li>
                                <Link to='/boxed'>Boxed</Link>
                            </li>
                            <li>
                                <Link to='/reviews'>Reviews</Link>
                            </li>
                        </ul>

                        {token ? (
                            <div className="actionLogined">{user.name}
                                <ul className="actioned">
                                    <li ><Link to='/UserProfile'>Profie</Link></li>
                                    <li onClick={handleLogout}>Logout</li>
                                </ul>
                            </div>
                        ) : (
                            <ul className="action">
                                <li><Link to='/Login'>Login</Link></li>
                                <li><Link to='/Register'>Register</Link></li>
                            </ul>
                        )}
                        <button className='barIco' onClick={() => setnavbar(!navbar)}>
                            {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                        </button>

                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header