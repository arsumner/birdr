import React from 'react';
import { Link } from 'react-router-dom';
import note from '../images/note.png'; // Adjust the path as needed

const Home = () => {
    return (
        <div className="home">
            <div className="hero">
                <div>
                    <h1>Welcome to your Birdr account!</h1>
                    <p>Add and update your bird log in the library.</p>
                </div>
            </div>

            <div className="image-container">
                <div className="image-wrapper">
                    <img
                        src={note}
                        alt="Bird Image 1"
                        className="large-image"
                    />
                    <div className="overlay">
                        <p className="welcome-text">Welcome</p>
                        <Link to="/library" className="cta-button">Go to your Bird Library</Link>
                    </div>
                </div>
            </div>
            <p className="image-description">This is a description or additional information about the first bird.</p>
        </div>
    );
};

export default Home;
