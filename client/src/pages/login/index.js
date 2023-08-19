import React from "react";
import Stack from "@mui/material/Stack";
import { Box, Button, Typography } from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import InputComp, {
  ICON_TYPE_PASSWORD,
  ICON_TYPE_USERNAME,
} from "../../components/InputComp";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

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
            Login
          </Typography>
          <form
            autoComplete="false"
            style={{
              width: "100%",
              marginTop: 30,
            }}
          >
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
              textAlign: "right",
              marginTop: 1,
            }}
          >
            <Typography fontSize={12} sx={{ opacity: ".6" }}>
              Forgot password?
            </Typography>
          </Box>
          <Box
            width="100%"
            sx={{
              marginTop: 4,
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
            >
              Login
            </Button>
          </Box>
          <Stack marginTop={6} alignItems="center">
            <Typography
              fontSize={12}
              sx={{
                opacity: ".6",
              }}
            >
              Or Sign Up Using
            </Typography>
            <Stack
              direction="row"
              marginTop={2}
              alignItems="center"
              justifyContent="center"
              // gap={1}
            >
              <Button
                sx={{
                  ":hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <FaFacebook size={36} />
              </Button>
              <Button
                color="error"
                sx={{
                  ":hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <AiFillGoogleCircle size={40} />
              </Button>
            </Stack>
          </Stack>
          <Stack
            alignItems="center"
            sx={{
              marginTop: "auto",
            }}
          >
            <Typography
              fontSize={12}
              sx={{
                opacity: ".6",
              }}
            >
              Have not account yet?
            </Typography>
            <Button onClick={handleRegister}>SIGN UP</Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Login;
