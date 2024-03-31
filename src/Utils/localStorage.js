import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const saveToLs = () => {
  const getStore = localStorage.getItem("blogs");
  if (getStore) {
    return JSON.parse(getStore);
  } else {
    return [];
  }
};

const getStoredBookmarks = (id) => {
  const existBlog = saveToLs();
  if (!existBlog.includes(id)) {
    existBlog.push(id);
    localStorage.setItem("blogs", JSON.stringify(existBlog));
    toast.success("Blog add successfully");
  } else {
    toast.warn("Blog already added");
  }
};

const deleteBookmarkBlog = (id) => {
  const existBlog = saveToLs();
  if (existBlog.includes(id)) {
    const updatedBlogs = existBlog.filter((blogId) => blogId !== id);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    toast.success("Blog removed successfully");
  } else {
    toast.warn("Blog Already Deleted Please Refresh");
  }
};
const deleteBookmarkBlogAll = () => {
  const existBlog = saveToLs();
  if (existBlog.length > 0) {
    localStorage.removeItem("blogs");
    toast.success("Blogs all removed successfully");
  } else {
    toast.warn("Blog not found in bookmarks");
  }
};
export {
  saveToLs,
  getStoredBookmarks,
  deleteBookmarkBlog,
  deleteBookmarkBlogAll,
};
