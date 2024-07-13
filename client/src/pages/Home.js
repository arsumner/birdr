import { useState, useEffect} from 'react'

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
                    <p key={birds._id}>{bird.name}</p>
                ))
                }
            </div>
        </div>
    )
}

export default Home