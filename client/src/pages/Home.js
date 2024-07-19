import { useEffect} from 'react'
import { useBirdsContext } from '../hooks/useBirdsContext'
import { useAuthContext } from '../hooks/useAuthContext'

// components
import BirdDetails from '../components/birdDetails'
import BirdForm from '../components/birdForm'

const Home = () => {
    const {birds, dispatch} = useBirdsContext()
    const {user} = useAuthContext()

    useEffect(() => {
        const fetchBirds = async () => {
            const response = await fetch('api/birds', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({type:'SET_BIRDS', payload: json})
            }
        }

        if (user) {
            fetchBirds()
        }
    }, [dispatch, user])

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