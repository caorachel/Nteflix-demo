import { createStore, applyMiddleware, compose } from "redux";
// import axios from
import thunk from "redux-thunk";
const mockAPI = new Request("./data.json");

const FETCH_DATA = "FETCH_DATA";
const ADD_FAVORIATE = "ADD_FAVORIATE";
const REMOVE_FAVORIATE = "REMOVE_FAVORIATE";
const getData = (data) => ({
  type: FETCH_DATA,
  payload: data,
});
const removeFavorite = (updatedMyList, removeItem) => ({
  type: REMOVE_FAVORIATE,
  payload: { updatedMyList, removeItem },
});
const addFavorite = (updatedRecommendations, addItem) => ({
  type: ADD_FAVORIATE,
  payload: { updatedRecommendations, addItem },
});
export const fetchedData = () => async (dispatch) => {
  const res = await fetch(mockAPI).then((res) => res.json());
  dispatch(getData(res));
};
export const handleRemoveDispatch = (updatedMyList, removeItem) => async (
  dispatch
) => {
  dispatch(removeFavorite(updatedMyList, removeItem));
};
export const handleAddDispatch = (updatedRecommendations, addItem) => async (
  dispatch
) => {
  dispatch(addFavorite(updatedRecommendations, addItem));
};
const initalState = {
  mylist: [],
  recommendations: [],
  isLoading: false,
  error: null,
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      const { mylist, recommendations } = action.payload;
      return {
        ...state,
        mylist: [...mylist],
        recommendations: [...recommendations],
      };
    case ADD_FAVORIATE:
      const { updatedRecommendations, addItem } = action.payload;
      return {
        ...state,
        recommendations: [...updatedRecommendations],
        mylist: [
          ...state.mylist,
          { title: addItem.title, id: addItem.id, img: addItem.img },
        ],
      };
    case REMOVE_FAVORIATE:
      const { updatedMyList, removeItem } = action.payload;
      return {
        ...state,
        mylist: [...updatedMyList],
        recommendations: [
          ...state.recommendations,
          { title: removeItem.title, id: removeItem.id, img: removeItem.img },
        ],
      };
    default:
      return state;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
