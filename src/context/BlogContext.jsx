import React, { createContext, useState } from "react";

export const CardContext = createContext();

export const initialValues = {
  "comment_set": "",
  "id": "",
  "title" : "",
  "content" : "",
  "image": "",
  "publish_date" : "",
  "last_update": "",
  "author": "",
  "status": "",
  "slug": "",
  "comment_count": "",
  "view_count": "",
  "like_count": "",
};

const BlogContextProvider = ({ children }) => {
  // const [createBlog, setCreateBlog] = useState(initialValues);
  const [blogs, setBlogs] = useState();

  return (
    <CardContext.Provider
      value={{ blogs, setBlogs, }}
    >
      {children}
    </CardContext.Provider>
  );
};
export default BlogContextProvider;
