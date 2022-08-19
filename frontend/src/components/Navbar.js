import React, { useState, useEffect, useRef } from "react";
import imdblogo from "./../images/imdblogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Link,
  ClickAwayListener,
  Divider,
  Box,
  Drawer,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const styl = {
  position: "absolute",
  top: 40,
  width: "7%",
  zIndex: 1,
  borderRadius: "7px",
  border: "1px solid black",
  p: 2,
  bgcolor: "#2b2b2b",
};

const Navbar = () => {
  const navi = useNavigate();
  const [topp, settop] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSignup, setisSignup] = useState(false);
  const profileRef = useRef(null);
  const profileChgRef = useRef(null);
  let imdbUser = localStorage.getItem("imdbProfile");
  const parsedImage = JSON.parse(imdbUser);
  const imageData = new Buffer.from(
    parsedImage ? parsedImage.image.data : ""
  ).toString("base64");

  const menuModal = (e) => {
    e.preventDefault();
    settop(!topp);
  };
  const handleSignup = () => {
    isSignup ? setOpen((p) => !p) : navi("/signup");
  };
  const handleClickAway = () => {
    setOpen(false);
  };
  const handleUser = (e) => {
    e.preventDefault();
    localStorage.removeItem("imdbProfile");
    setisSignup(false);
    navi("/signup");
  };

  const handleAvtarChg = (e) => {
    e.preventDefault();
    const newProfile = e.target.files[0];
    profileChgRef.current.src = URL.createObjectURL(newProfile);
  };
  const handleAvtar = () => {
    profileRef.current.click();
  };

  useEffect(() => {
    let imdbUser = localStorage.getItem("imdbProfile");
    if (imdbUser) {
      setisSignup(true);
    }
  }, [isSignup]);

  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      sx={{
        width: "100%",
        height: "3.5rem",
        bgcolor: "#121212",
      }}
    >
      <Box
        display="flex"
        mt={1.5}
        mb={0}
        sx={{ width: "65%", height: "60%" }}
        justifyContent="space-evenly"
        alignContent="center"
        alignItems="center"
        justifyItem="center"
      >
        <img
          src={imdblogo}
          alt="imdb"
          style={{ height: "1.7rem", width: "3rem" }}
        />
        <Button
          sx={{ color: "whitesmoke", margin: "0px 12px", fontSize: "0.88rem" }}
          size="small"
          onClick={menuModal}
          startIcon={<MenuIcon />}
        >
          Menu
        </Button>
        <Drawer
          anchor="top"
          open={topp}
          onClose={() => settop(false)}
          onOpen={() => settop(true)}
        >
          <p style={{ height: "20rem", width: "100%" }}>sdfaskdjfha</p>
        </Drawer>
        <div
          style={{
            height: "100%",
            width: "30%",
          }}
        >
          <input
            placeholder="search"
            style={{
              width: "100%",
              height: "60%",
              borderRadius: "5px",
              color: "black",
              padding: "3px",
              bgcolor: "white",
            }}
          />
        </div>
        <Button
          sx={{
            color: "white",
            fontSize: "0.9rem",
            fontWeight: "1000",
            letterSpacing: "0.01px",
          }}
        >
          IMDBPro
        </Button>
        <Divider
          color="white"
          sx={{
            height: "28px",
            m: 0.5,
            backgroundColor: "white",
            color: "white",
          }}
          orientation="vertical"
        />
        <Button sx={{ color: "whitesmoke" }} startIcon={<BookmarkBorderIcon />}>
          Watchlist
        </Button>
        <ClickAwayListener
          mouseEvent="onMouseDown"
          touchEvent="onTouchStart"
          onClickAway={handleClickAway}
        >
          <Box>
            <Button
              variant="text"
              sx={{
                color: "whitesmoke",
                height: "100%",
              }}
              endIcon={
                isSignup ? (
                  open ? (
                    <ArrowDropUpIcon />
                  ) : (
                    <ArrowDropDownIcon />
                  )
                ) : null
              }
              onClick={handleSignup}
            >
              {isSignup ? parsedImage.name : "Sign In"}
            </Button>
            {open && isSignup ? (
              <Box sx={styl}>
                <Link
                  sx={{ color: "white" }}
                  onClick={handleUser}
                  underline="hover"
                >
                  Logout
                </Link>
              </Box>
            ) : null}
          </Box>
        </ClickAwayListener>
        <Button sx={{ fontSize: "0.9rem", color: "whitesmoke" }}>EN</Button>
      </Box>
      <img
        src={`data:image/png;base64,${isSignup ? imageData : ""}`}
        style={{
          display: `${isSignup ? "block" : "none"}`,
          marginTop: "0.3%",
          borderRadius: "50%",
          objectFit: "cover",
          width: "2.3%",
          height: "80%",
        }}
        onClick={handleAvtar}
        ref={profileChgRef}
      />
      <input
        type="file"
        style={{ display: "none" }}
        onChange={handleAvtarChg}
        ref={profileRef}
        name="profile"
      />
    </Box>
  );
};

export default Navbar;
