import { useState } from "react";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovie from "../components/Addmovieform/Addmovie";
import data from "../utills/data";

function Home() {

const [movies, setMovies] = useState(data);

  return (
  <div>
      <Hero />
    <Movies movies={movies} setMovies={setMovies} />  
   <AddMovie movies={movies} setMovies={setMovies} />
  </div>
  );
}

export default Home;