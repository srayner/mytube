import youtube from "../library/youtube";

export function updateList(items) {
  return {
    type: "VIDEO_UPDATE_LIST",
    payload: items
  };
}

export function setCurrentId(id) {
  return {
    type: "VIDEO_SET_CURRENT_ID",
    payload: id
  };
}

export function searchByCategory(id) {
  return dispatch => {
    dispatch(setCurrentCategoryId(id));
    dispatch(getPopularVideos(id));
  };
}

export function setCurrentCategoryId(categoryId) {
  return {
    type: "VIDEO_SET_CURRENT_CATEGORY_ID",
    payload: categoryId
  };
}

export function getPopularVideos(categoryId) {
  return dispatch => {
    youtube
      .getPopularVideos(categoryId)
      .then(mapResponse)
      .then(videos =>
        dispatch({
          type: "VIDEO_UPDATE_LIST",
          payload: videos
        })
      );
  };
}

export function getCategories() {
  return dispatch => {
    youtube
      .getCategories()
      .then(mapCategories)
      .then(payload =>
        dispatch({
          type: "VIDEO_UPDATE_CATEGORIES",
          payload: payload
        })
      );
  };
}

export function searchVideos(text) {
  return dispatch => {
    youtube
      .search(text)
      .then(response => response.data.items.map(item => item.id.videoId))
      .then(videoIds => youtube.getVideos(videoIds))
      .then(mapResponse)
      .then(payload => {
        dispatch({
          type: "VIDEO_UPDATE_LIST",
          payload: payload
        });
      });
  };
}

function mapResponse(response) {
  return response.data.items.map(item => {
    return {
      id: item.id,
      thumb: item.snippet.thumbnails.default.url,
      title: item.snippet.title,
      channel: item.snippet.channelTitle,
      published: item.snippet.publishedAt,
      stats: item.statistics
    };
  });
}

function mapCategories(response) {
  const filtered = response.data.items.filter(item => {
    return item.snippet.assignable;
  });
  return filtered.map(item => {
    if (item.snippet.assignable) {
      return {
        id: item.id,
        title: item.snippet.title
      };
    }
  });
}
