import React, { useState } from "react";
import MiddleCard from "./middlecard";
import { useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Middle = () => {
  let todayFeatured = useSelector((state) => state.trailers.today);
  const [ind, setind] = useState(0);
  const ttFeatured = todayFeatured.length - 2;

  const lefthandle = () => {
    return ind <= 0 ? null : setind((prev) => prev - 1);
  };
  const righthandle = () => {
    return ind === ttFeatured ? setind(0) : setind((prev) => prev + 1);
  };

  return (
    <Box
      sx={{ border: "0px solid red", width: "100%" }}
      mt={4}
      flexDirection="column"
      display={todayFeatured.length !== 0 ? "flex" : "none"}
      justifyContent="start"
      alignItems="flex-start"
      alignContent="flex-start"
    >
      <Typography color="yellow" sx={{ fontSize: "1.8rem" }} pl={3} m={2}>
        Featured Today
      </Typography>
      <Box
        display="flex"
        justifyContent="flex-start"
        sx={{ width: "70%", border: "0px solid blue", height: "13rem" }}
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
          onClick={lefthandle}
        />
        <MiddleCard img={todayFeatured[ind]} />
        <MiddleCard img={todayFeatured[ind + 1]} />
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
          onClick={righthandle}
        />
      </Box>
    </Box>
  );
};

export default Middle;
