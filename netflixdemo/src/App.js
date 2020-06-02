import React from "react";
import { Main } from "./style";
import logo from "./logo.png";
import Sections from "./components/Sections";
const mockAPI = new Request("./data.json");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mylist: [],
      recommendations: [],
      isLoading: false,
      error: null,
    };
    this.fetchData = this.fetchData.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
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

  handleRemove(id) {
    const { mylist } = this.state;
    let ind = -1;
    let removeItem = {};
    mylist.forEach((element, index) => {
      if (element.id === id) {
        removeItem = element;
        ind = index;
      }
    });
    mylist.splice(ind, 1);

    this.setState({
      mylist: [...mylist],
      recommendations: [
        ...this.state.recommendations,
        { title: removeItem.title, id: removeItem.id, img: removeItem.img },
      ],
    });
  }
  handleAdd(id) {
    const { recommendations } = this.state;
    let ind = -1;
    let addItem = {};
    recommendations.forEach((element, index) => {
      if (element.id === id) {
        addItem = element;
        ind = index;
      }
    });
    recommendations.splice(ind, 1);
    this.setState({
      recommendations: [...recommendations],
      mylist: [
        ...this.state.mylist,
        { title: addItem.title, id: addItem.id, img: addItem.img },
      ],
    });
  }

  render() {
    const { mylist, recommendations, error } = this.state;
    return (
      <Main className="App">
        {error ? (
          <p>....something is wrong....</p>
        ) : (
          <div className="NavigationBar">
            <img src={logo} alt="logo" className="logo" />
          </div>
        )}
        {mylist && recommendations ? (
          <div className="lists">
            <Sections
              sectionTitle="My List"
              list={mylist}
              handleClick={this.handleRemove}
              showFavorite={true}
              key="list"
            />
            <Sections
              sectionTitle="Recommendations"
              list={recommendations}
              handleClick={this.handleAdd}
              showFavorite={false}
              key="recommendation"
            />
          </div>
        ) : (
          <p>data is loading...</p>
        )}
      </Main>
    );
  }
}

export default React.memo(App);
