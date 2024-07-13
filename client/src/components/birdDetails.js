const birdDetails = ({bird}) => {
    return (
        <div className="bird-details">
            <h4>{bird.name}</h4>
            <p>Location: {bird.location}</p>
            <p>Number of birds seen: {bird.count}</p>
            <p>Notes: {bird.notes}</p>
            <p>{bird.createdAt}</p>
        </div>
    )
}

export default birdDetails