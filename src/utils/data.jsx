import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { successNote, toastError, toastLogout } from "./customToastify";
// import { successNote } from "../utils/customToastify";

//*  ////////////////////////////
//! ******* REGISTER *******
//*  ////////////////////////////

export const createUser = (username, password, password2) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
//   myHeaders.append(
//     "Cookie",
//     "csrftoken=AsyrPF0OaNTbOpTwT1yUHPPutEurOPmdnyGPYMY2z88BizkeLoafkFadnioS68ge; sessionid=1wlpzgc8vi350ylaaj8ultlg02nv7wge"
// );

var raw = JSON.stringify({
  username: username,
  // first_name: "string",
  // last_name: "string",
  password: password,
  password2: password2,
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch(
  "https://tranquil-brook-25431.herokuapp.com/users/register/",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error)); 
}


//*  ////////////////////////////
//! ******* LOGIN *******
//*  ////////////////////////////
export const signIn =(username,password, setCurrentUser) => {
  var myHeaders = new Headers();
 
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    username: username,
    // email: "user@example.com",
    password: password,
  
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://tranquil-brook-25431.herokuapp.com/users/auth/login/",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {setCurrentUser(result); sessionStorage.setItem("token", result);})
    .catch((error) => console.log("error", error));
}


//*  ////////////////////////////
//! ******* USER *******
//*  ////////////////////////////
export const userStateChecker = (setCurrentUser, token) => {

  var myHeaders = new Headers();
  var token = sessionStorage.getItem("token");

  myHeaders.append(
    "Authorization",
    `Token ${token.key}`
  );
 
  var raw = "";

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://tranquil-brook-25431.herokuapp.com/users/current-user",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) =>
      result.id ? setCurrentUser(result) : setCurrentUser(false)
    )
    .catch((error) => console.log("error", error));
    
};

//*  ////////////////////////////
//! ******* LOGOUT *******
//*  ////////////////////////////

export const logout = (setCurrentUser) => {
  var myHeaders = new Headers(); 

  myHeaders.append(
    "Cookie",
    "csrftoken=AsyrPF0OaNTbOpTwT1yUHPPutEurOPmdnyGPYMY2z88BizkeLoafkFadnioS68ge; sessionid=1wlpzgc8vi350ylaaj8ultlg02nv7wge"
  );

  var raw = "";

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://tranquil-brook-25431.herokuapp.com/users/auth/logout/",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      setCurrentUser(false);
      sessionStorage.setItem("token", "");
    })
    .catch((error) => console.log("error", error));
}


//*  ////////////////////////////
//! ******* READ  ******
//*  ////////////////////////////
export const useFetch = () => {
  const [blogs, setBlogs] = useState();
  const [postBlog, setPostBlog] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://tranquil-brook-25431.herokuapp.com/api/blogs/")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));

    setIsLoading(false);
  }, []);

  return { isLoading, blogs };
};

//*  ////////////////////////////
//! ******* WRITE  ******
//*  ////////////////////////////

export const createBlog = (title, content, image, status) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 574b9d67980b72e587a0a53c4b997b90f6e160ce"
    );
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "csrftoken=AsyrPF0OaNTbOpTwT1yUHPPutEurOPmdnyGPYMY2z88BizkeLoafkFadnioS68ge; sessionid=1wlpzgc8vi350ylaaj8ultlg02nv7wge"
    );

    var raw = JSON.stringify({
      title: title,
      content: content,
      image: image,
      // author: author,
      status: status,
      // slug: slug,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://tranquil-brook-25431.herokuapp.com/api/blogs/",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
}




