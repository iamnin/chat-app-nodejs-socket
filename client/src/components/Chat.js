import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { CiSearch } from "react-icons/ci";
import CardRoom from "./CardRoom";

const Chat = () => {
  return (
    <Stack p={3}>
      <Typography fontSize={30} fontWeight={700}>
        Chats
      </Typography>
      <Stack>
        <Box
          sx={{
            height: "50px",
            width: "100%",
            borderRadius: "20px",
            background: "#EAF2FE",
            display: "flex",
            alignItems: "center",
            padding: "13px 18px",
            marginTop: "31px",
          }}
        >
          <CiSearch size={26} />
          <input
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              marginLeft: 2,
            }}
            type="text"
            placeholder="Search"
          />
        </Box>
      </Stack>
      <Typography fontSize={16} color={"#676667"} marginY={3}>
        All Chats
      </Typography>
      <Stack gap={2}>
        <CardRoom active />
        <CardRoom />
        <CardRoom />
      </Stack>
      {/* <Stack>
        <Stack
          direction="row"
          alignItems="center"
          p={2}
          sx={{
            height: "80px",
            borderRadius: "15px",
            backgroundColor: "#5B96F7",
            color: "#fff",
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
            <Typography>Room 1</Typography>
            <Typography>Message</Typography>
          </Stack>
          <Box
            sx={{
              height: "100%",
            }}
          >
            Time
          </Box>
        </Stack>
      </Stack> */}
    </Stack>
  );
};

export default Chat;
