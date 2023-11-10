import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user'); //to check localstorage for user info
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear()//ckear user data from localstorage
        navigate('/signup');
    }
    return (//if auth ture(localsorage have data) then upper conditon 
        <div>
            <img 
            alt="logo"
            className='logo'
            src='https://www.360webdesigns.com/wp-content/uploads/2016/07/Services_ECommerce_v2-01.png'/>
            
                <ul className='nav-ul nav-right'>
                    <li><Link to="/Auth">Login/Sign Up</Link></li>
                    <li><Link to="/Profile"><img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'/></Link></li>
                </ul>
        
        </div>
    )
}
export default Nav;