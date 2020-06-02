import React from "react";
import MovieCard from "./MovieCard";
import styled from "styled-components";
const Section = styled.div`
  box-sizing: border-box;
  margin: 5px 10px;
  padding: 0 10px;
  font-family: inherit;
  width: 100%;
  .section_name {
    text-align: left;
    font-weight: bold;
  }
`;
const List = styled.ul`
  display: flex;
  padding-left: 0;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

function Sections(props) {
  const { sectionTitle, list, handleClick, showFavorite } = props;
  return (
    <Section>
      <p className="section_name">{sectionTitle}</p>
      <List>
        {list.map(({ id, img, title }) => (
          <MovieCard
            key={id}
            id={id}
            img={img}
            title={title}
            onClick={() => handleClick(id)}
            buttonInfo={showFavorite}
          />
        ))}
      </List>
    </Section>
  );
}

export default React.memo(Sections);
