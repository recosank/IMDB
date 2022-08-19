import React, { useState } from "react";
import { Typography, Divider, Grid, Box } from "@mui/material";
import black from "./../images/black.jpg";
import AddIcon from "@mui/icons-material/Add";
import bk from "./../images/bk.jpg";
import ModalFCard from "./ModalFCard";
import { Stack } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const ModalChild = ({ fc }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={5}
      sx={{
        bgcolor: "black",
        border: "0px solid red",
        width: "100%",
        height: "80rem",
      }}
    >
      <CloseOutlinedIcon
        onClick={fc}
        sx={{
          fontSize: "30px",
          position: "absolute",
          color: "white",
          marginLeft: "95%",
        }}
      />
      <Box
        display="flex"
        width="70%"
        sx={{ border: "2px solid black", height: "32%" }}
      >
        <video controls width="70%" src="" />
        <Grid
          container
          p={3}
          width="30%"
          sx={{ border: "0px solid blue", bgcolor: "#121212" }}
        >
          <Grid xs={4} height="30%" item sx={{ border: "0px solid green" }}>
            <img
              src={black}
              style={{ position: "relative", width: "100%", height: "90%" }}
            />
            <img
              src={bk}
              style={{
                position: "absolute",
                height: "2rem",
                marginLeft: "-5.6rem",
                zIndex: "2",
                width: "1.8rem",
                opacity: "0.7",
              }}
            />
            <AddIcon
              size="small"
              sx={{
                fontSize: "27px",
                position: "absolute",
                marginTop: "0px",
                color: "white",
                marginLeft: "-5.3rem",
                zIndex: "3",
                opacity: "0.7",
              }}
            />
          </Grid>
          <Grid
            xs={8}
            item
            p={1}
            height="30%"
            sx={{ border: "0px solid green" }}
          >
            <Typography sx={{ color: "white", fontSize: "18px" }}>
              Girl with Dragon tatoo
            </Typography>
            <Typography sx={{ color: "gray", fontSize: "14px" }}>
              Dark,Substance
            </Typography>
          </Grid>
          <Divider
            sx={{
              bgcolor: "white",
              color: "black",
              height: "0.5px",
              width: "100%",
            }}
          />
          <Grid
            xs={12}
            pt={3}
            height="60%"
            item
            sx={{ border: "0px solid green" }}
          >
            <Typography variant="h5" sx={{ color: "white" }}>
              Official Trailer
            </Typography>
            <Typography pt={2} sx={{ fontSize: "17px", color: "white" }}>
              Mikael Blomkvist, a journalist, hires Lisbeth Salander, a computer
              hacker, to solve the mystery of a woman who has been missing for
              forty years. The two discover more than they bargained for.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box width="68%" mt={15} height="30%" sx={{ border: "0px solid green" }}>
        <Typography
          variant="h5"
          pl={1.5}
          color="white"
          sx={{ borderLeft: "3px solid yellow" }}
        >
          Featured Videos
        </Typography>
        <Stack
          direction="row"
          position="relative"
          height="80%"
          mt={6}
          spacing={5}
        >
          <ModalFCard />
          <ModalFCard />
          <ModalFCard />
          <ModalFCard />
        </Stack>
      </Box>
      <Box width="68%" mt={5} height="30%" sx={{ border: "0px solid green" }}>
        <Typography
          variant="h5"
          pl={1.5}
          color="white"
          sx={{ borderLeft: "3px solid yellow" }}
        >
          Related Videos
        </Typography>
        <Stack
          direction="row"
          position="relative"
          height="80%"
          mt={6}
          spacing={5}
        >
          <ModalFCard />
          <ModalFCard />
          <ModalFCard />
          <ModalFCard />
        </Stack>
      </Box>
    </Box>
  );
};

export default ModalChild;
