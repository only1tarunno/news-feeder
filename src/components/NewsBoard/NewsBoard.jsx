import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";

const NewsBoard = () => {
  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <LeftSidebar />
        <RightSidebar />
      </div>
    </main>
  );
};

export default NewsBoard;
