import React, { useContext, useEffect } from "react";
import { FormContext } from "../Checkout";

// Material Ints
import { Grid, Box } from "@mui/material";

function Stepper() {
  const { activeStepIndex } = useContext(FormContext);
  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });
  }, [activeStepIndex]);
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-center",
          mt: 5,
          mb: 5,
        }}
      >
        <Grid
          item
          xs={12}
          sm={3}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="stepper"
        >
          <Box className="stepper-item">{"1"}</Box>
          <Box className="stepper-item">{"2"}</Box>
          <Box className="stepper-item">{"3"}</Box>
          <Box className="stepper-item">{"4"}</Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Stepper;
