import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUpWithGoogle } from "../../utils/data";
import { AuthContext } from "../../context/AuthContext";
import { Grid, TextField, Button, Box } from "@mui/material";
import { successNote } from "../../utils/customToastify";

const LoginComp = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    currentUser && navigate("/");
    console.log(currentUser);
  }, [currentUser]);

  const handleLogin = () => {
    signIn(username, password, setCurrentUser);
    console.log(currentUser);
  };
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            id="email"
            label="email"
            name="username"
            variant="outlined"
            type="email"
            required
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            label="password"
            name="password"
            variant="outlined"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            onClick={handleLogin}
            fullWidth
            sx={{ bgcolor: "#056582", fontWeight: "bold", boxShadow: "" }}
          >
            LOGIN
          </Button>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default LoginComp;
