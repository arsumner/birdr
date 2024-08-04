import { useBirdsContext } from "../hooks/useBirdsContext"
import { useNavigate } from 'react-router-dom'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from "../hooks/useAuthContext"

const BirdDetails = ({bird}) => {

    const { dispatch } = useBirdsContext()
    const navigate = useNavigate()
    const { user } = useAuthContext()

    const handleDeleteClick = async () => {
        if (!user) {
            return
        }
        const response = await fetch('/api/birds/' + bird._id, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_BIRD', payload: json})
        }
    }

    const handleUpdateClick = async () => {
        if (!user) {
            return
        }
        navigate(`/update/${bird._id}`)
    }
    

    return (
        <div className="bird-details">
            <h4>{bird.name}</h4>
            <p>Location: {bird.location}</p>
            <p>Number of birds seen: {bird.count}</p>
            <p>Notes: {bird.notes}</p>
            <p>{'Entry added: ' + formatDistanceToNow(new Date(bird.createdAt), { addSuffix: true})}</p>
            <div className="bird-actions">
            <button onClick={handleDeleteClick}>delete</button>
            <button onClick={handleUpdateClick}>update</button>
            </div>
        </div>
    )
}

export default BirdDetails