import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/index";

const API = "http://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: "devops",
  nbPages: 0,
  page: 0,
  hits: [],
};

// context Creation
const AppContext = React.createContext();

// to create a provider function
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_POSTS",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //remove post
  const removePost = (post_id) => {
    dispatch({
      type: "DELETE_POST",
      payload: post_id,
    });
  };

  const searchPost = (searchPost) => {
    dispatch({
      type: "SEARCH_POST",
      payload: searchPost,
    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };
  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook create
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
