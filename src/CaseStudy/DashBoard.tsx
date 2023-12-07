import { Box, Button, Stack, Typography } from "@mui/material";
import Grow from "@mui/material/Grow";
import React from "react";
import back from "./SL-113022-54210-24.jpg";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import routes from "./routes/routes";
const StyledButton = styled(Button)({
  background: "#4CAF50", // Add your preferred background color
  color: "white",
  "&:hover": {
    background: "#45A049", // Change color on hover if needed
  },
});
const Dashboard = () => {
  return (
    <Box
      height={"100vh"}
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
      }}
    >
      <Box pt={20}>
        <Typography textAlign={"center"} fontSize={"40px"} color="white">
          Dashboard
        </Typography>
        <Box mt={5}>
          <Typography textAlign={"center"}>Click to view JoulestoWatts Case study UI</Typography>
          <Stack mt={5} justifyContent={"center"} direction={"row"} spacing={4}>
            <Grow in timeout={1000}>
                <Link to={routes.Case_1}>
              <StyledButton>Case study 1</StyledButton>
              </Link>
            </Grow>
            <Grow in timeout={1200}>
            <Link to={routes.Case_2}>
              <StyledButton>Case study 2</StyledButton>
              </Link>
            </Grow>
            <Grow in timeout={1400}>
            <Link to={routes.Case_3}>
              <StyledButton>Case study 3</StyledButton>
              </Link>
            </Grow>
            <Grow in timeout={1600}>
            <Link to={routes.Case_4}>
              <StyledButton>Case study 4</StyledButton>
              </Link>
              
            </Grow>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
export default Dashboard;