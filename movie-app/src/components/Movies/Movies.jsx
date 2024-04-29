import Movie from "../movie/movie";
import styles from "./Movies.module.css";
import data from "../../utills/constants/data";
import { useState } from "react";
import { nanoid } from "nanoid";



function Movies () {

    const [movies, setMovie ] = useState(data);

    function tambahFilm() {
        const movie = {
            id: nanoid,
            title: "Avatar",
            year : "2020",
            type : "Movie",
            poster : "https://picsum.photos/200/300",
        };
        setMovie ([...movies, movie]);
    }

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest MOvies</h2>
            <div className={styles.movie__container}>
            {movies.map (function(movie){
                return <Movie movie={movie} key={movie.id} />;

            })}
            </div>

            <button onClick={tambahFilm}>Add Movie</button>

            </section>
        </div>




    )
}

export default Movies;