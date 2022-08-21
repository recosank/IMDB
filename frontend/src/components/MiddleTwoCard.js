import React, { useState } from "react";
import { Typography, Card, Box, Button, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import bk from "./../images/bk.jpg";
import DoneIcon from "@mui/icons-material/Done";
import { styled } from "@mui/system";
import TrailerModal from "./TrailerModal";
import { useSelector } from "react-redux";
import { addWatchAction } from "../actions";
import { useDispatch } from "react-redux";

const MiddleTwoCard = ({ img, wl }) => {
  const dispatch = useDispatch();
  const [Value, setValue] = useState(null);
  const [open, setopen] = useState(false);
  let { watchlist } = useSelector((state) => state.trailers);
  let chkWl;
  chkWl = img ? watchlist.findIndex((el) => el._id === img._id) : -1;
  const handleClose = () => {
    setopen(false);
  };
  const handleModal = () => {
    setopen(true);
  };
  const handleBm = (e) => {
    e.preventDefault();
    const data = { id: img };
    dispatch(addWatchAction(data));
  };

  return (
    <Card
      sx={{
        width: "10rem",
        display: "flex",
        bgcolor: "#0d0d0d",
        flexDirection: "column",
        zIndex: "1",
        marginLeft: "30px",
      }}
    >
      <Box
        display="flex"
        onClick={handleModal}
        sx={{
          width: "100%",
          height: "55%",
          backgroundImage: `url(data:image/png;base64,${
            img ? img.PImage.data : ""
          })`,
          border: "0px solid Blue",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        alignItems="flex-start"
      ></Box>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          top: "50",
          position: "fixed",
          height: "100%",
          overflow: "scroll",
        }}
      >
        <TrailerModal fc={handleClose} data={img} />
      </Modal>
      {wl === "false" ? (
        chkWl === -1 ? (
          <AddIcon
            onClick={handleBm}
            sx={{
              fontSize: "1.2rem",
              position: "absolute",
              marginLeft: "4px",
              marginTop: "3px",
              color: "white",
              zIndex: "3",
            }}
          />
        ) : (
          <DoneIcon
            onClick={handleBm}
            sx={{
              fontSize: "1.2rem",
              position: "absolute",
              marginLeft: "4px",
              marginTop: "3px",
              color: "white",
              zIndex: "3",
            }}
          />
        )
      ) : (
        <DoneIcon
          onClick={handleBm}
          sx={{
            fontSize: "1.2rem",
            position: "absolute",
            marginLeft: "4px",
            marginTop: "3px",
            color: "white",
            zIndex: "3",
          }}
        />
      )}
      <img
        src={bk}
        onClick={handleBm}
        style={{
          position: "absolute",
          height: "2.5rem",
          marginLeft: "-7px",
          zIndex: "2",
          width: "2.4rem",
          opacity: "1",
        }}
      />
      <Box display="flex" flexDirection="column" sx={{ height: "45%" }}>
        <Box display="flex" sx={{ border: "0px solid red" }}>
          <Rating
            name="simple-controlled"
            value={Value}
            emptyIcon={
              <StarIcon
                style={{ color: "white", opacity: 0.55 }}
                fontSize="inherit"
              />
            }
            sx={{ fontSize: "1rem", paddingTop: "12px", paddingLeft: "10px" }}
            onChange={(e, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
        <Typography
          variant="p"
          sx={{
            height: "30%",
            margin: "8px 12px",
            fontSize: "0.9rem",
            color: "white",
            border: "0px solid red",
          }}
        >
          {img
            ? img.name.length > 20
              ? img.name.slice(0, 20) + "..."
              : img.name
            : ""}
        </Typography>
        {chkWl === -1 ? (
          <Button
            onClick={handleBm}
            variant="outlined"
            sx={{
              border: "1px solid #050505",
              borderRadius: "10px",
              height: "55px",
              margin: "0",
              fontSize: "17px",
              bgcolor: "#050505",
            }}
            startIcon={<AddSharpIcon />}
          >
            watch list
          </Button>
        ) : (
          <Button
            onClick={handleBm}
            variant="outlined"
            sx={{
              border: "1px solid #050505",
              borderRadius: "10px",
              height: "55px",
              margin: "0",
              fontSize: "17px",
              bgcolor: "#050505",
            }}
            startIcon={<DoneIcon />}
          >
            remove
          </Button>
        )}
        <Button
          variant="text"
          sx={{ fontSize: "0.9rem", color: "white", marginTop: "7px" }}
          startIcon={<PlayArrowSharpIcon />}
        >
          trailer
        </Button>
      </Box>
    </Card>
  );
};

export default MiddleTwoCard;
