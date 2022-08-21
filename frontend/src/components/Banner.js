import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import bk from "./../images/bk.jpg";
import SideCard from "./sidecard";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import DoneIcon from "@mui/icons-material/Done";
import AddIcon from "@mui/icons-material/Add";
import play from "../images/play.png";
import { useSelector } from "react-redux";
import { addWatchAction } from "../actions";
import { useDispatch } from "react-redux";

const Banner = () => {
  let banner;
  let chkWl;
  const [ind, setind] = useState(0);
  const dispatch = useDispatch();
  banner = useSelector((state) => state.trailers.banner);
  const totalBanner = banner.length;
  let { watchlist } = useSelector((state) => state.trailers);
  chkWl = watchlist.findIndex((el) => el._id === banner[ind]._id);
  const lefthandle = () => {
    if (ind <= 0) {
      return null;
    } else {
      setind((prev) => prev - 1);
    }
  };
  const righthandle = () => {
    if (ind >= totalBanner) {
      return null;
    } else {
      setind((prev) => prev + 1);
    }
  };
  const handleBm = (e) => {
    e.preventDefault();
    const data = { id: banner[ind] };
    dispatch(addWatchAction(data));
  };
  return (
    <Box
      display="flex"
      mt={1.5}
      sx={{ border: "0px solid white", width: "100%", height: "60vh" }}
      flexDirection="row"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          width: "68%",
          border: "0px solid green",
          backgroundImage: `linear-gradient(to bottom, transparent 0%,black 91% ), url(data:image/png;base64,${
            banner[ind] ? banner[ind].MImage.data : ""
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: "1",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          display="flex"
          sx={{ fontSize: "10rem", border: "0px solid purple" }}
          color="white"
          justifyContent="space-between"
          alignItems="center"
          flexGrow={2}
        >
          <ArrowBackIosNewOutlinedIcon
            sx={{
              fontSize: "2rem",
              marginTop: "2rem",
              padding: "0.8rem 0.4rem",
              border: "0.1px solid white",
              borderRadius: "8px",
              fontWeight: "20px",
            }}
            onClick={lefthandle}
          />
          <ArrowForwardIosOutlinedIcon
            sx={{
              fontSize: "2rem",
              marginTop: "2rem",
              padding: "0.8rem 0.4rem",
              border: "0.1px solid white",
              borderRadius: "8px",
              fontWeight: "20px",
            }}
            onClick={righthandle}
          />
        </Box>
        <Box
          display="flex"
          alignItems="end"
          sx={{ height: "32%" }}
          flexGrow={0.6}
        >
          <Box
            ml={1.5}
            mr={1.5}
            display="block"
            sx={{
              backgroundImage: `url(data:image/png;base64,${banner[ind].PImage.data})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "98%",
              width: "60%",
            }}
          >
            <img
              onClick={handleBm}
              src={bk}
              style={{
                position: "absolute",
                height: "3rem",
                marginLeft: "-7px",
                zIndex: "2",
                width: "2.4rem",
                opacity: "0.7",
              }}
            />
            {chkWl === -1 ? (
              <AddIcon
                size="small"
                onClick={handleBm}
                sx={{
                  position: "absolute",
                  marginTop: "3px",
                  color: "white",
                  zIndex: "3",
                }}
              />
            ) : (
              <DoneIcon
                size="small"
                onClick={handleBm}
                sx={{
                  position: "absolute",
                  marginTop: "3px",
                  color: "white",
                  zIndex: "3",
                }}
              />
            )}
          </Box>
          <Box display="flex" alignContent="center" alignItems="center" pl={2}>
            <img src={play} style={{ width: "9%" }} />
            <Typography
              ml={2}
              color="white"
              sx={{ fontSize: "2.3rem", lineHeight: "1", width: "70%" }}
            >
              {banner[ind].title}
              <Typography
                color="#A0A0A0"
                sx={{ fontSize: "1.4rem", width: "70%" }}
              >
                {banner[ind].context}
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        p={1}
        sx={{
          bgcolor: "black",
          height: "96%",
          border: "0px solid yellow",
          width: "32%",
        }}
      >
        <Typography
          component="h2"
          color="yellow"
          sx={{ fontSize: "1.3rem", border: "0px solid red" }}
        >
          Up next
        </Typography>
        <Box
          display="flex"
          alignContent="stretch"
          alignItem="center"
          flexDirection="column"
          pl={2}
          mt={2}
          sx={{
            width: "95%",
            height: "87%",
            background:
              " linear-gradient(180deg,rgba(18,17,17,1) 24%, rgba(0,0,0,0.553407984287465) 35%)",
          }}
        >
          <SideCard img={banner[ind] ? banner[ind + 1] : ""} />
          <SideCard img={banner[ind] ? banner[ind + 2] : ""} />
          <SideCard img={banner[ind] ? banner[ind + 3] : ""} />
        </Box>
        <Typography
          component="h2"
          color="white"
          mt={2}
          sx={{
            fontFamily: "Lato",
            fontSize: "1.2rem",
          }}
        >
          Browser trailers
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
