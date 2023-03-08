import { createContext, useState } from "react";
import axios from "axios";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("politics");

  const fetchTopHeadlines = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.REACT_APP_NEWS_API_KEY);
      // const response = await axios.get("https://newsapi.org/v2/top-headlines?country=au&apiKey=32c6956eae314983a45e3224dc650774");
      setTopHeadlines(response.data.articles);
      console.log(response);
    } catch(err) {
      setError("Could not fetch the news stories");
    }
  }

  const onCategoryChange = (category) => {
    setCategory(category);
  }

  const valueToShare = {
    error, 
    topHeadlines,
    fetchTopHeadlines,
    onCategoryChange
  };

  return (
    <NewsContext.Provider value={valueToShare}>
      {children}
    </NewsContext.Provider>
  )
};

export { NewsContext, NewsProvider };