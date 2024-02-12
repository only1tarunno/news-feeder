import { useContext } from "react";
import { CategoryContext } from "../../context";

const Categories = () => {
  const { setSelectedCategory } = useContext(CategoryContext);
  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        <li>
          <a href="#" onClick={() => setSelectedCategory("general")}>
            General
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setSelectedCategory("business")}>
            Business
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setSelectedCategory("entertainment")}>
            Entertainment
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setSelectedCategory("health")}>
            Health
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setSelectedCategory("science")}>
            Science
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setSelectedCategory("sports")}>
            Sports
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setSelectedCategory("technology")}>
            Technology
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
