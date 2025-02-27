import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer-inner">
                <div className="copyright-detail">
                    Copyright <span>©</span> 2024 DcodeBlock
                </div>
                <div className="footer-menu">
                    <ul>
                        <li>
                            <Link to="/">Help Center</Link>
                        </li>
                        <li>
                            <Link to="/">Terms and Conditions</Link>
                        </li>
                        <li>
                            <Link to="/">Privacy policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer