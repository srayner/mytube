import axios from "axios";
import apiKey from "../apiKey";

class YouTube {
  searchUrl = "https://www.googleapis.com/youtube/v3";
  videoPlayerUrl = "https://www.youtube.com/embed/";

  getPopularVideos() {
    return axios.get(this.searchUrl + "/videos", {
      params: {
        key: apiKey,
        part: "snippet,statistics",
        chart: "mostPopular",
        maxResults: 25
      }
    });
  }

  getVideos(videoIds) {
    return axios.get(this.searchUrl + "/videos", {
      params: {
        key: apiKey,
        part: "snippet, statistics",
        id: videoIds.join(","),
        maxResults: 25
      }
    });
  }

  search(text) {
    return axios.get(this.searchUrl + "/search", {
      params: {
        key: apiKey,
        part: "snippet",
        type: "video",
        q: text,
        maxResults: 25
      }
    });
  }
}

const youtube = new YouTube();
export default youtube;
