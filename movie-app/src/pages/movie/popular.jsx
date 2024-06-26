import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utills/constants/endpoints";
import Hero from "../../components/Hero/Hero"; 
 
function PopulerMovies() {
  const [movies, setMovies] = useState([]);

  async function fetchPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);

    setMovies(response.data.results);
  }

  useEffect(function () {
    fetchPopularMovies();
  }, []);

  return (
    <div>
      <Movies title="Popular" movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default PopulerMovies;
