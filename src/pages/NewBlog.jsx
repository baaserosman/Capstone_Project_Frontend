import { Box, TextField, Typography, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {BlogContext} from "../context/BlogContext";
import { AuthContext } from "../context/AuthContext";
import { toastNewBlog } from "../utils/customToastify";

const NewBlog = () => {
  const { currentUser } = useContext(AuthContext);
  const { createBlog, setCreateBlog} = useContext(BlogContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateBlog({ ...createBlog, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // const id = new Date().getTime();
    // const email = currentUser?.email;

    // const date = new Date();
    // const dates = [
    //   date.getDate(),
    //   " ",
    //   date.toLocaleString("default", { month: "long" }),
    //   " ",
    //   date.getFullYear(),
    // ];

    
    toastNewBlog("New Blog successfully added.");
    navigate("/");
    setCreateBlog({});
  };

  return (
    <Box
      className="banner"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        maxWidth="600px"
        minWidth="300px"
        sx={{
          p: 2,
          bgcolor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          boxShadow: "10px 10px 5px 0px #000000a9",
          borderRadius: "30px",
        }}
      >
        <Box
          width="200px"
          height="200px"
          sx={{
            borderRadius: "50%",
            bgcolor: "#056582",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            width="200px"
            component="img"
            src={"https://blogcw.netlify.app/static/media/blok.7e6674a5.png"}
          ></Box>
        </Box>

        <Typography
          variant="h5"
          component="h1"
          sx={{ mt: 1, color: "#056582", fontWeight: "bold" }}
        >
          ── New Blog ──
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Title "
            variant="outlined"
            size="small"
            required
            fullWidth
            sx={{
              m: 1,
            }}
            name="title"
            onChange={handleChange}
            value={createBlog.title}
          />
          <TextField
            id="outlined-multiline-static"
            label="Content "
            required
            multiline
            fullWidth
            rows={4}
            size="small"
            sx={{
              m: 1,
            }}
            name="content"
            onChange={handleChange}
            value={createBlog.content}
          />
          <TextField
            id="outlined-basic"
            label="Image URL "
            variant="outlined"
            fullWidth
            size="small"
            sx={{
              m: 1,
            }}
            name="image"
            onChange={handleChange}
            value={createBlog.image}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={createBlog.status}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value={"Draft"}>Draft</MenuItem>
              <MenuItem value={"Published"}>Published</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            required
            fullWidth
            sx={{
              bgcolor: "#056582",
              fontWeight: "bold",
            }}
          >
            Add New Blog
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default NewBlog;
