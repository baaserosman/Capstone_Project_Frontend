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
export const signIn =(username, password, setCurrentUser) => {
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
export const userStateChecker = (setCurrentUser,  token) => {

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
    .then((result) => sessionStorage.setItem("user", result))
    .catch((error) => console.log("error", error));
};

//*  ////////////////////////////
//! ******* PROFILE *******
//*  ////////////////////////////

export const profile = (setCurrentUserProfile, user) => {

var user = sessionStorage.getItem("user");
var myHeaders = new Headers();
myHeaders.append(
  "Cookie",
  "csrftoken=J7M7DWOplWWCgQMrWaPJlgJEd3VOVG2L9gBNi65IjgrM0ec3tI67A9LmY8W2kUtQ; sessionid=xz1hcmhwi5h1fnrbq7h7i8j6q2qsx20x"
);

var raw = "";

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch(
  `https://tranquil-brook-25431.herokuapp.com/users/profile/${user.id}`,
  requestOptions
)
  .then((response) => response.text())
  .then((result) => setCurrentUserProfile(result))
  .catch((error) => console.log("error", error));
}
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

export const createBlog = (title, content, image, status, createBlog, setCreateBlog) => {
  var myHeaders = new Headers();
  var token = sessionStorage.getItem("token");
  myHeaders.append("Authorization", `Token ${token.key}`);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    title: title,
    content: content,
    image: image,
    status: status,
    // author: author,
    // slug: slug,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://tranquil-brook-25431.herokuapp.com/api/blogs/", requestOptions)
    .then((response) => response.text())
    .then((result) => setCreateBlog(result))
    .catch((error) => console.log("error", error));
};




