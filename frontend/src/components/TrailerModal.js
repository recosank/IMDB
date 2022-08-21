import React from "react";
import {
  Chip,
  Stack,
  Button,
  Container,
  Box,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Cast from "./cast";
import play from "../images/play.png";
import brie from "../images/brie.jpg";
import jim from "../images/jim.jpg";
import leonardo from "../images/leonardo.jpg";
import rami from "../images/rami.jpg";
import robert from "../images/robert.jpg";
import roony from "../images/roony.jpg";
import scralet from "../images/scralet.jpg";
import tom from "../images/tom.jpg";
import jax from "../images/jax.jpg";
import tara from "../images/tara.jpg";
import kennue from "../images/kennue.jpg";
import methew from "../images/methew.jpg";

const TrailerModal = ({ fc, data }) => {
  console.log(data);
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        backgroundColor: "black",
        top: "0",
      }}
    >
      <CloseOutlinedIcon
        onClick={fc}
        sx={{
          fontSize: "30px",
          position: "absolute",
          color: "white",
          marginLeft: "95%",
          marginTop: "2%",
        }}
      />
      <Container
        sx={{
          backgroundColor: "black",
        }}
      >
        <Box mt={10} display="flex" width="100%" justifyContent="space-between">
          <Box>
            <Typography variant="h3" color="white">
              {data.name}
            </Typography>
            <Typography sx={{ fontSize: "18px", color: "lightgray" }}>
              2014-PG-13-2h 49m
            </Typography>
          </Box>
          <Box
            width="40%"
            display="flex"
            justifyContent="space-around"
            alignContent="center"
            alignItems="center"
          >
            <Box>
              <Typography sx={{ fontSize: "17px", color: "lightgray" }}>
                IMDB RATING
              </Typography>
              <Button
                variant="text"
                size="large"
                sx={{ fontSize: "25px", color: "white" }}
                startIcon={
                  <StarIcon
                    size="45px"
                    sx={{ fontSize: "5px", color: "yellow" }}
                  />
                }
              >
                0<span style={{ color: "lightgray" }}>/10</span>
              </Button>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "17px", color: "lightgray" }}>
                YOUR RATING
              </Typography>
              <Button
                variant="text"
                size="large"
                sx={{ fontSize: "25px", color: "blue" }}
                startIcon={
                  <StarBorderIcon
                    size="45px"
                    sx={{ fontSize: "5px", color: "blue" }}
                  />
                }
              >
                Rate
              </Button>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "17px", color: "lightgray" }}>
                POPULARITY
              </Typography>
              <Button
                variant="text"
                size="large"
                sx={{ fontSize: "25px", color: "white" }}
                startIcon={
                  <TrendingDownOutlinedIcon
                    size="45px"
                    sx={{ fontSize: "5px", color: "red" }}
                  />
                }
              >
                0<span style={{ color: "lightgray", fontSize: "21px" }}>0</span>
              </Button>
            </Box>
          </Box>
        </Box>
        <Grid container mt={3} columnSpacing={2} rowSpacing={3} height="14%">
          <Grid item xs={3} height="30rem">
            <img
              src={`data:image/png;base64,${data.PImage.data}`}
              width="100%"
              height="100%"
              style={{ objectFit: "fill", objectPosition: "center" }}
            />
          </Grid>
          <Grid item xs={9} height="30rem">
            <img
              src={`data:image/png;base64,${data.MImage.data}`}
              width="50%"
              height="14.7%"
              style={{ position: "absolute" }}
            />
            <img
              src={play}
              style={{
                position: "absolute",
                width: "5%",
                top: "13%",
                left: "57%",
              }}
            />
          </Grid>
          <Grid item xs={7}>
            <Stack direction="row" spacing={2}>
              <Chip
                label="Drugs"
                sx={{
                  padding: "20px 4px",
                  borderRadius: "150px",
                  color: "white",
                }}
                variant="outlined"
              />
              <Chip
                label="Mystery"
                sx={{
                  padding: "20px 4px",
                  borderRadius: "150px",
                  color: "white",
                }}
                variant="outlined"
              />
              <Chip
                label="Hacking"
                sx={{
                  padding: "20px 4px",
                  borderRadius: "150px",
                  color: "white",
                }}
                variant="outlined"
              />
            </Stack>
            <Stack
              mt={3}
              direction="column"
              spacing={3}
              divider={<Divider sx={{ bgcolor: "gray" }} />}
            >
              <Typography variant="p" sx={{ color: "white" }}>
                {data.title}
              </Typography>
              <Typography variant="p" sx={{ color: "white" }}>
                Director : Christopher Nolan
              </Typography>
              <Typography variant="p" sx={{ color: "white" }}>
                Writers : Jonathan NolanChristopher Nolan
              </Typography>
              <Typography variant="p" sx={{ color: "white" }}>
                Stars : Matthew McConaugheyAnne HathawayJessica Chastain
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid container mt={10} height="77%">
          <Grid item xs={9}>
            <Box
              item
              display="flex"
              alignItems="center"
              p={1}
              height="2%"
              sx={{
                background:
                  "linear-gradient(310deg, transparent 70%,yellow 50% )",
                border: "1px solid yellow",
              }}
            >
              <Typography flexGrow="2" sx={{ fontWeight: "1000px" }}>
                Top rated movie #28
              </Typography>
              <Typography flexGrow="1" sx={{ color: "lightgray" }}>
                Won 1 Oscar
              </Typography>
              <Typography flexGrow="3" sx={{ color: "lightgray" }}>
                44 wins & 148 nominations total
              </Typography>
              <Typography flexGrow="0.2" sx={{}}></Typography>
            </Box>
            <Grid container width="100%" direction="row" mt={9} height="65%">
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  pl={1.5}
                  color="#bababa"
                  sx={{ borderLeft: "3px solid yellow" }}
                >
                  Top cast
                </Typography>
              </Grid>
              <Grid item xs={6} height="98%">
                <Stack mt={4} spacing={4}>
                  <Cast as="Elio periman" nam="Timothée Chalamet" img={tom} />
                  <Cast
                    as="Natasha Romanoff"
                    nam="scarlett johansson"
                    img={scralet}
                  />
                  <Cast as="Elliot Alderson" nam="Rami Malek" img={rami} />
                  <Cast as="Lisbeth Salander" nam="rooney mara" img={roony} />
                  <Cast as="Sheldon Cooper" nam="jim parsons" img={jim} />
                  <Cast as="Tony Stark" nam="Robert Downey Jr." img={robert} />
                  <Cast as="john wick" nam="Keanu Reeves" img={kennue} />
                  <Cast as="Tara Knowles" nam="Maggie Siff" img={tara} />
                </Stack>
              </Grid>
              <Grid item xs={6} height="98%">
                <Stack mt={4} spacing={4}>
                  <Cast as="Elliot Alderson" nam="Rami Malek" img={rami} />
                  <Cast as="Lisbeth Salander" nam="rooney mara" img={roony} />
                  <Cast
                    as="Jordan Belfort"
                    nam="leonardo dicaprio"
                    img={leonardo}
                  />
                  <Cast
                    as="Mark Hanna"
                    nam="Matthew McConaughey"
                    img={methew}
                  />
                  <Cast as="Elio periman" nam="Timothée Chalamet" img={tom} />
                  <Cast
                    as="Natasha Romanoff"
                    nam="scarlett johansson"
                    img={scralet}
                  />
                  <Cast as="Carol Danvers" nam="Brie Larson" img={brie} />
                  <Cast as="Jax Teller" nam="Charlie Hunnam" img={jax} />
                </Stack>
              </Grid>
            </Grid>
            <Grid container mt={10}>
              <Typography
                variant="p"
                pl={1.5}
                color="white"
                sx={{ fontSize: "2rem", borderLeft: "3px solid yellow" }}
              >
                Storyline
              </Typography>
              <Typography
                variant="p"
                mt={5}
                color="white"
                sx={{ lineHeight: "35px" }}
              >
                A mythic and emotionally charged hero's journey, "Dune" tells
                the story of Paul Atreides, a brilliant and gifted young man
                born into a great destiny beyond his understanding, who must
                travel to the most dangerous planet in the universe to ensure
                the future of his family and his people. As malevolent forces
                explode into conflict over the planet's exclusive supply of the
                most precious resource in existence-a commodity capable of
                unlocking humanity's greatest potential-only those who can
                conquer their fear will survive. —Warner Bros.
              </Typography>
              <Divider
                width="100%"
                sx={{ backgroundColor: "white", marginTop: "5%" }}
              />
              <Grid
                container
                mt={3}
                justifyContent="start"
                direction="row"
                rowSpacing={2}
                sx={{ border: "2px solid red" }}
              >
                <Grid item xs={12}>
                  <Typography
                    varient="p"
                    sx={{ color: "white", fontWeight: "1000" }}
                  >
                    Genres
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Button sx={{ padding: "0", margin: "0" }}>Action</Button>
                </Grid>
                <Grid item ml={3} xs={8} sx={{ border: "2px solid red" }}>
                  <li>
                    <Button>Action</Button>
                  </li>
                  <li>
                    <Button>Action</Button>
                  </li>
                  <li>
                    <Button>Action</Button>
                  </li>
                  <li>
                    <Button>Action</Button>
                  </li>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TrailerModal;
