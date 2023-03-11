import { createContext, useState } from "react";
import axios from "axios";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("politics");

  const fetchTopHeadlines = async () => {
    try {
      
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&language=en&apiKey=" + process.env.REACT_APP_NEWS_API_KEY);
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
    category,
    onCategoryChange
  };

  return (
    <NewsContext.Provider value={valueToShare}>
      {children}
    </NewsContext.Provider>
  )
};

export { NewsContext, NewsProvider };