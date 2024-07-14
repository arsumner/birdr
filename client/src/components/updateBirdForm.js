import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBirdsContext } from '../hooks/useBirdsContext';

const UpdateBirdForm = () => {
    const { id } = useParams()
    const { dispatch } = useBirdsContext()
    const [count, setCount] = useState('')
    const [notes, setNotes] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchBird = async () => {
            const response = await fetch('/api/birds/' + id)
            const json = await response.json()

            if (response.ok) {
                setCount(json.count)
                setNotes(json.notes)
            } else {
                setError(json.error)
            }
        };

        fetchBird()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/birds/' + id, {
            method: 'PATCH',
            body: JSON.stringify({ count, notes }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        } else {
            setError(null)
            dispatch({ type: 'UPDATE_BIRD', payload: json })
            console.log('Bird updated', json)
            navigate('/')
        }
    };

    return (
        <form className="update-form" onSubmit={handleSubmit}>
            <h3>Update Bird Count</h3>
            <label>Number of birds seen:</label>
            <input
                type="number"
                onChange={(e) => setCount(e.target.value)}
                value={count}
            />
            <h3>Add Notes</h3>
            <label>Notes:</label>
            <input className="notes-update-box"
                type="text"
                onChange={(e) => setNotes(e.target.value)}
                value={notes}
            />
            <button>Update Bird Details</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default UpdateBirdForm
