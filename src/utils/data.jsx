import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { successNote, toastError, toastLogout } from "./customToastify";
// import { successNote } from "../utils/customToastify";

//! ******* READ DATA *******

export const useFetch =() => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
       setIsLoading(true);
      axios
        .get("https://tranquil-brook-25431.herokuapp.com/api/blogs/")
        .then((res) => setBlogs(res.data))
        .catch((err) => console.log(err));      
    }, []);
  return {isLoading, blogs}
  }
    

