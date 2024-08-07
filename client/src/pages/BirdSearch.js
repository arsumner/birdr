import React, { useState } from 'react'

const SearchBirds = () => {
  const [query, setQuery] = useState('')
  const [birds, setBirds] = useState([])
  const [error, setError] = useState(null)

  const apiKey = 'fdeea49c-3005-440e-838c-bb88f837a96a'

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://nuthatch.lastelm.software/v2/birds?page=1&pageSize=100&name=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'API-Key': apiKey,
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()
      
      setBirds(data.entities || data.birds || [])
    } catch (error) {
      console.error('Error fetching bird data:', error)
      setError('Error fetching bird data.')
    }
  }

  return (
    <div className='search-container'>
      <h1>North American & European Bird Database</h1>
      <p>Search for any species using common name. All data is pulled from the Nuthatch Database, a public
        database that contains information for over 1000 different avian species. For more information about this
        database check out our site links at the bottom of the page. 
      </p>
      <h4>Bird Information Categories</h4>
      <p>Scientific Name: The Latin grammatical form of a species' name. In taxonomy, the scientific name, also
        known as the binomial nomenclature, gives each living organism two names - the genus and species name.
      </p>
      <p>Order: One of the eight major heirarchical taxonomic ranks classified between class and family. More than half
        of all birds belong to the order Passeriformes.
      </p>
      <p>Family: One of the eight major heirarchical taxonomic ranks classified between order and family.</p>
      <p>Status: The conservation status of a species.</p>
      <p>Region: Geographial area where the species is found.</p>
      <p>Length: The average size of the bird from the tip of its beak to the end of its tail.</p>
      <p>Wingspan: The distance from the tip of one wing to the tip of the other when the wings are fully extended.</p>

      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Enter common name (i.e. Sparrow)" 
      />
      <button onClick={handleSearch}>Search Birds</button>
      
      {error && <p>{error}</p>}
      
      <div className='bird-card-container'>
        {birds.map(bird => (
          <div key={bird.id} className='bird-card'>
            <h2>{bird.name}</h2>
            <p><strong>Scientific Name:</strong> {bird.sciName}</p>
            <p><strong>Order:</strong> {bird.order}</p>
            <p><strong>Family:</strong> {bird.family}</p>
            <p><strong>Status:</strong> {bird.status}</p>
            <p><strong>Region:</strong> {bird.region.join(', ')}</p>
            <p><strong>Length:</strong> {bird.lengthMin} - {bird.lengthMax} cm</p>
            <p><strong>Wingspan:</strong> {bird.wingspanMin} - {bird.wingspanMax} cm</p>
            {bird.images.length > 0 && (
              <div className='bird-card-images'>
                <h3>Images:</h3>
                {bird.images.map((image, index) => (
                  <img key={index} src={image} alt={bird.name} style={{ width: '400px', height: 'auto', marginRight: '30px' }} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchBirds