import { Link } from 'react-router-dom';
import birdr from '../images/birdr.jpg';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-boxes">
                <div className='footer-box'>
                    <Link to="/">
                        <img src={birdr} alt="Birdr Logo" className="footer-logo" />
                    </Link>
                    <Link to="/">Home</Link>
                    <Link to="/search">Search our Database</Link>
                    <Link to="/library">My Bird Log</Link>
                </div>
                <div className="footer-box">
                    <Link to="https://nuthatch.lastelm.software/">Nuthatch API</Link>
                    <p>All of our search database information comes from Nuthatch API's public database. You can view the
                        Nuthatch API official site for documentation and usage guidelines.
                    </p>
                </div>
                <div className="footer-box">
                    <Link to="https://github.com/arsumner/birdr">GitHub</Link>
                    <p>Check out Birdr's source code on our GitHub repository.</p>
                </div>
            </div>
            <div className='copyright'>
                <h4>© 2024 Amanda Sumner</h4>
            </div>
        </div>
    );
}

export default Footer;
