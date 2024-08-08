import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useBirdsContext } from '../hooks/useBirdsContext'
import { useAuthContext } from "../hooks/useAuthContext"

const UpdateBirdForm = () => {
    const { id } = useParams()
    const { dispatch } = useBirdsContext()
    const { user } = useAuthContext()
    const [count, setCount] = useState('')
    const [notes, setNotes] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const backendUrl = process.env.REACT_APP_BACKEND_URL
    useEffect(() => {
        const fetchBird = async () => {
            if (!user) {
                setError('You must be logged in to update bird details')
                return
            }

            try {
                const response = await fetch(`${backendUrl}/api/birds/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                })

                const json = await response.json()

                if (response.ok) {
                    setCount(json.count)
                    setNotes(json.notes)
                } else {
                    setError(json.error)
                }
            } catch (err) {
                setError('Failed to fetch bird details')
            }
        }

        fetchBird()
    }, [id, user])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in to update bird details')
            return
        }

        console.log('User token:', user.token)
        try {
            const response = await fetch(`/api/birds/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({ count, notes }),
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': 'application/json',
                },
            })

            const json = await response.json()

            if (!response.ok) {
                setError(json.error)
            } else {
                dispatch({ type: 'UPDATE_BIRD', payload: json })
                navigate('/library')
            }
        } catch (err) {
            console.error('Failed to update bird details:', err)
            setError('Failed to update bird details')
        }
    }

    return (
        <form className="update-form" onSubmit={handleSubmit}>
            <h3>UPDATE YOUR BIRD DETAILS</h3>
            <h4>Add to your bird count or change your field notes here.</h4>
            <label>Number of birds seen:</label>
            <input
                type="number"
                onChange={(e) => setCount(e.target.value)}
                value={count}
            />
            <label>Field Notes:</label>
            <input className="notes-update-box"
                type="text"
                onChange={(e) => setNotes(e.target.value)}
                value={notes}
            />
            <button>Update Bird Details</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default UpdateBirdForm
