import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../pages/login.css";

const Profile = () => {
  const { currentUserProfile } = useContext(AuthContext);  
  console.log(currentUserProfile);
  return (
    <Box
      className="banner"
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          maxWidth: "500px",
          minWidth: "275px",
          height: "fit-content",
          margin: "5rem",
          p: 3,
          bgcolor: "#e7e6f5",
          boxShadow: "10px 10px 5px 0px #000000a9",
        }}
      >
        <Avatar
          sx={{
            bgcolor: deepPurple[500],
            width: "100px",
            height: "100px",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          {currentUserProfile.username?.toUpperCase()[0] || currentUserProfile.username?.[0]}
        </Avatar>
        <CardContent sx={{ m: 2 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "1rem",
            }}
          >
            Display Name
          </Typography>
          <Typography
            variant="body2"
            color="black"
            sx={{
              fontSize: "1.3rem",
            }}
          >
            {currentUserProfile.firstname || currentUserProfile.username?.split("@")[0]}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "1rem",
            }}
          >
            Email
          </Typography>
          <Typography variant="body2" color="black">
            {currentUserProfile?.username}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
