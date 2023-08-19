import { Box, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";

export const MY_MESSAGE = "FIRST";
export const OTHER_MESSAGE = "SECOND";

const CardMessage = ({ type = MY_MESSAGE }) => {
  if (type === MY_MESSAGE)
    return (
      <Stack flexDirection="row" alignItems="flex-end">
        <Tooltip title="You" placement="top-start">
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
        </Tooltip>
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
    );

  if (type === OTHER_MESSAGE)
    return (
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
          <Tooltip title="Nin" placement="top-start">
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
          </Tooltip>
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
      </Stack>
    );
};

export default CardMessage;
