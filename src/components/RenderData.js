import React, {useState} from 'react'
import MoviesSearch from './MoviesSearch'

function RenderData() {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState('');
  return (
    <div>
    {movies.map(movie => (
            <div className='card' >
                <img src={``} />
            </div>
        ))}
    </div>
  )
}

export default RenderData