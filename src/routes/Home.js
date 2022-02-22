import Movie from "../components/Movie";
import { useState, useEffect } from "react";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <div>
          <ul>
            {movies.map((movie) => (
              <Movie
                id={movie.id}
                key={movie.id}
                title={movie.title}
                coverImg={movie.medium_cover_image}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
