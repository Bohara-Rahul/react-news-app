import { createContext, useState } from "react";
import axios from "axios";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [error, setError] = useState(null);

  const fetchTopHeadlines = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_NEWS_API_URL);
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