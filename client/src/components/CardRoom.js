import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const CardRoom = ({ active = false }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        height: "80px",
        cursor: "pointer",
        borderRadius: "15px",
        backgroundColor: active ? "#5B96F7" : "fff",
        color: active ? "#fff" : "#000",
        boxShadow: !active
          ? "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
          : "",
        ":hover": {
          backgroundColor: !active ? "rgba(204,204,204,0.4)" : "",
        },
      }}
    >
      <Box
        sx={{
          width: "48px",
          height: "48px",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
          alt="Error"
        />
      </Box>
      <Stack flex={1} marginLeft={1}>
        <Typography fontWeight={600}>Room 1</Typography>
        <Typography
          fontSize={14}
          sx={{
            opacity: ".6",
          }}
        >
          Message
        </Typography>
      </Stack>
      <Box
        sx={{
          height: "100%",
          fontSize: 14,
          opacity: ".6",
        }}
      >
        9:24
      </Box>
    </Stack>
  );
};

export default CardRoom;
