import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from "react-router-dom";

import { AccountCircle } from "@mui/icons-material";
import "./card.css";
import { Box } from "@mui/system";

const CardItem = ({ blog }) => {
  const { image, title, author, content, comment_count, view_count, like_count  } = blog;
  const navigate = useNavigate();
  // const { currentUser } = useContext(AuthContext);

  // const cardOnClick = () => {
  // //   if (currentUser) {
  // //     navigate("/details", { state: card });
  // //   } else {
  // //     alert("Please Sign In..");
  // //     navigate("/login");
  // //   }
  // };

  return (
    <Card
      className="cardcont"
      sx={{
        width: 300,
        m: 3,
        boxShadow: "10px 10px 5px 0px #000000a9",
      }}
    >
      <Box
        // onClick={() => {
        //   cardOnClick();
        // }}
        // onClick={() => {
        //   currentUser && navigate("/details", { state: card });
        // }}
        className="cardbox"
      >
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardHeader
          sx={{ bgcolor: "#e7e6f5" }}
          title={title}
          // subheader={date}
        />
        <CardContent
          sx={{ bgcolor: "#e7e6f5", overflow: "hidden", height: "3.6rem" }}
        >
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </Box>

      <CardContent sx={{ textAlign: "left", m: 0, p: 0 }}>
        <Typography variant="body2" color="text.secondary">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            // onClick={() => {
            //   currentUser && navigate("/profile");
            // }}
          >
            <AccountCircle />
          </IconButton>
          {author}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton size="small" aria-label="like">
          <FavoriteIcon /> <span>{like_count}</span>
        </IconButton>
        <IconButton size="small" aria-label="view">
          <RemoveRedEyeIcon /> <span>{view_count}</span>
        </IconButton>
        <IconButton size="small" aria-label="comment">
          <CommentIcon />
          <span>{comment_count}</span>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardItem;
