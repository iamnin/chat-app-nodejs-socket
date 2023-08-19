import React from "react";
import { Box, Stack } from "@mui/material";
import SideBar from "../../components/SideBar";
import Chat from "../../components/Chat";
import Conversation from "../../components/Conversation";

const Room = () => {
  return (
    <Box>
      <Stack direction="row" sx={{ height: "100vh" }}>
        <Box
          sx={{
            backgroundColor: "#F0F4FA",
            flex: 1,
            maxWidth: "8%",
          }}
        >
          <SideBar />
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            flex: 1,
            maxWidth: "23%",
          }}
        >
          <Chat />
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            flex: 1,
          }}
        >
          <Conversation />
        </Box>
        {/* <Box
          sx={{
            backgroundColor: "yellow",
            flex: 1,
            maxWidth: "23%",
          }}
        >
          File
        </Box> */}
      </Stack>
    </Box>
  );
};

export default Room;
