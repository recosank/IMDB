import React from "react";
import { Box, Typography, Button } from "@mui/material";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import ChatIcon from "@mui/icons-material/Chat";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AttachmentIcon from "@mui/icons-material/Attachment";

const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      alignContent="center"
      mt={20}
      sx={{ width: "100%", height: "22rem" }}
    >
      <Box
        display="flex"
        color="white"
        justifyContent="space-between"
        sx={{ width: "27%", border: "0px solid red" }}
      >
        <FacebookTwoToneIcon
          fontSize="small"
          sx={{ border: "0px solid red" }}
        />
        <InstagramIcon fontSize="small" sx={{ border: "0px solid red" }} />
        <ChatIcon fontSize="small" sx={{ border: "0px solid red" }} />
        <TwitterIcon fontSize="small" sx={{ border: "0px solid red" }} />
        <YouTubeIcon fontSize="small" sx={{ border: "0px solid red" }} />
      </Box>
      <Box
        display="flex"
        color="white"
        justifyContent="space-between"
        mt={5}
        sx={{ width: "70%", border: "0px solid red" }}
      >
        <Button
          sx={{ color: "white", border: "0px solid red" }}
          endIcon={<AttachmentIcon />}
        >
          Get the IMDb App
        </Button>
        <Button
          sx={{ color: "white", border: "0px solid red" }}
          endIcon={<AttachmentIcon />}
        >
          Help
        </Button>
        <Button
          sx={{ color: "white", border: "0px solid red" }}
          endIcon={<AttachmentIcon />}
        >
          Site Index
        </Button>
        <Button
          sx={{ color: "white", border: "0px solid red" }}
          endIcon={<AttachmentIcon />}
        >
          IMDbPro
        </Button>
        <Button
          sx={{ color: "white", border: "0px solid red" }}
          endIcon={<AttachmentIcon />}
        >
          Box Office Mojo
        </Button>
      </Box>
      <Button
        sx={{ color: "white", marginTop: "0.6rem" }}
        endIcon={<AttachmentIcon />}
      >
        IMDb Developer
      </Button>
      <Box
        display="flex"
        color="white"
        justifyContent="space-between"
        mt={1.8}
        sx={{ width: "70%", border: "0px solid red" }}
      >
        <Button sx={{ color: "white", border: "0px solid red" }}>
          Press Room
        </Button>
        <Button
          sx={{ color: "white", border: "0px solid red" }}
          endIcon={<AttachmentIcon />}
        >
          Advertising
        </Button>
        <Button
          sx={{ color: "white", border: "0px solid red" }}
          endIcon={<AttachmentIcon />}
        >
          Jobs
        </Button>
        <Button sx={{ color: "white", border: "0px solid red" }}>
          Conditions of Use
        </Button>
        <Button sx={{ color: "white", border: "0px solid red" }}>
          Privacy Policy
        </Button>
      </Box>
      <Button
        sx={{ color: "white", marginTop: "0.6rem" }}
        endIcon={<AttachmentIcon />}
      >
        Interest-Based Ads
      </Button>
      <Typography
        variant="p"
        mt={3}
        mb={4}
        sx={{ border: "0px solid red", color: "white ", fontSize: "0.7rem" }}
      >
        An AMAZONE company
      </Typography>
      <Typography
        variant="p"
        sx={{ border: "0px solid red", color: "#a9a9a9", fontSize: "0.75rem" }}
      >
        © 1990-2022 by IMDb.com, Inc.
      </Typography>
    </Box>
  );
};

export default Footer;
