import { Box, Avatar, Typography } from "@mui/material";
import React from "react";

const BottomCard = ({ img }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      mr={3}
      alignContent="center"
      alignItems="center"
    >
      <Avatar
        src={`data:image/png;base64,${img ? img.AImage.data : " "}`}
        sx={{ width: "200px", height: "200px" }}
      />
      <Typography mt={1} sx={{ fontSize: "1.08rem", color: "white" }}>
        {img ? img.name : ""}
      </Typography>
      <Typography sx={{ fontSize: "0.8rem", color: "#acacac" }}>
        1923
      </Typography>
    </Box>
  );
};

export default BottomCard;
