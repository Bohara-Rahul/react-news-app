import axios from "axios";

export default axios.create({
  baseURL: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=32c6956eae314983a45e3224dc650774'
});