import { useState, useEffect, useContext } from "react";
import { CategoryContext } from "../context";

const useNewsQuery = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { selectedCategory, searchTerm } = useContext(CategoryContext);

  const fetchNewsData = async (queryType, queryValue) => {
    try {
      setLoading(true);

      let url;
      if (queryType === "category") {
        url = `http://localhost:8000/v2/top-headlines?category=${queryValue}`;
      } else if (queryType === "search") {
        url = `http://localhost:8000/v2/search?q=${queryValue}`;
      } else {
        url = `http://localhost:8000/v2/top-headlines?category=general`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        const errorMessage = `Fetching news data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setNews(data.articles || data.result || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchNewsData("category", selectedCategory);
    } else if (searchTerm) {
      fetchNewsData("search", searchTerm);
    } else {
      fetchNewsData();
    }
  }, [selectedCategory, searchTerm]);

  return { news, loading, error };
};

export default useNewsQuery;
