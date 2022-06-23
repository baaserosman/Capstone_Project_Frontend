import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { successNote, toastError, toastLogout } from "./customToastify";
// import { successNote } from "../utils/customToastify";



//! ******* READ and WRITE *******

export const useFetch =() => {
    const [blogs, setBlogs] = useState();
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
       setIsLoading(true);
      axios
        .get("https://tranquil-brook-25431.herokuapp.com/api/blogs/")
        .then((res) => setBlogs(res.data))
        .catch((err) => console.log(err));     
      
      setIsLoading(false);
    }, []);

    const createBlog = (userId, addBlog) => {
      const data = {
        title: "",
        content: "",
        image: "",
        author: "",
        status: "",
        slug: "",
      };
      const postBlog = () => {
        axios
          .post("https://jsonplaceholder.typicode.com/posts", { data })
          .then((res) => setBlogs([...blogs, res.data.data]));
      };
      console.log(addBlog, "Blog added.");
    };

  return {isLoading, blogs}

  
  
  }
  
//! ******* CREATE *******

// const createBlog = (userId, addBlog) => {
  
//   const data = {
//     "title": "",
//     "content": "",
//     "image": "",
//     "author": "",
//     "status": "",
//     "slug": "",
//   };
//   const postBlog = () => {
//     axios
//       .post("https://jsonplaceholder.typicode.com/posts", { data })
//       .then((res) => setBlogs([...blogs, res.data.data]));
//   };
//   console.log(addBlog, "Blog added.");

// };




