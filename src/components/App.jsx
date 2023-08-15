import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Movies from 'pages/Movies';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

export const App = () => {
  return (
    <>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
