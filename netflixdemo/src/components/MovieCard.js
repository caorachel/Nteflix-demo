import React from "react";
// mport Button from "./Button";
import { Button, ListItem } from "./movieCardStyle.js";

function MovieCard(props) {
  const { id, img, title, onClick, buttonInfo } = props;
  return (
    <ListItem key={id}>
      <img src={img} alt="cover" />
      <div className="titleRow">
        <p>{title}</p>
        <Button onClick={onClick} buttonInfo={buttonInfo} className="btn">
          <i class="material-icons">favorite_border</i>
        </Button>
      </div>
    </ListItem>
  );
}

export default React.memo(MovieCard);
