import React from "react";
import { Main } from "./style";
import logo from "./logo.png";
import Sections from "./components/Sections";
import { connect } from "react-redux";
import { fetchedData, handleRemoveDispatch, handleAddDispatch } from "./redux";

class App extends React.Component {
  componentDidMount() {
    this._isMounted = true;
    this.props.fetchedData();
  }

  componentWillMount() {
    this._isMounted = false;
  }

  handleRemove = (id) => {
    const { mylist } = this.props;
    let ind = -1;
    let removeItem = {};
    mylist.forEach((element, index) => {
      if (element.id === id) {
        removeItem = element;
        ind = index;
      }
    });
    mylist.splice(ind, 1);

    this.props.handleRemoveDispatch(mylist, removeItem);
  };
  handleAdd = (id) => {
    const { recommendations } = this.props;
    let ind = -1;
    let addItem = {};
    recommendations.forEach((element, index) => {
      if (element.id === id) {
        addItem = element;
        ind = index;
      }
    });
    recommendations.splice(ind, 1);

    this.props.handleAddDispatch(recommendations, addItem);
  };

  render() {
    const { mylist, recommendations, error } = this.props;

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
const mapStateToProps = (state) => ({
  mylist: state.mylist,
  recommendations: state.recommendations,
  isLoading: state.isLoading,
  error: state.error,
});
const mapActionToProps = {
  fetchedData,
  handleRemoveDispatch,
  handleAddDispatch,
};
export default connect(mapStateToProps, mapActionToProps)(React.memo(App));
