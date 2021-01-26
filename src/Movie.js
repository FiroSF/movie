import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <div className="movie__img">
        <img src={poster} alt={title} title={title} />
        <h3 className="movie__id">{id}</h3>
      </div>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <span className="movie__year">{year}</span>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">
          {summary.length > 180 ? summary.slice(0, 140) + "..." : summary}
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
