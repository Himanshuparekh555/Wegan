import React, { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormContext } from "../../Checkout";
import * as yup from "yup";
import SummaryDetails from "../../Summary";
import {
  Grid,
  Box,
  Typography,
  FormControl,
  styled,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from "@mui/material";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 20,
  height: 20,
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#C3C3C3",
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#CFE9CC",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 20,
    height: 20,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#CFE9CC",
  },
});
// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      sx={{
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}
function Shipping() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => <p className="error-msg">{message}</p>;

  const ValidationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    mobile: yup
      .string()
      .required()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Mobile number is not valid"
      ),
    zipcode: yup
      .string()
      .required("Zipcode is not valid")
      .test("len", (val) => val && val.length === 5),
    address: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    country: yup.string().required(),
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
                name: "",
                email: "",
                mobile: "",
                zipcode: "",
                address: "",
                city: "",
                state: "",
                country: "",
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
                  {"Shipping Details"}
                </Typography>
                <Button
                  className="btn-theme"
                  sx={{
                    mb: 3,
                    pt: 1.5,
                    pb: 1.5,
                    pl: 4,
                    pr: 4,
                    borderRadius: 10,
                  }}
                >
                  <LocationSearchingIcon sx={{ mr: 1 }} />{" "}
                  {"Use my Current Location"}
                </Button>
                <Box sx={{ mb: 3 }}>
                  <Field
                    name="name"
                    className="w-100"
                    placeholder="Full Name"
                  />
                  <ErrorMessage name="name" render={renderError} />
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Field
                    name="email"
                    className="w-100"
                    placeholder="Your email address"
                  />
                  <ErrorMessage name="email" render={renderError} />
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Field
                    name="mobile"
                    className="form-control"
                    placeholder="Mobile number"
                    type="text"
                  />
                  <ErrorMessage name="mobile" render={renderError} />
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Field
                    name="address"
                    className="form-control"
                    placeholder="Address (area and street)"
                    type="text"
                  />
                  <ErrorMessage name="address" render={renderError} />
                </Box>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={6}>
                    <Field
                      name="zipcode"
                      className="form-control"
                      placeholder="Pincode"
                      type="text"
                    />
                    <ErrorMessage name="zipcode" render={renderError} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Field
                      name="locality"
                      className="form-control"
                      placeholder="Locality"
                      type="text"
                    />
                    <ErrorMessage name="locality" render={renderError} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Field
                      name="city"
                      className="form-control"
                      placeholder="City"
                      type="text"
                    />
                    <ErrorMessage name="city" render={renderError} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Field
                      name="state"
                      className="form-control"
                      placeholder="State"
                      type="text"
                    />
                    <ErrorMessage name="state" render={renderError} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} sx={{ mb: 3 }}>
                    <Field
                      name="country"
                      className="form-control"
                      placeholder="Country"
                      type="text"
                    />
                    <ErrorMessage name="country" render={renderError} />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} sx={{ mb: 3 }}>
                    <Field
                      name="number"
                      className="form-control"
                      placeholder="Alternate number"
                      type="text"
                    />
                  </Grid>
                </Grid>
                <FormControl fullWidth sx={{ mt: 1 }}>
                  <FormLabel sx={{ mb: 1, color: "inherit" }}>
                    {"Address type"}
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-customized-radios"
                    name="customized-radios"
                  >
                    <FormControlLabel
                      value="Home"
                      control={<BpRadio />}
                      label="Home"
                    />
                    <FormControlLabel
                      value="Work (Office)"
                      control={<BpRadio />}
                      label="Work (Office)"
                    />
                  </RadioGroup>
                </FormControl>
                <FormControl fullWidth sx={{ mt: 3.5 }}>
                  <FormLabel sx={{ mb: 1, color: "inherit", fontSize: 24 }}>
                    {"Billing Details"}
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-customized-radios"
                    name="customized-radios"
                  >
                    <FormControlLabel
                      value="Same as shipping address"
                      control={<BpRadio />}
                      label="Same as shipping address"
                    />
                  </RadioGroup>
                </FormControl>
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
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <SummaryDetails />
        </Grid>
      </Grid>
    </>
  );
}

export default Shipping;
