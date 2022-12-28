import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';
import {Link, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'
import Navbar from './Navbar';


function Header() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {client} = useSelector((state) => state.auth)

    const onLogout = () => {
     dispatch(logout())
     dispatch(reset())
     navigate('/')

     
 }
  return (
    <header className='header'>
        
        {/* Hamburger Menu */}
        <Navbar />

        <div className="wrapper">
            <nav className='header-nav'>

                <div className="header-nav__left">
                    <ul>
                        <li className='nav-link'><Link to="/">Home</Link></li>
                        <li className='nav-link'><Link to="/about">About</Link></li>
                        <li className='nav-link'><Link to="/blog">Blog</Link></li>
                        <li className='nav-link'><Link to="/breed">Breed info</Link></li>
                        {client && <li className='nav-link'>  <Link to="/reports">Reports</Link></li>}
                    </ul>
                </div>

                <div className="header-nav__right">
                    <ul>
                        {client ? (
                            <li>
                                <button className="btn" onClick={onLogout}>
                                    <FaSignOutAlt /> Logout
                                    </button>
                            </li>
                        ) : (
                        <>
                        <li><Link to="/login">
                            <FaSignInAlt /> Login
                        </Link>
                        </li>
                        <li><Link to="/register">
                            <FaUser /> Register
                        </Link>
                        </li>
                        </>)}

                    </ul>
                </div>
            
            </nav>
        </div>
    </header>
  )
}

export default Header