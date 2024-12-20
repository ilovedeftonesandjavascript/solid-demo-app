const API_BASE = "https://api.themoviedb.org/3";
let tmdbConfig;
let baseImageUrl;
const basePosterSize = "w185";

const API_KEY_V4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjYzYzMwNGUwYTVjOTAzZjlmNGI4ZjNmYjYwMzUzMCIsIm5iZiI6MTczNDU4MzA4NC42ODEsInN1YiI6IjY3NjNhMzJjNmFlYTFmZmYzMGFiMWZlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rHpzth7WBk_-t7a6943cpueS2uE4VwIdE2ji3gEjarw'

const defaultFetchParams = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + API_KEY_V4,
  },
};

export function getImageUrl(path: string, posterSize: string = basePosterSize) {
  return baseImageUrl + posterSize + path;
}

function get(path: string, params: RequestInit = {}) {
  if (tmdbConfig) {
    return _get(path, params);
  } else {
    return loadConfig().then(() => _get(path, params));
  }
}

function _get(path: string, params: RequestInit = {}) {
  return fetch(API_BASE + path, {
    ...defaultFetchParams,
    ...params,
  }).then((r) => r.json());
}

function loadConfig() {
  return _get("/configuration").then((data) => {
    tmdbConfig = data;
    baseImageUrl = data.images?.secure_base_url;
    return data;
  });
}

export default {
  get,
  loadConfig,
};
