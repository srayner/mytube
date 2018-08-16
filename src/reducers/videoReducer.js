const initialState = {
  currentId: null,
  items: [],
  currentCategoryId: null,
  categories: []
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VIDEO_UPDATE_LIST":
      const currentId = action.payload.length > 0 ? action.payload[0].id : null;
      state = {
        ...state,
        currentId: currentId,
        items: action.payload
      };
      break;
    case "VIDEO_SET_CURRENT_ID":
      state = {
        ...state,
        currentId: action.payload
      };
      break;
    case "VIDEO_UPDATE_CATEGORIES":
      state = {
        ...state,
        categories: action.payload
      };
      break;
    case "VIDEO_SET_CURRENT_CATEGORY_ID":
      state = {
        ...state,
        currentCategoryId: action.payload
      };
      break;
  }
  return state;
};

export default videoReducer;
