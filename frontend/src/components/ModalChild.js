import React, { useState } from "react";
import { Typography, Divider, Grid, Box, Container } from "@mui/material";
import black from "./../images/black.jpg";
import AddIcon from "@mui/icons-material/Add";
import bk from "./../images/bk.jpg";
import ModalFCard from "./ModalFCard";
import { Stack } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const ModalChild = ({ fc }) => {
  const [expand, setExpand] = useState(false);
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        bgcolor: "black",
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
          marginTop: "2%",
          marginLeft: "75%",
        }}
      />
      <Box
        display="flex"
        width="100%"
        mt={5}
        sx={{ border: "2px solid black", height: "45%" }}
      >
        <video controls width="70%" src="" height="100%" />
        <Grid container p={3} width="30%" sx={{ bgcolor: "#121212" }}>
          <Grid xs={4} height="30%" item>
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
          <Grid xs={8} item p={1} height="30%">
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
          <Grid xs={12} pt={3} height="60%" item>
            <Typography variant="h5" sx={{ color: "white" }}>
              Official Trailer
            </Typography>
            <Typography pt={2} sx={{ fontSize: "14px", color: "white" }}>
              {expand ? (
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  "A mythic and emotionally charged hero's journey, 'Dune' tells
                  the story of Paul Atreides, a brilliant and gifted young man
                  born into a great destiny beyond his understanding, who must
                  travel to the most dangerous planet in the universe to ensure
                  the future of his family and his people. As malevolent forces
                  explode into conflict over the planet's exclusive supply of
                  the most precious resource in existence-a commodity capable of
                  unlocking humanity's greatest potential-only those who can
                  conquer their fear will survive. —Warner Bros."
                  <KeyboardArrowUpIcon onClick={(e) => setExpand(false)} />
                </span>
              ) : (
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  "A mythic and emotionally charged hero's journey, 'Dune' tells
                  the story of Paul Atreides, a brilliant and gifted young man
                  born into a great destiny beyond his understanding, who must
                  t" <KeyboardArrowDownIcon onClick={(e) => setExpand(true)} />
                </span>
              )}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box width="100%" mt={15} height="30%">
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
      <Box width="100%" mt={5} height="30%">
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
    </Container>
  );
};

export default ModalChild;
