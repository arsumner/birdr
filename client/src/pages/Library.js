import { useEffect} from 'react'
import { useBirdsContext } from '../hooks/useBirdsContext'

// components
import BirdDetails from '../components/birdDetails'
import BirdForm from '../components/birdForm'

const Library = () => {
    const {birds, dispatch} = useBirdsContext()

    useEffect(() => {
        const fetchBirds = async () => {
            const response = await fetch('api/birds')
            const json = await response.json()

            if (response.ok) {
                dispatch({type:'SET_BIRDS', payload: json})
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

export default Library