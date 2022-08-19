import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import MiddleTwoCard from "./MiddleTwoCard";
import { useSelector } from "react-redux";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

const MiddleTwo = () => {
  const { fav } = useSelector((state) => state.trailers);
  const ln = fav ? fav.length : 0;
  const [ind, setind] = useState([0, 6]);

  const backword = (e) => {
    e.preventDefault();
    return ind[0] > 0 ? setind((prev) => prev.map((v) => v - 6)) : null;
  };
  const forword = (e) => {
    e.preventDefault();
    return ind[1] === fav.length
      ? setind([0, 6])
      : setind((prev) => prev.map((v) => v + 6));
  };

  return (
    <Box
      sx={{ border: "0px solid red", width: "100%" }}
      mt={4}
      flexDirection="column"
      display={fav.length !== 0 ? "flex" : "none"}
      justifyContent="start"
      alignItems="flex-start"
      alignContent="flex-start"
    >
      <Button
        sx={{
          color: "white",
          fontSize: "1.2rem",
          borderLeft: "4px solid yellow",
        }}
        endIcon={<ArrowForwardIosOutlinedIcon />}
      >
        Fan favorites
      </Button>
      <Typography
        color="lightgray"
        sx={{ fontSize: "0.8rem", fontWeight: "light" }}
        mt={1}
        mb={2}
      >
        This week's top TV and movies
      </Typography>
      <Box
        display="flex"
        sx={{ width: "100%", border: "0px solid blue", height: "24.5rem" }}
      >
        <ArrowBackIosNewOutlinedIcon
          sx={{
            bgcolor: "black",
            opacity: "0.6",
            zIndex: 2,
            color: "white",
            position: "absolute",
            fontSize: "1.6rem",
            marginTop: "5rem",
            padding: "0.8rem 0.4rem",
            border: "0.1px solid white",
            borderRadius: "8px",
            fontWeight: "20px",
          }}
          onClick={backword}
        />
        {fav.slice(ind[0], ind[1]).map((val, keys) => {
          return <MiddleTwoCard img={val} key={keys} wl="false" />;
        })}
        <ArrowForwardIosOutlinedIcon
          sx={{
            bgcolor: "black",
            opacity: "0.6",
            marginLeft: "-25px",
            zIndex: 2,
            color: "white",
            position: "relative",
            fontSize: "1.6rem",
            marginTop: "5rem",
            padding: "0.8rem 0.4rem",
            border: "0.1px solid white",
            borderRadius: "8px",
            fontWeight: "20px",
          }}
          onClick={forword}
        />
      </Box>
    </Box>
  );
};

export default MiddleTwo;
