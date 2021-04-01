import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//type Params = {
//imdbID: string;
//};

type MovieData = {
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
  Plot: string;
  Poster: string;
  Language: string;
  imdbRating: string;
  imdbID: string;
};

export default function MoviePage() {
  const route_parameters = useParams<{ imdbID: string }>();

  const [movieData, set_movieData] = useState<MovieData>();

  const apiKey: string = "8679fb8e";

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://omdbapi.com/?apikey=${apiKey}&i=${route_parameters.imdbID}`
      );
      set_movieData(response.data);
    }
    fetchData();
  }, [route_parameters.imdbID]);

  console.log(movieData);

  return (
    <div style={{ padding: "20px" }}>
      {movieData ? (
        <div>
          <h1>{movieData.Title}</h1>
          <p>{movieData.Genre}</p>
          <div style={{ display: "flex" }}>
            <img src={movieData.Poster} alt={movieData.Title} />
            <div style={{ marginLeft: "20px" }}>
              <dl>
                <dt>Director</dt>
                <dd>{movieData.Director}</dd>
              </dl>
              <dl>
                <dt>Language</dt>
                <dd>{movieData.Language}</dd>
              </dl>
              <dl>
                <dt>Plot</dt>
                <dd>{movieData.Plot}</dd>
              </dl>
              <dl>
                <dt>IMDB Rating</dt>
                <dd>{movieData.imdbRating}</dd>
              </dl>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
