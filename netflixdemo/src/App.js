import React, { Fragment } from "react";
import Section from "./components/Section";
import "./App.css";
import logo from "./logo.png";

const mockAPI = new Request("./data.json");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mylist: null,
      recommendations: null,
      isLoading: false,
      error: null,
    };
    this.fetchData = this.fetchData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this._isMounted = true;
    this.fetchData();
  }

  componentWillMount() {
    this._isMounted = false;
  }
  fetchData() {
    this.setState({ isLoading: true });
    fetch(mockAPI)
      .then((res) => res.json())
      .then((json) => {
        this._isMounted &&
          this.setState({
            mylist: json.mylist,
            recommendations: json.recommendations,
          });
      })
      .catch((error) => {
        this._isMounted &&
          this.setState({
            error,
          });
      });
  }
  handleClick(id) {
    const { mylist, recommendations } = this.state;
    const removeItem = mylist.filter((item) => item.id === id)[0];
    const addItem = recommendations.filter((item) => item.id === id)[0];
    if (addItem && !removeItem) {
      const updateRec = recommendations.filter((item) => item.id !== id);
      this.setState({
        mylist: [
          ...mylist,
          { title: addItem.title, id: addItem.id, img: addItem.img },
        ],
        recommendations: [...updateRec],
      });
    } else if (!addItem && removeItem) {
      const updateMylist = mylist.filter((item) => item.id !== id);
      this.setState({
        recommendations: [
          ...recommendations,
          { title: removeItem.title, id: removeItem.id, img: removeItem.img },
        ],
        mylist: [...updateMylist],
      });
    }
  }

  render() {
    const { mylist, recommendations, error } = this.state;
    return (
      <div className="App">
        {error ? (
          <p>....something is wrong....</p>
        ) : (
          <div className="NavigationBar">
            <img src={logo} alt="logo" className="logo" />
            <a href="#">My List</a>
            <a href="#">Recommendations</a>
          </div>
        )}
        {mylist && recommendations ? (
          <Fragment>
            <Section
              data={mylist}
              buttonInfo="Remove from my list"
              onClick={this.handleClick}
            >
              My List
            </Section>

            <Section
              data={recommendations}
              buttonInfo="Add to my list"
              onClick={this.handleClick}
            >
              Recommendations
            </Section>
          </Fragment>
        ) : (
          <p>data is loading...</p>
        )}
      </div>
    );
  }
}

export default App;
