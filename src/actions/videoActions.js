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

export function getPopularVideos(response) {
    return {
        type: 'VIDEO_UPDATE_LIST',
        payload: mapResponse(response)
    }
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