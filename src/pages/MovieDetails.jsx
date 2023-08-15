import { useParams, Outlet, Link } from 'react-router-dom';
import { getMoviesById } from 'fakeAPI';

const MovieDetails = () => {
  const { movieId } = useParams();

  const movie = getMoviesById(movieId);
  return (
    <>
      <p>Movie {movie.name}</p>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
