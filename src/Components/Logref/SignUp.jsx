import React, { useState } from "react";
import axios from "axios";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import GoVeganImg from "../../Images/go-vegan.png";
import {
  Grid,
  Box,
  Typography,
  styled,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Slide,
  TextField,
  Button,
  Link,
  OutlinedInput,
  InputAdornment,
  FormControl,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Signup(props) {
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

  // Formik Validation
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Full name is required"),
    email: Yup.string()
      .email("Provide a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
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
              {"Looks like you’re new here!"}
            </Typography>
            <Typography
              className="content"
              variant="body1"
              gutterBottom
              fontSize={{ xs: 12, md: 13, lg: 16 }}
              sx={{ fontWeight: 500 }}
            >
              {"Sign up with your mobile number to get started"}
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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box className="field" padding={{ xs: 2, md: 2, lg: 0 }}>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} md={12} lg={8}>
              <FormikProvider value={formik}>
                <Form autoComplete="on" noValidate onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    placeholder="Enter full name"
                    variant="outlined"
                    {...getFieldProps("username")}
                    error={Boolean(touched.username && errors.username)}
                    helperText={touched.username && errors.username}
                    sx={{ mb: 3 }}
                  />
                  <TextField
                    fullWidth
                    placeholder="Enter email"
                    variant="outlined"
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                    sx={{ mb: 3 }}
                  />
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
                        {isSubmitting ? "" : "Signup"}
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
                            fontWeight: 600,
                            ml: 0.5,
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            props?.setShowPanel(1);
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
  );
}

export default Signup;
