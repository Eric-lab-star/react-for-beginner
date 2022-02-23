import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [movieData, setMovieData] = useState([]);
  const { id } = useParams();
  const getMovie = async (id) => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieData(json.data.movie);
  };
  console.log(movieData);
  useEffect(() => {
    getMovie(id);
  }, []);

  return (
    <div>
      <h1>{movieData.title}</h1>
      <div>
        <img src={movieData.background_image} alt={"img"} />
      </div>
    </div>
  );
};

export default Detail;
