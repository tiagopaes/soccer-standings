import axios from "axios";

const apiBaseUrl = process.env.VUE_APP_API_BASE_URL;
const apiSecretKey = process.env.VUE_APP_API_SECRET_KEY;

const http = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "X-Auth-Token": apiSecretKey,
    "Content-Type": "application/json"
  }
});

export default {
  get(endpoint) {
    return http.get(endpoint);
  }
};
