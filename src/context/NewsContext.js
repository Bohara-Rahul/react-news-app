import { createContext, useState } from "react";
import axios from "axios";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [error, setError] = useState(null);

  const fetchTopHeadlines = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=32c6956eae314983a45e3224dc650774');
      setTopHeadlines(response.data.articles);
    } catch(err) {
      setError("Could not fetch the news stories");
    }
  }

  const valueToShare = {
    error, 
    topHeadlines,
    fetchTopHeadlines
  };

  return (
    <NewsContext.Provider value={valueToShare}>
      {children}
    </NewsContext.Provider>
  )
};

export { NewsContext, NewsProvider };