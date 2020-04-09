import React from "react";
import Section from "./components/Section";
import "./App.css";
import logo from "./logo.png";

const mockAPI = new Request("./data.json");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: false,
      error: null,
    };
    this.fetchData = this.fetchData.bind(this);
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
        console.log(typeof json);
        this._isMounted &&
          this.setState({
            data: json,
          });
      })
      .catch((error) => {
        this._isMounted &&
          this.setState({
            error,
          });
      });
  }
  // handleAddClick() {

  //   this.setState(prevState=>({info : true })));
  // }
  render() {
    const { data, error } = this.state;
    return (
      <div className="App">
        <div className="NavigationBar">
          <img src={logo} alt="logo" className="logo" />
          <a href="#">My List</a>
          <a href="#">Recommendations</a>
        </div>
        {data ? (
          <div>
            <Section data={data.mylist} buttonInfo="Remove from my list">
              My List
            </Section>

            <Section data={data.recommendations} buttonInfo="Add to my list">
              Recommendations
            </Section>
          </div>
        ) : (
          <p>data is loading...</p>
        )}
      </div>
    );
  }
}

export default App;
