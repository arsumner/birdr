import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

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
                    <h1>Birdr</h1>
                </Link>
                <Link to="/library">
                    <h1>Library</h1>
                </Link>
                <nav>
                {!user && (
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                )}
                {user && (
                    <div>
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