import { useState, useEffect, useContext } from "react";
import { CategoryContext } from "../context";

const useNewsQuery = () => {
  const [news, setNews] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const { selectedCategory } = useContext(CategoryContext);

  const fetchNewsdata = async (category) => {
    try {
      setLoading(true);

      const response = await fetch(
        `http://localhost:8000/v2/top-headlines?category=${category}`
      );

      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setNews(data.articles);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchNewsdata(selectedCategory);
    } else {
      fetchNewsdata("general");
    }
  }, [selectedCategory]);

  return { news, loading, error };
};

export default useNewsQuery;
