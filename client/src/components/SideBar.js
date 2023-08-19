import { Box, Button, Divider, Stack } from "@mui/material";
import logo from "../assets/images/logo.png";
import React from "react";
import {
  AiOutlineMessage,
  AiOutlinePhone,
  AiOutlineSetting,
} from "react-icons/ai";

const buttonActiveStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  borderRadius: "12px",
  backgroundColor: "#5B96F7",
};

const buttonNotActiveStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  borderRadius: "12px",
};

const SideBar = () => {
  return (
    <Stack
      alignItems="center"
      sx={{
        height: "100%",
      }}
    >
      <Stack>
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logo} alt="Error" />
        </Box>
        <Stack alignItems="center" marginTop={6}>
          <Box sx={buttonActiveStyles}>
            <AiOutlineMessage size={22} fill="#fff" />
          </Box>
          <Box sx={buttonNotActiveStyles} marginTop={4}>
            <AiOutlinePhone size={22} />
          </Box>
          <Divider
            component={"div"}
            sx={{
              width: "70px",
              border: "1px solid #B4B4B4",
              marginY: 2,
            }}
          />
          <Box sx={buttonNotActiveStyles}>
            <AiOutlineSetting size={22} />
          </Box>
        </Stack>
      </Stack>
      <Box
        sx={{
          marginTop: "auto",
          marginBottom: 4,
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
      </Box>
    </Stack>
  );
};

export default SideBar;
