import React from 'react';
import logo from '../../Images/logo.png'

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <img src={logo} alt=''/>
        </header>
    )
};


export default Header;
