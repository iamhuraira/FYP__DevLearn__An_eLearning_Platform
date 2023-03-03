import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/footerlogo.png'
import insta from '../../assets/img/insta.png'
import fb from '../../assets/img/fb.png'
import twitter from '../../assets/img/twitter.png'

const Footer = () => {
    let url = {
        insta: 'https://www.instagram.com/',
        fb: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/'

    }
    return (
        <footer>
            <div className="footer-head">
                <div className="col">
                  <Link to='\'> <img src={logo} alt="" /></Link>
                    <div className='social-icons'>
                        <a href={url.fb}><img src={fb} alt="facebook" /></a>
                
                        <a href={url.insta}><img src={insta} alt="instagram" /></a>
                
                        <a href={url.twitter}><img src={twitter} alt="twitter" /></a>
                    </div>

                </div>
                <div className="col">
                    <h2>Packages</h2>
                    <span>
                        <Link to='\'>Free Access</Link>
                    </span>
                    <span>
                        <Link to='\'>Monthly</Link>
                    </span>
                    <span>
                        <Link to='\'>Yearly</Link>
                    </span>

                </div>
                <div className="col">
                    <h2>Links</h2>
                    <span>
                        <Link to='\'>Home</Link>
                    </span>
                    <span>
                        <Link to='\'>Pricing</Link>
                    </span>
                    <span>
                        <Link to='\'>Courses</Link>
                    </span>

                </div>
                <div className="col">
                    <h2>Social</h2>
                    <span>
                        <a href={url.fb}>Facebook</a>
                    </span>
                    <span>
                        <a href={url.insta}>Instagram</a>
                    </span>
                    <span>
                        <a href={url.twitter}>Twitter</a>
                    </span>
                </div>
            </div>
            <div className="footer-foot">
                <span>© 2023 DevLearn. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer