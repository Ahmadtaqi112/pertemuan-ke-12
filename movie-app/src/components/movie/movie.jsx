import StyledMovie from "./Movie.styled";
import { Link } from "react-router-dom";


function Movie(props) {
  
  const { movie } = props;

  return (
    <StyledMovie>
        <Link to={`/movie/${movie.id}`}>
        <Image
          className="movie__image"
          rounded
          borderColor="blue"
          src={
            movie.poster ||
            `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
          }
          alt={movie.title}
        />
         <h3 className="movie__title">{movie.title}</h3>
        <p className="movie__date">{movie.year || movie.release_date}</p>
     </Link>
        </StyledMovie>
  );
}

export default Movie;
