import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveToLs } from "../../Utils/localStorage";

const Bookmarks = () => {
  const blogs = useLoaderData();
  const [bookmark, setBookmark] = useState([]);
  const bId = useParams();
  console.log("Blogs: ", blogs, bId);
  useEffect(() => {
    const blogId = saveToLs();
    console.log(blogId);
    if (blogs && blogs.find((blog) => blog.id === blogId)) {
      console.log(blogs);
    }
  }, [blogs]);
  console.log(bookmark);
  return (
    <div>
      <p>Bookmark</p>
    </div>
  );
};

export default Bookmarks;
