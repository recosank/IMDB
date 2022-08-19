import React from "react";
import { IconButton, Typography, Card, Box } from "@mui/material";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";

const MiddleCard = ({ img }) => {
  return (
    <Card
      sx={{
        border: "0px solid green",
        zIndex: 1,
        position: "relative",
        width: "50%",
        display: "flex",
        bgcolor: "black",
        flexDirection: "column",
        marginLeft: "25px",
      }}
    >
      <Box
        display="flex"
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(data:image/png;base64,${
            img ? img.FImage.data : ""
          })`,
          border: "0px solid black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        alignItems="flex-end"
      >
        <IconButton aria-label="delete" sx={{ color: "white" }} size="large">
          <CollectionsOutlinedIcon fontSize="inherit" />
          <Typography sx={{ fontSize: "1rem" }} mt={1} ml={1}>
            images
          </Typography>
        </IconButton>
      </Box>
      <Typography
        sx={{ bgcolor: "black", color: "whitesmoke" }}
        mt={1}
        variant="p"
      >
        {img ? img.title : ""}
      </Typography>
    </Card>
  );
};

export default MiddleCard;
