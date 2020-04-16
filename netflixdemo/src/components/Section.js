import React from "react";
import MovieCard from "./MovieCard";
import Styles from "./Section.module.css";
function Section({ data, children, buttonInfo, onClick }) {
  return (
    <div className={Styles.section}>
      <p className={Styles.section_name}>{children}</p>
      <ul>
        {data.map(({ id, img, title }) => (
          <MovieCard
            id={id}
            img={img}
            title={title}
            onClick={() => onClick(id)}
            buttonInfo={buttonInfo}
          />
        ))}
      </ul>
    </div>
  );
}

export default Section;
