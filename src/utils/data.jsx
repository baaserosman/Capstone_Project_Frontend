import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { successNote, toastError, toastLogout } from "./customToastify";
// import { successNote } from "../utils/customToastify";

//*  ////////////////////////////
//! ******* REGISTER *******
//*  ////////////////////////////
export const createUser = () => {
  var myHeaders = new Headers();
  myHeaders.append("", "");
  myHeaders.append(
    "Cookie",
    "csrftoken=AsyrPF0OaNTbOpTwT1yUHPPutEurOPmdnyGPYMY2z88BizkeLoafkFadnioS68ge; sessionid=1wlpzgc8vi350ylaaj8ultlg02nv7wge"
);

var raw = JSON.stringify({
  username: "user@example.com",
  first_name: "string",
  last_name: "string",
  password: "string",
  password2: "string",
});

fetch(
  "https://tranquil-brook-25431.herokuapp.com/users/register/",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error)); 
}


//*  ////////////////////////////
//! ******* READ and WRITE ******
//*  ////////////////////////////
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




