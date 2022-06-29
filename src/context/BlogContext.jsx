import React, { createContext, useState } from "react";

export const CardContext = createContext();


export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {  
  const [createBlog, setCreateBlog] = useState();
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
