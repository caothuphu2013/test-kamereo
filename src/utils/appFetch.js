import axios from 'axios';
export const API = 'https://5e51497df2c0d300147c05a7.mockapi.io/api/';

export const getBaseUrl = (api = API) => api.replace(/\/$/, ''); // Remove the last character if it's "/"

// Using direct url or from base url
export const getUrl = (url) => (url.match(/^(http|https):\/\//) ? url : `${getBaseUrl()}/${url}`);

const appFetch = {
  get: (url, options) => axios.get(`${getUrl(url)}`, options).then((res) => res.data),
  post: (url, options) => axios.post(`${getUrl(url)}`, options).then((res) => res.data),
  put: (url, options) => axios.put(`${getUrl(url)}`, options).then((res) => res.data)
};

export default appFetch;
