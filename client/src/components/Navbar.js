import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {
    const { logout } = useLogout()

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
                <div>
                    <button onClick={handleClick}>Logout</button>
                </div>
                <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar