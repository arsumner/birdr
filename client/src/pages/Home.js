import { useState, useEffect} from 'react'

// components
import BirdDetails from '../components/birdDetails'
import BirdForm from '../components/birdForm'

const Home = () => {
    const [birds, setBirds] = useState(null)

    useEffect(() => {
        const fetchBirds = async () => {
            const response = await fetch('api/birds')
            const json = await response.json()

            if (response.ok) {
                setBirds(json)
            }
        }

        fetchBirds()
    }, [])

    return (
        <div className= "home">
            <div className="birds">
                {birds && birds.map((bird) => (
                    <BirdDetails key={bird._id} bird={bird}/>
                ))
                }
            </div>
            <BirdForm/>
        </div>
    )
}

export default Home