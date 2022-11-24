import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
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
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
const ForgotPassword = (props) => {
  // Password hide / show
  const [showPassword, setShowPassword] = useState(false);
  // Formik Validation
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Provide a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: () => {
      console.log("submitting...");
      setTimeout(() => {
        console.log("submited!!");
      }, 2000);
    },
  });
  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;
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
                <FormikProvider value={formik}>
                  <Form autoComplete="on" noValidate onSubmit={handleSubmit}>
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
                      <TextField
                        fullWidth
                        autoComplete="current-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...getFieldProps("password")}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword((prev) => !prev)}
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
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
                        <LoadingButton
                          sx={{
                            borderRadius: 50,
                            p: 1.5,
                            height: "52px",
                          }}
                          className="btn-theme w-100"
                          fullWidth
                          type="submit"
                          loading={isSubmitting}
                        >
                          {isSubmitting ? "" : "Login"}
                        </LoadingButton>
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
                  </Form>
                </FormikProvider>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ForgotPassword;
