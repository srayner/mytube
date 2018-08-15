const initialState = {
  currentId: null,
  items: [],
  categories: []
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VIDEO_UPDATE_LIST":
      console.log(action.payload);
      state = {
        ...state,
        currentId: action.payload[0].id,
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
  }
  return state;
};

export default videoReducer;
