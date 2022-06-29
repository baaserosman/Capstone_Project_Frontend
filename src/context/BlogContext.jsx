import React, { createContext, useState } from "react";

export const CardContext = createContext();

export const BlogContext = createContext();
export const initialValues = {
  title: "",
  content: "",
  image: "",
  status: "",
};

const BlogContextProvider = ({ children }) => {  
  const [createBlog, setCreateBlog] = useState(initialValues);
  const [blogs, setBlogs] = useState();

  return (
    <CardContext.Provider
      value={{ blogs, setBlogs, createBlog, setCreateBlog }}
    >
      {children}
    </CardContext.Provider>
  );
};
export default BlogContextProvider;
