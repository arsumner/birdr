import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import birdr from '../images/birdr.jpg'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <img src={birdr} alt="Birdr Logo" className="navbar-logo"/> 
                </Link>
                <nav>
                {!user && (
                    <div className="auth-links">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                )}
                {user && (
                    <div className='authenticated'>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Logout</button>
                    </div>
                )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar