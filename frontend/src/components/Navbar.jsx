import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
          const [showNav, setShowNav] = useState(true);

          


    const {client} = useSelector((state) => state.auth)

  return (
    <>
        <div className='nav-toggle' onClick={() => setShowNav((prev) => !prev)}><GiHamburgerMenu /></div>
            {showNav ? (<nav className='navbar' showNav={showNav}>
            <ul className='navbar-links'>
                <li><Link to="/" onClick={() => setShowNav((prev) => !prev)}>Home</Link></li>
                <li><Link to="/about" onClick={() => setShowNav((prev) => !prev)}>About</Link></li>
                <li><Link to="/blog" onClick={() => setShowNav((prev) => !prev)}>Blog</Link></li>
                <li><Link to="/breed" onClick={() => setShowNav((prev) => !prev)}>Breed info</Link></li>
                <li>  {client && <Link to="/reports" onClick={() => setShowNav((prev) => !prev)}>Reports</Link>}</li>
            </ul>

        </nav>) : null}
        
    </>


  )
}

export default Navbar