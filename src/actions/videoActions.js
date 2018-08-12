export function updateList(items) {
    return {
        type: 'VIDEO_UPDATE_LIST',
        payload: items
    };
}

export function setCurrentId(id) {
    return {
        type: 'VIDEO_SET_CURRENT_ID',
        payload: id
    };
}
