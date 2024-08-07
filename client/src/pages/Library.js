import { useEffect } from 'react'
import { useBirdsContext } from '../hooks/useBirdsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import libraryImage from '../images/library.png'

// components
import BirdDetails from '../components/birdDetails'
import BirdForm from '../components/birdForm'

const Library = () => {
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
        <div>
            <div className='library-header-container'>
                <h3>Bird Log</h3>
                <p>Create your own digital logbook for birds you have seen!</p>
                <p>Add birds by entering bird name, location seen, your bird count for this species, and optionally enter any notes. You can delete entries for species you log at any time. Click update to change a species' count and edit notes.</p>
            </div>
            <a href="#logbook-header">
                <img src={libraryImage} alt="Library Image" className="library-image" />
            </a>
            <BirdForm />
            <div className='library-header-container' id="logbook-header">
                <h3>Your Logbook</h3>
                <p>Add or edit details of your encounters and observations.</p>
            </div>
            <div className="birds">
                {birds && birds.map((bird) => (
                    <BirdDetails key={bird._id} bird={bird}/>
                ))
                }
            </div>
        </div>
    )
}

export default Library
