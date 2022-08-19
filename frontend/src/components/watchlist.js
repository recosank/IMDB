import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Typography, Box, Button } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import MiddleTwoCard from "./MiddleTwoCard";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

const Watchlist = () => {
  const { watchlist } = useSelector((state) => state.trailers);
  const ln = watchlist ? watchlist.length : 0;
  //const [ind, setind] = useState([0,6])

  //const backword = (e) => {
  //  e.preventDefault();
  //  return ind[0] > 0 ? setind(prev => prev.map(v => v - 6)) : null
  //}
  //const forword = (e) => {
  //  e.preventDefault();
  //  return ind[1] === fav.length ? setind([0,6]) : setind(prev => prev.map(v => v+6))
  //}

  return (
    <Box
      sx={{ width: "100%" }}
      mt={9}
      flexDirection="column"
      display="flex"
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
        From your Watchlist
      </Button>
      <Box display="flex" mt="2%" sx={{ width: "100%", height: "23.5rem" }}>
        {localStorage.getItem("imdbProfile") ? (
          <>
            {watchlist.map((val, index) => {
              return <MiddleTwoCard img={val} key={index} wl="true" />;
            })}
          </>
        ) : (
          <p>sign in </p>
        )}
      </Box>
    </Box>
  );
};

export default Watchlist;
