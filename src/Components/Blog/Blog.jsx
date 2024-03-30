import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DefaultImg from "../../assets/404.jpg";
const Blog = ({ blog }) => {
  const {
    id,
    title,
    description,
    cover_image,
    published_at,
    // readable_publish_date,
    // slug,
    // path,
    // url,
    // comments_count,
    // public_reactions_count,
    // collection_id,
    // published_timestamp,
    // positive_reactions_count,
    // social_image,
    // canonical_url,
    // created_at,
    // edited_at,
    // crossposted_at,
    // last_comment_at,
    // reading_time_minutes,
    // tag_list,
    // tags,
    // user,
    // organization,
    // flare_tag,
  } = blog;
  return (
    <Link
      to={`/blog/${id}`}
      className="max-w-sm rounded-md mx-auto group transition border-2 border-opacity-30 border-primary hover:border-secondary hover:scale-105 hover:no-underline focus:no-underline dark:bg-gray-50"
    >
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
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
