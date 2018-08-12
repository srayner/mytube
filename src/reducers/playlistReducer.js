const initialState = {
    name: 'Max',
    age: 25
}

const playlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PLAYLIST_SET_NAME":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "PLAYLIST_SET_AGE":
            state = {
                ...state,
                age: action.payload
            }
            break;
    }
    return state;
}

export default playlistReducer;