import React, { Children } from "react";
import MovieCard from "./MovieCard";
import "./style.css";
class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: null,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { data, children, buttonInfo, onClick } = this.props;
    return (
      <div className="section">
        <p className="section-name">{children}</p>
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
}

export default Section;
