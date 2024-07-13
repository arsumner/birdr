import { useState } from "react"

const BirdForm = () => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [count, setCount] = useState('')
    const [notes, setNotes] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const bird = {name, location, count, notes}

        const response = await fetch('/api/birds', {
            method: 'POST',
            body: JSON.stringify(bird),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setName('')
            setLocation('')
            setCount('')
            setNotes('')
            setError(null)
            console.log('New Bird Added', json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3> Add a New Bird</h3>
            <label>Bird Name:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <label>Location:</label>
            <input
                type="number"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
            />

            <label>Number of birds seen:</label>
            <input
                type="number"
                onChange={(e) => setCount(e.target.value)}
                value={count}
            />

            <label>Notes:</label>
            <input
                type="text"
                onChange={(e) => setNotes(e.target.value)}
                value={notes}
            />
        </form>
    )
}

export default BirdForm