import React from "react";
// import Button from "./Button";
import Styles from "./MovieCard.module.css";

function MovieCard({ id, img, title, onClick, buttonInfo }) {
  return (
    <li key={id} className={Styles.movieCard}>
      <img src={img} alt="cover" className={Styles.img} />
      <button onClick={onClick} className={Styles.btn}>
        {buttonInfo}
      </button>

      <p className={Styles.movieTitle}>{title}</p>
    </li>
  );
}

export default MovieCard;
