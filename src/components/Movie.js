import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/Movie.module.css";
const Movie = ({ title, coverImg, summary, genres, id }) => {
  return (
    <div className={styles.movieBox}>
      <h2>
        <Link to={`/movie/${id}`} className={styles.title}>
          <div>
            <img src={coverImg} alt={"img"} />
          </div>
          {title}
        </Link>
      </h2>
      <div className={styles.contentBox}>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
