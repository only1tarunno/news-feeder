import searchIcon from "../../assets/icons/search.svg";

const Searchbar = () => {
  return (
    <div className="flex items-center space-x-3 lg:space-x-8">
      <img src={searchIcon} />
    </div>
  );
};

export default Searchbar;
