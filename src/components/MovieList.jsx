import {Movie} from '../components/Movie'
function MovieList(props) {
  const {movies = []} = props

  return <div className="movies">
    {movies.length ? movies.map(movie => {
      return <Movie key={movie.imdbID} {...movie}  />
    }) : 'Nothing found!'}
  </div>
}

export {MovieList}