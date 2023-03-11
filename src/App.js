import { useEffect, useContext, useState } from 'react';
import NewsList from './components/NewsList';
import { NewsContext } from './context/NewsContext';
import "./App.css";

function App() {
  const { fetchTopHeadlines } = useContext(NewsContext);

  // const categories = {
  //   business, entertainment, general, health, science, sports, technology
  // }

  useEffect(() => {
    fetchTopHeadlines();
  })
 
  return (
    <div className="App">
      <h1>Top Headlines Around The World</h1>
      <NewsList />
    </div>
  );
}

export default App;
