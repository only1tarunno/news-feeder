import useNewsQuery from "../../../hooks/useNewsQuery";
import { getFormattedDate } from "../../../utils/date-utils";
import demoImg from "../../../assets/thumb_lg.png";

const FeaturedNews = () => {
  const { news } = useNewsQuery();

  const { title, description, urlToImage, author, publishedAt } = news[0] || {};

  return (
    <>
      {news.length > 0 ? (
        <div className="col-span-12 grid grid-cols-12 gap-4">
          {/* <!-- info --> */}
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                {title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">{description}</p>
            <p className="mt-5 text-base text-[#5C5955]">
              {getFormattedDate(publishedAt)}
            </p>
          </div>
          {/* <!-- thumb --> */}
          <div className="col-span-12 lg:col-span-8">
            <img
              className="w-full"
              src={urlToImage ? urlToImage : demoImg}
              alt="thumb"
            />
            <p className="mt-5 text-base text-[#5C5955]">Author: {author}</p>
          </div>
        </div>
      ) : (
        <p>No data </p>
      )}
    </>
  );
};

export default FeaturedNews;
