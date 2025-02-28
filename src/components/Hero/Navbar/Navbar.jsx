import React from 'react'
import NavLogo from '../../../assets/Images/hackindia-nav.png'
import { Link } from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className="nav-bar">
        <div className="container">
           <div className="nav-inner">
           <div className="nav-logo">
                <span className='nav-img'>
                    <img src={NavLogo} alt="Hackindia" width="40px"/>
                </span>
                HackIndia
            </div>
            <nav>
                <div className="hamburger" onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="37" viewBox="0 0 66 37" fill="none">
                        <path className='cover-svg' d="M43.3463 3.94392L43.2045 4.20588H42.9066H0.499996V31.0983L3.1335 35.5H56.5V0.5H45.2107L43.3463 3.94392Z" fill="#D9D9D9" fill-opacity="0.05" stroke="#B026FF"/>
                        <path className="right-svg" d="M63.4991 32.6184H65.65V35.69H60.0977V0.350033H65.65V24.1193L63.3042 25.6916L63.1491 25.7956V25.9824V32.2684V32.6184H63.4991Z" stroke="#B026FF" stroke-width="0.7"/>
                        <path d="M11 12H43V14H11.8174L11 12Z"  className='line-svg' fill="#E3B1FF"/>
                        <path d="M11 19H43V21H11.5L11 19Z" className='line-svg' fill="white"/>
                        <path d="M11 19H43V21H11.5L11 19Z" className='line-svg' fill="#E3B1FF"/>
                        <path d="M11 26H43V28H11.5L11 26Z"  className='line-svg' fill="white"/>
                        <path d="M11 26H43V28H11.5L11 26Z"  className='line-svg' fill="#E3B1FF"/>
                        </svg>
                </div>
                <div className={`menu-wrapper ${isOpen ? "open" : ""}`}>
                    <div className="close">
                        X
                    </div>
                <ul>
                        <li>
                            <Link to="/">
                                <div className="svg-button menu-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="134" height="42" viewBox="0 0 134 42" fill="none">
                                        <path className="content-svg" d="M50.2926 4.74861L50.4136 4.82353H50.5559H133.5V36.1582L124.52 41.5H9.5V0.5H43.4322L50.2926 4.74861Z" fill="#D9D9D9" fill-opacity="0.05" stroke="#B026FF"/>
                                        <path className="svg-left" d="M2.50093 37.9547H0.35V41.65H5.90233V0.350002H0.35V28.1549L2.71638 30.0032L2.85093 30.1083V30.2791V37.6047V37.9547H2.50093Z" stroke="#B026FF" stroke-width="0.7"/>
                                    </svg>
                                    <div className="svg-content">
                                    Overview
                                    </div>
                                </div>
                            </Link>
                        </li>        
                        <li>
                            <Link to="/">   
                                <div className="svg-button menu-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="134" height="42" viewBox="0 0 134 42" fill="none">
                                        <path className="content-svg" d="M50.2926 4.74861L50.4136 4.82353H50.5559H133.5V36.1582L124.52 41.5H9.5V0.5H43.4322L50.2926 4.74861Z" fill="#D9D9D9" fill-opacity="0.05" stroke="#B026FF"/>
                                        <path className="svg-left" d="M2.50093 37.9547H0.35V41.65H5.90233V0.350002H0.35V28.1549L2.71638 30.0032L2.85093 30.1083V30.2791V37.6047V37.9547H2.50093Z" stroke="#B026FF" stroke-width="0.7"/>
                                    </svg>
                                    <div className="svg-content">
                                    Create Team
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/"> 
                                <div className="svg-button menu-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="186" height="42" viewBox="0 0 186 42" fill="none">
                                        <path className="content-svg" d="M67.7598 5.93854L67.8721 6H68H185.5L185.5 35.2395L172.672 40.5H9.5V0.5H57.8295L67.7598 5.93854Z" fill="#D9D9D9" fill-opacity="0.05" stroke="#B026FF"/>
                                        <path className="svg-left" d="M2.50093 37.9547H0.35V41.65H5.90233V0.350002H0.35V28.1549L2.71638 30.0032L2.85093 30.1083V30.2791V37.6047V37.9547H2.50093Z" stroke="#B026FF" stroke-width="0.7"/>
                                    </svg>
                                    <div className="svg-content">
                                        Prizes & Sponsores
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/"> 
                                <div className="svg-button menu-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="134" height="42" viewBox="0 0 134 42" fill="none">
                                        <path className="content-svg" d="M50.2926 4.74861L50.4136 4.82353H50.5559H133.5V36.1582L124.52 41.5H9.5V0.5H43.4322L50.2926 4.74861Z" fill="#D9D9D9" fill-opacity="0.05" stroke="#B026FF"/>
                                        <path className="svg-left" d="M2.50093 37.9547H0.35V41.65H5.90233V0.350002H0.35V28.1549L2.71638 30.0032L2.85093 30.1083V30.2791V37.6047V37.9547H2.50093Z" stroke="#B026FF" stroke-width="0.7"/>
                                    </svg>
                                    <div className="svg-content">
                                    FAQs
                                    </div>
                                </div>
                            </Link> 
                        </li>
                        <li>
                            <Link to="/"> 
                                <div className="svg-button menu-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="186" height="42" viewBox="0 0 186 42" fill="none">
                                        <path className="content-svg" d="M67.7598 5.93854L67.8721 6H68H185.5L185.5 35.2395L172.672 40.5H9.5V0.5H57.8295L67.7598 5.93854Z" fill="#D9D9D9" fill-opacity="0.05" stroke="#B026FF"/>
                                        <path className="svg-left" d="M2.50093 37.9547H0.35V41.65H5.90233V0.350002H0.35V28.1549L2.71638 30.0032L2.85093 30.1083V30.2791V37.6047V37.9547H2.50093Z" stroke="#B026FF" stroke-width="0.7"/>
                                    </svg>
                                    <div className="svg-content">
                                        Judging & Rules
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/"> 
                                <div className="svg-button menu-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="134" height="42" viewBox="0 0 134 42" fill="none">
                                        <path className="content-svg" d="M50.2926 4.74861L50.4136 4.82353H50.5559H133.5V36.1582L124.52 41.5H9.5V0.5H43.4322L50.2926 4.74861Z" fill="#D9D9D9" fill-opacity="0.05" stroke="#B026FF"/>
                                        <path className="svg-left" d="M2.50093 37.9547H0.35V41.65H5.90233V0.350002H0.35V28.1549L2.71638 30.0032L2.85093 30.1083V30.2791V37.6047V37.9547H2.50093Z" stroke="#B026FF" stroke-width="0.7"/>
                                    </svg>
                                    <div className="svg-content">
                                    Resoures
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
           </div>
        </div>
    </div>
  )
}

export default Navbar