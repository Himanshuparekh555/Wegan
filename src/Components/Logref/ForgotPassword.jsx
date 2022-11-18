import React, { useState } from "react";
import GoVeganImg from "../../Images/go-vegan.png";
import "./index.scss";
// Material Ints
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const ForgotPassword = (props) => {
  // Password hide / show
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Grid container className="panel">
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          sx={{ alignItems: "stretch", flexWrap: "wrap" }}
        >
          <Box
            className="sidebox h-100"
            sx={{ p: 4, display: "flex", flexWrap: "wrap" }}
          >
            <Box>
              <Typography
                className="title"
                variant="h1"
                gutterBottom
                sx={{ fontWeight: 600 }}
                fontSize={{ xs: 22, md: 22, lg: 26 }}
                marginBottom={{ xs: 2, md: 2, lg: 3 }}
              >
                {"Forgot Your Password?"}
              </Typography>
              <Typography
                className="content"
                variant="body1"
                gutterBottom
                fontSize={{ xs: 12, md: 13, lg: 16 }}
                sx={{ fontWeight: 500 }}
              >
                {"Please enter your email address below to receive a OTP."}
              </Typography>
            </Box>
            <Box
              sx={{
                alignSelf: "flex-end",
                width: 1000,
                textAlign: "center",
              }}
            >
              <img alt="Wegan" src={GoVeganImg} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          sx={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: "center",
          }}
        >
          <Box
            className="field w-100"
            padding={{ xs: 2, md: 2, lg: 0 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid item xs={12} md={12} lg={8}>
                <Box sx={{ mb: 5, position: "relative" }}>
                  <TextField
                    fullWidth
                    value="firoz@techverse.world"
                    variant="outlined"
                    disabled
                  />
                  <Link
                    onClick={() => {
                      props?.setShowPanel(1);
                    }}
                    underline="none"
                    sx={{
                      position: "absolute",
                      color: "#A4D59E",
                      right: 20,
                      top: 15,
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    {"Change?"}
                  </Link>
                </Box>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{ fontSize: 18, fontWeight: 500, mb: 3 }}
                >
                  {"OTP sent to Mobile"}
                </Typography>
                <Box sx={{ mb: 3, position: "relative" }}>
                  <TextField
                    fullWidth
                    placeholder="Enter OTP"
                    variant="outlined"
                  />
                  <Link
                    underline="none"
                    sx={{
                      position: "absolute",
                      color: "#333",
                      right: 20,
                      top: 15,
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    {"Resend?"}
                  </Link>
                </Box>
                <FormControl fullWidth sx={{ mb: 3 }}>
                  <OutlinedInput
                    placeholder="Password"
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility color="disabled" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid item xs={8}>
                    <Button
                      sx={{ borderRadius: 50, p: 1.5 }}
                      className="btn-theme w-100"
                      disableElevation
                      variant="contained"
                    >
                      {"Login"}
                    </Button>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 3,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "14px", fontWeight: 400, mb: 3 }}
                      >
                        {"Existing User?"}
                      </Typography>
                      <Link
                        underline="none"
                        color="inherit"
                        onClick={() => {
                          props?.setShowPanel(1);
                        }}
                        sx={{
                          p: 0,
                          fontWeight: 600,
                          ml: 0.5,
                          cursor: "pointer",
                        }}
                      >
                        {"Log in"}
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ForgotPassword;
