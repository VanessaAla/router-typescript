import React from "react";
import { Link } from "react-router-dom";

export type Movie = {
  key: string;
  Title: string;
  imdbID: string;
  Year: string;
  Poster: string;
};

type Props = {
  movie: Movie;
};

export default function MovieItem({ movie }: Props) {
  return (
    <div className="movie-item">
      <Link to={`/movie/${movie.imdbID}`}>
        <h3 className="movie-title">{movie.Title}</h3>
        <h4>{movie.Year}</h4>
        <h4>
          {" "}
          {movie.Poster !== "N/A" ? (
            <img src={movie.Poster} alt={" "} />
          ) : (
            <p>no image</p>
          )}
        </h4>
      </Link>
    </div>
  );
}
