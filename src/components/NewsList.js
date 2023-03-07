import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import NewsItem from "./NewsItem";

function NewsList() {
  const { topHeadlines } = useContext(NewsContext);

  const renderedNews = topHeadlines.map(news => {
    return <NewsItem news={news} key={news.url}></NewsItem>
  })
 
  return (
    <div>
      {renderedNews}
    </div>
  );
}

export default NewsList;
