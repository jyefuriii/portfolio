import React from 'react';
import { LightMode } from '@mui/icons-material';
import '../Styles/Header.css';

function Header() {
  return (
    <div className='header'>
      <img className='header_logo' src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/portfolio_logo.png')} alt='header_logo'/>
      <div className='header_nav'>
        <div className='header_option'>
          Home
        </div>
        <div className='header_option'>
          About
        </div> 
        <div className='header_option'>
          Tech Stack
        </div>
        <div className='header_option'>
          Projects
        </div>
        <div className='header_option'>
          Contact
        </div>
        <div className='header_option'>
        <LightMode/>
        </div>
      </div>
    </div>
  )
}

export default Header
