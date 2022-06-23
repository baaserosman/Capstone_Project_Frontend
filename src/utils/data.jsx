import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { successNote, toastError, toastLogout } from "./customToastify";
// import { successNote } from "../utils/customToastify";


export const UserStateChecker = (setCurrentUser) => {
  const[user, setUser] = useState([]);
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUser(res.data))
    .catch((err) => console.log(err));
  
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
    
};


//! ******* READ and WRITE *******

export const useFetch =() => {
    const [blogs, setBlogs] = useState();
    const [postBlog, setPostBlog]=useState();
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




