import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DefaultImg from "../../assets/404.jpg";
import { MdDelete } from "react-icons/md";

const Blog = ({ blog, deletable, handelDelete }) => {
  const { id, title, description, cover_image, published_at } = blog;

  return (
    <>
      <div className="max-w-sm relative rounded-md mx-auto group transition border-2 border-opacity-30 border-primary hover:border-secondary hover:scale-105 hover:no-underline focus:no-underline dark:bg-gray-50">
        <Link to={`/blog/${parseInt(id)}`} className="block">
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 dark:bg-gray-500"
            src={cover_image || DefaultImg}
          />
          <div className="p-6 space-y-2">
            <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs dark:text-gray-600">
              {new Date(published_at).toLocaleDateString()}
            </span>
            <p>{description}</p>
          </div>
        </Link>
        {deletable && (
          <div
            className="absolute top-2 right-2 hover:scale-105"
            onClick={() => handelDelete(id)}
          >
            <button className="p-2 bg-red-500 hover:scale-105 text-white rounded-full  hover:bg-red-600 focus:outline-none">
              <MdDelete />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  deletable: PropTypes.bool.isRequired,
  handelDelete: PropTypes.func,
};

export default Blog;
