const saveToLs = () => {
  const getStore = localStorage.getItem("blog");
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
    localStorage.setItem("blog", JSON.stringify(existBlog));
  } else {
    alert("Blog already added");
  }
};

export { saveToLs, getStoredBookmarks };
