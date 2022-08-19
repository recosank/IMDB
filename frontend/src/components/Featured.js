import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useSelector } from "react-redux";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ModalFCard from "./ModalFCard";

const Featured = () => {
  let banner = useSelector((state) => state.trailers.banner);
  const totalBanner = banner.length;
  const [ind, setind] = useState([0, 4]);

  const backword = (e) => {
    e.preventDefault();
    return ind[0] > 0 ? setind((prev) => prev.map((v) => v - 4)) : null;
  };
  const forword = (e) => {
    e.preventDefault();
    return ind[1] === banner.length
      ? setind([0, 4])
      : setind((prev) => prev.map((v) => v + 4));
  };

  return (
    <Box
      width="100%"
      display={banner.length !== 0 ? "flex" : "none"}
      flexDirection="column"
      mt={10}
      height="18rem"
      sx={{ border: "0px solid green" }}
    >
      <Typography
        variant="h5"
        pl={1.5}
        color="white"
        sx={{ borderLeft: "3px solid yellow" }}
      >
        Featured Videos
      </Typography>
      <Box display="flex" mt={5}>
        <ArrowBackIosNewOutlinedIcon
          sx={{
            bgcolor: "black",
            opacity: "0.6",
            zIndex: 2,
            color: "white",
            position: "absolute",
            fontSize: "1.6rem",
            marginTop: "2rem",
            padding: "0.8rem 0.4rem",
            border: "0.1px solid white",
            borderRadius: "8px",
            fontWeight: "20px",
          }}
          onClick={backword}
        />
        {banner.slice(ind[0], ind[1]).map((val, index) => {
          return <ModalFCard imgg={val} key={index} />;
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
            marginTop: "2rem",
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

export default Featured;
