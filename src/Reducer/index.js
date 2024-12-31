const reducer = (state, action) => {
  switch (action.type) {
    case "GET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_POSTS":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "DELETE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (currElem) => currElem.objectID !== action.payload
        ),
      };
    case "SEARCH_POST":
      return {
        ...state,
        query: action.thapa,
      };
    case "NEXT_PAGE":
      let pageNumInc = state.page + 1;
      if (pageNumInc >= state.nbPages) {
        pageNum = 0;
      }
      return {
        ...state,
        page: pageNumInc,
      };
    case "PREV_PAGE":
      let pageNum = state.page - 1;
      if (pageNum <= 0) {
        pageNum = 0;
      }
      return {
        ...state,
        page: pageNum,
      };
    default:
      return state;
  }
};

export default reducer;
