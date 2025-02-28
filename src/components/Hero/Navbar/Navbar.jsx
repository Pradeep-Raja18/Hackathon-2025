import React from 'react'
import NavLogo from '../../../assets/Images/hackindia-nav.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
        <div className="container">
            <div className="nav-logo">
                <span className='nav-img'>
                    <img src={NavLogo} alt="Hackindia" width="40px"/>
                </span>
            </div>
            <nav>
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
            </nav>
        </div>
    </div>
  )
}

export default Navbar