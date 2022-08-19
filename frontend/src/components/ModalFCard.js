import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import black from "./../images/black.jpg";
import play from "../images/play.png";

const ModalFCard = ({ imgg }) => {
  return (
    <Grid
      container
      ml={4}
      height="100%"
      sx={{ border: "0px solid red", bgcolor: "black" }}
    >
      {
        // /xs={2.7}
      }
      <Grid item xs={12} height="60%">
        <img
          src={`data:image/png;base64,${imgg ? imgg.MImage.data : " "}`}
          style={{ height: "100%", width: "100%", zIndex: "1" }}
        />
        <img
          src={play}
          style={{
            width: "2%",
            marginLeft: "-13.9%",
            marginTop: "6.2%",
            position: "absolute",
            color: "white",
            zIndex: "3",
          }}
        />
      </Grid>
      <Grid item xs={12} height="40%">
        <Typography variant="p" sx={{ marginTop: "5%", color: "white" }}>
          Official Trailer
        </Typography>
        <Typography pt={1} sx={{ fontSize: "15px", color: "gray" }}>
          Mikael Blomkvist, a journalist a computer hacker, to solve the mystery
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ModalFCard;
