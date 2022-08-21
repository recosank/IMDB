import { Box, Avatar, Typography } from "@mui/material";
import React from "react";

const Cast = ({ img, nam, as }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      mr={0}
      justifyContent="start"
      alignItems="center"
    >
      <Avatar
        src={img}
        sx={{ width: "110px", height: "110px", objectPosition: "top" }}
      />
      <Box flexItem alignSelf="center" ml={3}>
        <p
          style={{
            color: "white",
            margin: 0,
            fontSize: "0.9rem",
            marginBottom: "5px",
          }}
        >
          {nam}
        </p>
        <p style={{ color: "#838996", margin: 0, fontSize: "0.9rem" }}>
          as {as}
        </p>
      </Box>
    </Box>
  );
};

export default Cast;
