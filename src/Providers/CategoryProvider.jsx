import { useState } from "react";
import { CategoryContext } from "../context";

// eslint-disable-next-line react/prop-types
const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
