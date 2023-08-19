import React from "react";
import { AiOutlineUser, AiOutlineAliwangwang } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";

export const ICON_TYPE_USERNAME = 1;
export const ICON_TYPE_PASSWORD = 2;
export const ICON_TYPE_NAME = 3;

const InputComp = (props) => {
  return (
    <Box
      sx={{
        marginTop: 2,
      }}
    >
      <Typography>{props.labelText ?? ""}</Typography>
      <TextField
        {...props}
        id="standard-size-normal"
        placeholder={props.placeholder ?? ""}
        variant="standard"
        fullWidth="true"
        autoComplete="false"
        sx={{
          marginTop: "8px",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {props.startAdorment === ICON_TYPE_USERNAME && (
                <AiOutlineUser size={20} />
              )}
              {props.startAdorment === ICON_TYPE_PASSWORD && (
                <CiLock size={20} />
              )}
              {props.startAdorment === ICON_TYPE_NAME && (
                <AiOutlineAliwangwang size={20} />
              )}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
export default InputComp;
