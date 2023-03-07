import { useEffect, useContext } from 'react';
import NewsList from './components/NewsList';
import { NewsContext } from './context/NewsContext';
import "./App.css";

function App() {
  const { fetchTopHeadlines } = useContext(NewsContext);

  useEffect(() => {
    fetchTopHeadlines();
  }, [fetchTopHeadlines])
 
  return (
    <div className="App">
      <h1>Top Headlines Around The World</h1>
      <NewsList />
    </div>
  );
}

export default App;
