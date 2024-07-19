import { useState } from "react"
import { useBirdsContext } from '../hooks/useBirdsContext'
import { useAuthContext } from "../hooks/useAuthContext"

const BirdForm = () => {
    const { dispatch } = useBirdsContext()
    const { user } = useAuthContext()
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [count, setCount] = useState('')
    const [notes, setNotes] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        // check if there is a user logged in
        if (!user) {
            setError('You must be logged in.')
            return
        }

        const bird = {name, location, count, notes}

        const response = await fetch('/api/birds', {
            method: 'POST',
            body: JSON.stringify(bird),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setName('')
            setLocation('')
            setCount('')
            setNotes('')
            setError(null)
            setEmptyFields([])
            console.log('New Bird Added', json)
            dispatch({type: 'CREATE_BIRD', payload: json})
        }
    }

    return (
        <form className="create-bird-form" onSubmit={handleSubmit}>
            <h3> Add a New Bird</h3>
            <label>Bird Name:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={emptyFields.includes('name') ? 'error' : ''}
            />

            <label>Location:</label>
            <input
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                className={emptyFields.includes('location') ? 'error': ''}
            />

            <label>Number of birds seen:</label>
            <input
                type="number"
                onChange={(e) => setCount(e.target.value)}
                value={count}
                className={emptyFields.includes('count') ? 'error': ''}
            />

            <label>Notes:</label>
            <input
                type="text"
                onChange={(e) => setNotes(e.target.value)}
                value={notes}
            />

            <button>Add Bird</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default BirdForm