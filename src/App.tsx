import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import MoviePage from "./pages/MoviePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/movie/:imdb_id" component={MoviePage} />
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
