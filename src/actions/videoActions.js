import youtube from '../library/youtube';

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

export function getPopularVideos() {
    console.log('action fired');
    return dispatch => {
        youtube.getPopularVideos()
            .then(response => {
                return mapResponse(response)
            }).then(payload => dispatch({
                type: 'VIDEO_UPDATE_LIST',
                payload: payload
            }));
            
    };
}

function mapResponse(response) {
    return response.data.items.map(item => {
        return {
            'id': item.id,
            'thumb': item.snippet.thumbnails.default.url,
            'title': item.snippet.title,
            'channel': item.snippet.channelTitle,
            'published': item.snippet.publishedAt,
            'stats': item.statistics
        };
    });
}