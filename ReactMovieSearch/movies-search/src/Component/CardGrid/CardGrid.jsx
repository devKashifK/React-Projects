import { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./CardGrid.module.css";
import axios from "axios";

function CardGrid(props) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  let url =
    props.searchState === undefined || props.searchState === ""
      ? "https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716"
      : `https://api.themoviedb.org/3/search/movie?query=${props.searchState}&api_key=cfe422613b250f702980a3bbf9e90716`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setMovies(res.data.results);
    };
    fetchData();
    // axios
    //   .get(
    //     url
    //   )
    //   .then((response) => {
    //     // console.log(response);
    //     setMovies(...movies, response.data.results);
    //     setError(null);
    //     // console.log(movies);
    //   })
    //   .catch((err) => {
    //     setMovies([]);
    //     setError(err.message);
    //   });
  }, [url]);

  //   console.log(movies);
  return (
    <div className={styles.cardContainer}>
      {movies.map((items) => {
        return <Card image={items.poster_path} title={items.original_title} />;
      })}
    </div>
  );
}

export default CardGrid;
