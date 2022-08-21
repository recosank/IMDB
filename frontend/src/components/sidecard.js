import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { styled } from "@mui/system";
import ModalChild from "./ModalChild";
import play from "../images/play.png";

const SideCard = ({ img }) => {
  const [open, setopen] = useState(false);

  const StyledModal = styled(ModalUnstyled)`
    position: absolute;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    flex-direction:column,
    align-items: center;
    justify-content: center;
    overflow:scroll;
  `;
  const Backdrop = styled("div")`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: black;
  `;

  const handleClose = () => {
    setopen(false);
  };
  const handleModal = () => {
    setopen(true);
  };

  return (
    <Box
      pt={1}
      sx={{
        display: "flex",
        width: "100%",
        height: "33%",
      }}
    >
      <img
        src={`data:image/png;base64,${img ? img.PImage.data : " "}`}
        onClick={handleModal}
        style={{
          objectFit: "cover",
          height: "95%",
          width: "22%",
        }}
      />
      <Box
        display="flex"
        pl={2}
        pt={1}
        justifyContent="start"
        flexDirection="column"
        sx={{ width: "80%" }}
      >
        <img src={play} style={{ width: "12%" }} />
        <Typography
          color="white"
          pt={1}
          sx={{
            textTransform: "none",
            fontSize: "1.03rem",
          }}
        >
          {img.title}
          <Typography
            color="#A0A0A0"
            sx={{
              textTransform: "none",
              fontSize: "0.9rem",
            }}
          >
            {img.context}
          </Typography>
        </Typography>
      </Box>
      <StyledModal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <ModalChild fc={handleClose} />
      </StyledModal>
    </Box>
  );
};

export default SideCard;
