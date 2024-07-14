import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Birdr</h1>
                </Link>
                <Link to="/library">
                    <h1>Library</h1>
                </Link>

            </div>
        </header>
    )
}

export default Navbar