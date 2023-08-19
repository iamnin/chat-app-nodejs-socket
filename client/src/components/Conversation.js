import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { GoDeviceCameraVideo } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { RiAttachment2 } from "react-icons/ri";
import { FiSmile } from "react-icons/fi";
import { PiTelegramLogoLight } from "react-icons/pi";
import CardMessage, { MY_MESSAGE, OTHER_MESSAGE } from "./CardMessage";

const Conversation = () => {
  return (
    <Stack height="100%">
      <Stack
        sx={{ height: "90px" }}
        justifyContent="space-between"
        direction="row"
        paddingX="33px"
        paddingY="25px"
        border="1px solid #ccc"
        alignItems="center"
      >
        <Stack direction="row" alignItems="center">
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
          <Stack ml={1} justifyContent="center">
            <Typography fontWeight={600} fontSize={20}>
              Nin
            </Typography>
            <Typography
              fontSize={12}
              sx={{
                opacity: ".6",
              }}
            >
              online
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap={6} alignItems="center">
          <Box
            sx={{
              cursor: "pointer",
            }}
          >
            <GoDeviceCameraVideo size={26} />
          </Box>
          <Box
            sx={{
              cursor: "pointer",
            }}
          >
            <BsTelephone size={24} />
          </Box>
          <Box
            sx={{
              cursor: "pointer",
            }}
          >
            <CiSearch size={30} />
          </Box>
        </Stack>
      </Stack>
      <Stack
        flex={1}
        sx={{
          backgroundColor: "#F0F4FA",
        }}
        p={2}
      >
        <Stack gap={4}>
          {/* <Stack flexDirection="row" alignItems="flex-end">
            <Box
              sx={{
                width: "24px",
                height: "24px",
                cursor: "pointer",
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
            <Box
              sx={{
                padding: "12px 24px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                marginLeft: "8px",
              }}
            >
              <Typography>Have you account?</Typography>
            </Box>
            <Typography
              fontSize={14}
              sx={{
                ml: 1,
                opacity: ".6",
              }}
            >
              0:12
            </Typography>
          </Stack>
          <Stack alignItems="flex-end" justifyContent="flex-end" gap={1}>
            <Stack direction="row" alignItems="flex-end">
              <Box
                sx={{
                  padding: "12px 24px",
                  backgroundColor: "#5B96F7",
                  borderRadius: "10px",
                  color: "#fff",
                }}
              >
                <Typography>Have you account?</Typography>
              </Box>
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  marginLeft: "8px",
                  cursor: "pointer",
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
            </Stack>
            <Typography
              fontSize={14}
              sx={{
                ml: 1,
                opacity: ".6",
              }}
            >
              0:12
            </Typography>
          </Stack> */}
          <CardMessage type={MY_MESSAGE} />
          <CardMessage type={OTHER_MESSAGE} />
        </Stack>
      </Stack>
      <Box
        p={2}
        height="90px"
        sx={{
          border: "1px solid #ccc",
        }}
      >
        <Stack direction="row" alignItems="center" height="100%">
          <Stack
            flex={1}
            direction="row"
            alignItems="center"
            height="100%"
            sx={{
              backgroundColor: "#EAF2FE",
              borderRadius: "10px",
            }}
          >
            <RiAttachment2
              size={18}
              style={{
                marginLeft: "16px",
                cursor: "pointer",
              }}
            />
            <input
              style={{
                border: "none",
                height: "30px",
                fontSize: "16px",
                flex: "1",
                outline: "none",
                backgroundColor: "transparent",
                marginLeft: "10px",
                display: "flex",
                alignItems: "center",
              }}
              placeholder="Write a message..."
              type="text"
            />
            <Box mr={2}>
              <FiSmile
                size={20}
                style={{
                  cursor: "pointer",
                }}
              />
            </Box>
          </Stack>
          <Box
            ml={2}
            sx={{
              width: "56px",
              height: "56px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "12px",
              backgroundColor: "#5B96F7",
              cursor: "pointer",
            }}
          >
            <PiTelegramLogoLight size={24} fill="#fff" />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Conversation;
