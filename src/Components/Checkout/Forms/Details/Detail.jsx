import React, { useContext, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormContext } from "../../Checkout";
import * as yup from "yup";
import Summary from "../../Summary";
import LoginDialog from "../../../Logref/Dialog";
// Material Ints
import { Grid, Box, Typography, Button } from "@mui/material";
import { grey } from "@mui/material/colors";

function Detail() {
  // Dialog popup
  const [dialog, setDialog] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => <p className="error-msg">{message}</p>;

  const ValidationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  return (
    <>
      <Grid container spacing={{ xs: 5, md: 12 }} sx={{ mb: 6 }}>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{ border: "1px solid #F2F2F2", borderRadius: 12 }}
            padding={{ xs: 2, md: 3, lg: 3.5 }}
          >
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={ValidationSchema}
              onSubmit={(values) => {
                const data = { ...formData, ...values };
                setFormData(data);
                setActiveStepIndex(activeStepIndex + 1);
              }}
            >
              <Form>
                <Typography
                  className="heading3"
                  gutterBottom
                  variant="h3"
                  sx={{ mb: 4 }}
                >
                  {"Details"}
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Field
                    name="email"
                    className="w-100"
                    placeholder="Your email address"
                  />
                  <ErrorMessage name="email" render={renderError} />
                </Box>
                <Box sx={{ mb: 3, position: "relative" }}>
                  <Field
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    type="password"
                  />
                  <Button
                    size="small"
                    sx={{
                      textTransform: "capitalize",
                      position: "absolute",
                      right: 10,
                      top: 12,
                      color: grey[800],
                      borderRadius: 10,
                    }}
                    variant="text"
                  >
                    {"Forgot password?"}
                  </Button>
                  <ErrorMessage name="password" render={renderError} />
                </Box>
                <Button
                  type="submit"
                  className="btn-theme w-100"
                  sx={{
                    mt: 4,
                    pt: 1.9,
                    pb: 1.9,
                    pl: 5,
                    pr: 5,
                    borderRadius: 10,
                  }}
                >
                  {"Create account"}
                </Button>
              </Form>
            </Formik>
            <Grid container spacing={2} marginTop={{ xs: 0, md: 3, lg: 3 }}>
              <Grid item xs={12} sm={6} md={6}>
                <Button
                  className="btn-login w-100"
                  sx={{ pt: 1.5, pb: 1.5, borderRadius: 12 }}
                >
                  {"Continue as Guest"}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Button
                  onClick={() => handleOpen()}
                  className="btn-login w-100"
                  sx={{ pt: 1.5, pb: 1.5, borderRadius: 12 }}
                >
                  {"Create account"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Summary />
        </Grid>
      </Grid>
      <LoginDialog
        isDialogOpened={isOpen}
        handleCloseDialog={() => setIsOpen(false)}
      />
    </>
  );
}

export default Detail;
