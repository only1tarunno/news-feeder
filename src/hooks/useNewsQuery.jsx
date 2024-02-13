import { useState, useEffect, useContext } from "react";
import { CategoryContext } from "../context";

const useNewsQuery = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // for checking value is available or not from searchbar or navigation clicked or not
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
      // check if any category is clicked
      fetchNewsData("category", selectedCategory);
    } else if (searchTerm) {
      // check any keyword is in the search bar
      fetchNewsData("search", searchTerm);
    } else {
      fetchNewsData();
    }
  }, [selectedCategory, searchTerm]);

  const featureNews =
    news.length > 0
      ? news.find((item, index) => index === news.length - 1)
      : null;

  // Filter out feature news from right sidebar news
  const rightSidebarNews =
    news.length > 1
      ? news.filter(
          (item, index) => index < 4 && item.title !== featureNews?.title
        )
      : [];

  // Filter out feature news and right sidebar news from left sidebar news
  const leftSidebarNews =
    news.length > 1
      ? news.filter(
          (item) =>
            item.title !== featureNews?.title &&
            !rightSidebarNews.includes(item)
        )
      : [];

  return {
    featureNews,
    rightSidebarNews,
    leftSidebarNews,
    news,
    loading,
    error,
    setLoading,
  };
};

export default useNewsQuery;
