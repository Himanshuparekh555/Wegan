import React, { createContext, useState } from "react";
import Step from "./Step/Step";
import Stepper from "./Indicator";
import "./index.scss";
// Material Ints
import { Box, Container, Typography, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const FormContext = createContext();

function Checkout() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  return (
    <Box className="checkout_section" sx={{ mt: 8, mb: 6 }}>
      <Container>
        <Breadcrumbs
          sx={{ mt: 4, mb: 4 }}
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          className="breadcrumbs"
        >
          <Link underline="none" color="inherit" href="/">
            {"Home"}
          </Link>
          <Link underline="none" color="inherit" href="/shopping-cart">
            {"Shopping Cart"}
          </Link>
          <Typography color="text.primary">{"Checkout"}</Typography>
        </Breadcrumbs>
        <Typography
          className="heading3"
          gutterBottom
          variant="h1"
          sx={{ mt: 5 }}
        >
          {"Checkout"}
        </Typography>
        <FormContext.Provider
          value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}
        >
          <Stepper />
          <Step />
        </FormContext.Provider>
      </Container>
    </Box>
  );
}

export default Checkout;
