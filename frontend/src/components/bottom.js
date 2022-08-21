import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import BottomCard from "./BottomCard";
import { useSelector } from "react-redux";

const Bottom = () => {
  const [ind, setind] = useState(0);
  const { born } = useSelector((state) => state.trailers);

  return (
    <Box
      sx={{ width: "100%" }}
      mt={6}
      flexDirection="column"
      display={born.length !== 0 ? "flex" : "none"}
      justifyContent="start"
      alignItems="flex-start"
      alignContent="flex-start"
    >
      <Button
        sx={{
          color: "white",
          fontSize: "1.1rem",
          borderLeft: "4px solid yellow",
        }}
        endIcon={<ArrowForwardIosOutlinedIcon />}
      >
        Born today
      </Button>
      <Typography
        color="lightgray"
        sx={{ fontSize: "0.8rem", fontWeight: "light" }}
        mt={1}
        mb={2}
      >
        People born on March 8
      </Typography>
      <Box
        display="flex"
        sx={{ width: "100%", border: "0px solid blue", height: "12rem" }}
      >
        <BottomCard img={born[ind]} />
        <BottomCard img={born[ind + 1]} />
        <BottomCard img={born[ind + 2]} />
        <BottomCard img={born[ind + 3]} />
        <BottomCard img={born[ind + 4]} />
        <BottomCard img={born[ind + 5]} />
      </Box>
    </Box>
  );
};

export default Bottom;
