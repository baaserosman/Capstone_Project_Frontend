import axios from 'axios';
import { useEffect, useState } from 'react'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])


  useEffect(() => {
    axios
      .get("https://tranquil-brook-25431.herokuapp.com/api/blogs/")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div>Blogs</div>
  )
}

export default Blogs