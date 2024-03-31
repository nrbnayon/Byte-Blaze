import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  deleteBookmarkBlog,
  deleteBookmarkBlogAll,
  saveToLs,
} from "../../Utils/localStorage";
import Blog from "../../Components/Blog/Blog";
import { ToastContainer } from "react-toastify";

const Bookmarks = () => {
  const blogs = useLoaderData();
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
  const deleteBookmarks = () => {
    deleteBookmarkBlogAll();
  };
  useEffect(() => {
    const blogIds = saveToLs();
    if (blogs && blogIds) {
      const filterBlogs = blogs.filter((blog) => blogIds.includes(blog.id));
      setBookmarkedBlogs(filterBlogs);
    }
  }, [blogs]);
  const handleDelete = (id) => {
    deleteBookmarkBlog(id);
    setBookmarkedBlogs((prevBookmarkedBlogs) =>
      prevBookmarkedBlogs.filter((blog) => blog.id !== id)
    );
  };
  return (
    <div className="my-5">
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bookmarkedBlogs.length > 0 ? (
          bookmarkedBlogs.map((blog) => (
            <Blog
              deletable={true}
              handelDelete={() => handleDelete(blog.id)}
              key={blog.id}
              blog={blog}
            />
          ))
        ) : (
          <p className="text-gray-600 text-center">No Bookmark Found!</p>
        )}
      </div>
      <button
        onClick={deleteBookmarks}
        className="w-1/2 mx-auto flex justify-center text-center my-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Delete All Bookmarks
      </button>
      <ToastContainer />
    </div>
  );
};

export default Bookmarks;

//   const [bookmark, setBookmark] = useState([]);
//   const bId = useParams();
//   console.log("Blogs: ", blogs, bId);
//   useEffect(() => {
//     const blogId = saveToLs();
//     console.log(blogId);
//     if (blogs && blogs.find((blog) => blog.id === blogId)) {
//       console.log(blogs);
//     }
//   }, [blogs]);
//   const filteredIdsChanged =
//     JSON.stringify(filterBlogs.map((blog) => blog.id)) !==
//     JSON.stringify(bookmarkedBlogs.map((blog) => blog.id));
//   if (filteredIdsChanged) {
//   setBookmarkedBlogs(filterBlogs);
//   }
