import React from 'react'
import { Link } from 'react-router-dom'
import treeOne from '../images/tree1.png'
import treeTwo from '../images/tree2.png'


const Home = () => {
    return (
        <div className="home">
            <div className="image-container">
            <div className="image-text-wrapper">

                    <div className="top-text-box">
                        <h2>Welcome to Birdr, your ultimate birdwatching companion.</h2>
 
                    </div>
                </div>
                <div className="image-text-wrapper">
                    <div className="image-wrapper rounded-image">
                        <img src={treeOne} alt="Bird Image 1" className="large-image" />
                    </div>
                    <div className="text-area right-text">
                        <h3>Avian Database Search</h3>
                        <p>Search our database of over 1000 North American and European bird species. Powered by Nuthatch API's avian database, the Birdr
                            database provides information including taxonomical classification, wingspan, conservation status and even includes images for
                            select species. This tool is designed to make biredwatching more accessible and informative, helping you identify
                            birds you may encounter.
                        </p>
                        <Link to="/search" className="home-button">Search for a Bird</Link>
                    </div>
                </div>
                <div className="image-text-wrapper">
                    <div className="text-area left-text">
                    <h3>Manage your Avian Logbook</h3>
                        <p>Explore your own personal bird logbook, where you can document your encounters with avian species and the stories behind them.
                            Create new entries for your sightings and edit them at any time! Click below to access your comprehensive logbook and manage 
                            your bird sightings.
                        </p>
                        <Link to="/library" className="home-button">Go to your Bird Library</Link>
                    </div>
                    <div className="image-wrapper rounded-image right-image">
                        <img src={treeTwo} alt="Bird Image 2" className="large-image" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home
