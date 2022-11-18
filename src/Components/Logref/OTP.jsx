import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import OTPInput from "otp-input-react";
import * as Yup from "yup";
import "./index.scss";
import GoVeganImg from "../../Images/go-vegan.png";

// Material Ints
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
  InputAdornment,
  FormControl,
} from "@mui/material";

function OTP(props) {
  // OTP Input
  const [OTP, setOTP] = useState("");

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
                {"Login"}
              </Typography>
              <Typography
                className="content"
                variant="body1"
                gutterBottom
                fontSize={{ xs: 12, md: 13, lg: 16 }}
                sx={{ fontWeight: 500 }}
              >
                {"Get access to your Orders, Wishlist and Recommendations"}
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
            className="field"
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
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontSize: 16,
                    fontWeight: 400,
                    mb: 0,
                    textAlign: "center",
                  }}
                >
                  {"Please enter the OTP sent to"}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 10,
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontSize: 15, fontWeight: 400, m: 0 }}
                  >
                    {"firoz@techverse.world"}
                  </Typography>
                  <Link
                    onClick={() => {
                      props?.setShowPanel(1);
                    }}
                    underline="none"
                    sx={{
                      color: "#A4D59E",
                      cursor: "pointer",
                      fontSize: 15,
                      ml: 1,
                    }}
                  >
                    {"Change"}
                  </Link>
                </Box>
                <OTPInput
                  className="otp"
                  value={OTP}
                  onChange={setOTP}
                  autoFocus
                  OTPLength={4}
                  otpType="any"
                  disabled={false}
                  secure
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 5,
                  }}
                >
                  <Button
                    sx={{
                      borderRadius: 50,
                      pt: 1.5,
                      pb: 1.5,
                      pl: 8,
                      pr: 8,
                    }}
                    className="btn-theme "
                    disableElevation
                    variant="contained"
                  >
                    {"Verify"}
                  </Button>
                </Box>
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
                    {"Not received your code?"}
                  </Typography>
                  <Link
                    underline="none"
                    color="inherit"
                    href="#"
                    sx={{
                      p: 0,
                      fontSize: 16,
                      fontWeight: 600,
                      ml: 0.5,
                      color: "#A4D59E",
                    }}
                    onClick={() => {
                      props?.setShowPanel(1);
                    }}
                  >
                    {"Resend code"}
                  </Link>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 1,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ fontSize: "14px", fontWeight: 400, mb: 3 }}
                  >
                    {"New to Wegan?"}
                  </Typography>
                  <Link
                    underline="none"
                    color="inherit"
                    href="#"
                    sx={{ p: 0, fontSize: 16, ml: 0.5 }}
                    onClick={() => {
                      props?.setShowPanel(2);
                    }}
                  >
                    {"Signup"}
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default OTP;
