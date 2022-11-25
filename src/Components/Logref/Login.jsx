import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
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
import { grey } from "@mui/material/colors";
import { LoadingButton } from "@mui/lab";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Login(props) {
  const { onClose } = props;
  const [showPassword, setShowPassword] = useState(false);
  // OTP Input
  const [OTP, setOTP] = useState("");
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  // Form Validation
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Provide a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(4, "Password has to be longer than 4 characters!")
      .required("Password is required"),
    // phone: Yup.string()
    //   .required("This field is Required")
    //   .matches(
    //     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    //     "Phone number is not valid"
    //   ),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,

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
      <Grid container className="panel h-100">
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
                width: "100%",
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
              <Grid item xs={12} sm={12} md={10}>
                <FormikProvider value={formik}>
                  <Form autoComplete="on" noValidate onSubmit={handleSubmit}>
                    <Box sx={{ mb: 3 }}>
                      <TextField
                        fullWidth
                        placeholder="Enter email or mobile number"
                        variant="outlined"
                        {...getFieldProps("email")}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Box>
                    {/* <Box sx={{ mb:3}}>
                                                <TextField 
                                                    fullWidth  
                                                    placeholder="Enter mobile number"
                                                    variant="outlined"
                                                    {...getFieldProps("phone")}
                                                    error={Boolean(touched.phone && errors.phone)}
                                                    helperText={touched.phone && errors.phone}
                                                />
                                            </Box> */}
                    <Box sx={{ mb: 2, position: "relative" }}>
                      <FormControl fullWidth>
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
                                  onClick={() =>
                                    setShowPassword((prev) => !prev)
                                  }
                                >
                                  {showPassword ? (
                                    <VisibilityOff sx={{ color: grey[500] }} />
                                  ) : (
                                    <Visibility sx={{ color: grey[500] }} />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </FormControl>
                      <Link
                        onClick={() => {
                          props?.setShowPanel(3);
                        }}
                        underline="none"
                        sx={{
                          position: "absolute",
                          color: "#A4D59E",
                          right: 65,
                          top: 15,
                          cursor: "pointer",
                          fontSize: "14px",
                        }}
                      >
                        {"Forgot?"}
                      </Link>
                    </Box>
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{ fontSize: 18, fontWeight: 500, mb: 3 }}
                    >
                      By continuing, you agree to Wegan’s{" "}
                      <Link
                        underline="none"
                        color="inherit"
                        href="#"
                        sx={{ fontSize: 13 }}
                      >
                        Terms of Use
                      </Link>{" "}
                      and{" "}
                      <Link
                        underline="none"
                        color="inherit"
                        href="#"
                        sx={{ fontSize: 13 }}
                      >
                        Privacy Policy.
                      </Link>
                    </Typography>
                    <Grid
                      container
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Grid item xs={8} sm={8} md={8}>
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
                        <Typography
                          variant="body1"
                          gutterBottom
                          sx={{
                            fontSize: 18,
                            fontWeight: 500,
                            mt: 3,
                            mb: 2,
                            textAlign: "center",
                          }}
                        >
                          {"OR"}
                        </Typography>
                        <Button
                          onClick={() => {
                            props?.setShowPanel(4);
                          }}
                          sx={{ borderRadius: 50, p: 1.5, fontSize: 16 }}
                          className="btn-secondary w-100"
                          disableElevation
                          variant="outlined"
                        >
                          {"Request OTP"}
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
                            sx={{
                              fontSize: "14px",
                              fontWeight: 400,
                              mb: 3,
                            }}
                          >
                            {"Existing User?"}
                          </Typography>
                          <Link
                            underline="none"
                            color="inherit"
                            sx={{
                              p: 0,
                              fontSize: 16,
                              fontWeight: 600,
                              ml: 0.5,
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              props?.setShowPanel(2);
                            }}
                          >
                            {"Signup"}
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
}

export default Login;
