import React from "react";
import Button from "./Button";

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonShown: false,
    };
  }

  render() {
    const { id, img, title, onClick, buttonInfo } = this.props;
    return (
      <li
        key={id}
        onMouseEnter={() => this.setState({ isButtonShown: true })}
        onMouseLeave={() => this.setState({ isButtonShown: false })}
      >
        <img src={img} alt="cover" />
        {this.state.isButtonShown && (
          <Button onclick={onClick}>{buttonInfo}</Button>
        )}
        <p className="movieTitle">{title}</p>
      </li>
    );
  }
}

export default MovieCard;
