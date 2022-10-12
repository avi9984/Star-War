import { useEffect, useState } from 'react'
import StarwarsAPI from '../services/StarwarsAPI'
import { Link } from 'react-router-dom'
import NotFound from './NotFound'
import Loading from '../components/Loading'
import { getIdFromUrl } from '../helpers'

export default function Characters() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [error, setError] = useState(null)
  


  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true)
      
      try {
        const data = await StarwarsAPI.getCharacters(page)
        setCharacters(data)
        setLoading(false)
        setError(null)

      } catch (err) {
        setLoading(false)
        setError(err)
        console.log(err.message)
      }
    }

    fetchCharacters()
    
  }, [page])

  return (
    <>

      {loading && !error && <Loading />}

      {error && <NotFound />}

      <div className='d-flex flex-wrap justify-content-center'>
        {!loading && !error &&
          characters.results.map((character, index) => (
            <div 
            key={index} 
            className="card border-secondary text-white bg-primary m-3 col-md-2 col-sm-4 col-xs-12"
            >
              <div className="card-header d-flex justify-content-center">
                {character.name}
              </div>
              <div className="card-body">
                <p className="card-text">Gender: {character.gender}</p>
                <p className="card-text">Born: {character.birth_year}</p>
                <p className="card-text">In: {character.films.length} films</p>
                <Link to={`/characters/${getIdFromUrl(character.url)}`}
                  type="button" 
                  className="btn btn-light pt-1 pb-1"
                  >Read More
                </Link>
              </div>
            </div>
          ))}
      </div>

      {!loading && !error &&
        <div className="buttons d-flex justify-content-between">
          <button 
            disabled={page === 1}
            type="button" 
            className="btn btn-primary border-secondary"
            onClick={() => setPage(prevValue => prevValue - 1)}
          >Back</button>
            
          <button 
            disabled={!characters.next}
            type="button" 
            className="btn btn-primary border-secondary"
            onClick={() => setPage(prevValue => prevValue + 1)}
          >Next</button>
        </div>
      }
    </>
  )
}