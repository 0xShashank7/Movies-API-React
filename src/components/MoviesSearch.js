import React, {useState} from 'react'

function MoviesSearch() {

    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);


    const searchMovies = async(e)=>{
        e.preventDefault()
        console.log('submitting')

        // const search = 'kgf'
        const url = `https://api.themoviedb.org/3/search/movie?api_key=e45bd87f0da4baf80f14e009bee8ac59&language=en-US&query=${search}&page=1&include_adult=false`;

        try{
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data.results)
            setMovies(data.results)

        }catch(err){
            console.log(err)
        }
        

    }

  return (
    <div>
    <form onSubmit={searchMovies}>
        <label className='label' htmlFor='movie' >Movie name</label>
        <input className='input' type='text' name='movie' value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='Enter movie name' />
        <button className='button' type='submit' >Search</button>
    </form>

    <div className='card-list'>
        {/* filter to remove posters which are unavailable rn */}
        {movies.filter(movie=> movie.poster_path).map(movie => (
            // movie.title
            <div className='card' key={movie.id} >
                <img className='card-image' 
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} alt={movie.title+'poster'} />
                <div className='card-content' >
                    <h3>{movie.title}</h3>
                    <p> Release Date: {movie.release_date}</p>
                    <p> Rating: {movie.vote_average}</p>
                    <p className='card-info' >{movie.overview}</p>
                </div>
            </div>
            
        ))}

    </div>
    </div>
  )
}

export default MoviesSearch