const initialState = {
    currentId: null,
    items: []
}

const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "VIDEO_UPDATE_LIST":
            state = {
                ...state,
                currentId: action.payload[0].id,
                items: action.payload
            }
            break;
        case "VIDEO_SET_CURRENT_ID":
            state = {
                ...state,
                currentId: action.payload
            }
            break;
    }
    return state;
}

export default videoReducer;