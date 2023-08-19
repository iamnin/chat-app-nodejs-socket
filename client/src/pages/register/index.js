import React from "react";
import Stack from "@mui/material/Stack";
import { Box, Button, Typography } from "@mui/material";
import InputComp, {
  ICON_TYPE_NAME,
  ICON_TYPE_PASSWORD,
  ICON_TYPE_USERNAME,
} from "../../components/InputComp";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {};

  return (
    <Stack alignItems="center" justifyContent="center" height="100vh">
      <Box
        sx={{
          width: "26vw",
          height: "80vh",
          backgroundColor: "#fff",
          borderRadius: "10px",
        }}
      >
        <Stack
          padding={8}
          justifyContent="center"
          alignItems="center"
          direction="column"
          height="inherit"
        >
          <Typography fontSize={40} fontWeight={700}>
            Register
          </Typography>
          <form
            autoComplete="false"
            style={{
              width: "100%",
              marginTop: 30,
            }}
          >
            <InputComp
              labelText="Name"
              placeholder="Type your name"
              startAdorment={ICON_TYPE_NAME}
              onChange={(e) => {
                console.log("e", e.target.value);
              }}
            />
            <InputComp
              labelText="Username"
              placeholder="Type your username"
              startAdorment={ICON_TYPE_USERNAME}
            />
            <InputComp
              labelText="Password"
              placeholder="Type your password"
              startAdorment={ICON_TYPE_PASSWORD}
              type="password"
            />
          </form>
          <Box
            width="100%"
            sx={{
              marginTop: 8,
            }}
          >
            <Button
              fullWidth="true"
              sx={{
                background:
                  "linear-gradient(to right, #EC6EAD, #3494E6)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
                color: "#fff",
                borderRadius: "20px",
                height: 40,
              }}
              onClick={handleRegister}
            >
              Register
            </Button>
          </Box>
          <Stack
            alignItems="center"
            sx={{
              marginTop: "auto",
            }}
          >
            <Button onClick={handleLogin}>SIGN IN</Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Register;
