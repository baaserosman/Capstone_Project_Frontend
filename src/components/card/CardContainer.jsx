import { Box } from "@mui/material";
import { useFetch } from "../../utils/data";
import CardItem from "./CardItem";

const CardContainer = () => {
  const { blogs, isLoading } = useFetch();
  // console.log(blogs)
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <Box
          width="50%"
          component="img"
          src={
            "https://www.loginradius.com/blog/static/8b9b7fd9f1449699b8c7a09b270a185c/c40f8/css3-loading-spinner.png"
          }
        ></Box>
      ) : blogs?.length === 0 ? (
        <Box
          width="75%"
          component="img"
          src={
            "https://cdn.dribbble.com/users/453325/screenshots/5573953/empty_state.png"
          }
        ></Box>
      ) : (
        blogs?.map((blog, index) => <CardItem blog={blog} key={index} />)
      )}
    </Box>
  );
};

export default CardContainer;
