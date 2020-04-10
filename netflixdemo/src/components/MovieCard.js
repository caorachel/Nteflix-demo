import React from "react";
import Button from "./Button";

function MovieCard({ id, img, title, onClick, buttonInfo }) {
  return (
    <li key={id} className="movieCard">
      <img src={img} alt="cover" />
      <Button onclick={onClick}>{buttonInfo}</Button>
      <p className="movieTitle">{title}</p>
    </li>
  );
}

export default MovieCard;
