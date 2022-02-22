import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Movie = ({ title, coverImg, summary, genres, id }) => {
  return (
    <li>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={coverImg} alt={"img"} />
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </li>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
