import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utills/constants/endpoints";
import Hero from "../../components/Hero/Hero"; 
 
function NowPlaying() {
  const [movies, setMovies] = useState([]);

  async function fetchNowPlaying() {
    const response = await axios(ENDPOINTS.NOW_PLAYING);

    setMovies(response.data.results);
  }

  useEffect(function () {
    fetchNowPlaying();
  }, []);

  return (
    <div>
      <Movies title="Now Playing" movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default NowPlaying;