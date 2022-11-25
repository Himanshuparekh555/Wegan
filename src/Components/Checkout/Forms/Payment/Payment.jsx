import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormContext } from "../../Checkout";
import * as yup from "yup";
import { ReactComponent as SBIIcon } from "../../../../Images/svg/sbi_icon.svg";
import UPIIcon from "../../../../Images/upi.gif";
import SummaryDetails from "../../Summary";
// Material Ints
import {
  styled,
  Grid,
  Box,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

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

function Payment() {
  const navigate = useNavigate();
  navigate("/order-success");

  const { formData, setFormData } = useContext(FormContext);
  const renderError = (message) => <p className="error-msg">{message}</p>;

  const visaRegEx = /^(?:1[0-9]{16}(?:[0-9]{3})?)$/;

  const ValidationSchema = yup.object().shape({
    cardname: yup.string().required(),
    cardnumber: yup
      .string()
      .matches(visaRegEx, "Card number is not valid (e.g. 4111111111111111)")
      .required(),
    cvv: yup.string().min(3).max(4).required(),
    expirationDate: yup
      .string()
      .max(5, "Not a valid expiration date. Example: MM/YY")
      .matches(
        /([0-9]{2})\/([0-9]{2})/,
        "Not a valid expiration date. Example: MM/YY"
      )
      .required(),
  });
  return (
    <>
      <Grid container spacing={{ xs: 5, md: 12 }} sx={{ mb: 6 }}>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            sx={{
              border: "1px solid #F2F2F2",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <Typography
              className="heading3"
              gutterBottom
              variant="h3"
              sx={{ mb: 0, p: 4 }}
            >
              {"Payment Details"}
            </Typography>
            <Formik
              initialValues={{
                cardname: "",
                cardnumber: "",
                cvv: "",
                expirationDate: "",
              }}
              validationSchema={ValidationSchema}
              onSubmit={(values) => {
                const data = { ...formData, ...values };
                setFormData(data);
                navigate("/order-success");
              }}
            >
              <Form>
                <Accordion
                  className="payment-method"
                  sx={{ borderRadius: 0, boxShadow: 0 }}
                >
                  <AccordionSummary
                    sx={{ pl: 4, pr: 4 }}
                    aria-controls="panel1a-content"
                  >
                    <Typography>{"Credit / Debit / ATM Card"}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pl: 4, pr: 4 }}>
                    <Box sx={{ mb: 3 }}>
                      <Field
                        name="cardname"
                        className="form-control"
                        placeholder="Card Name"
                      />
                      <ErrorMessage name="cardname" render={renderError} />
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Field
                        name="cardnumber"
                        className="form-control"
                        placeholder="Card Number"
                      />
                      <ErrorMessage name="cardnumber" render={renderError} />
                    </Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6} md={6} sx={{ mb: 3 }}>
                        <Field
                          name="expirationDate"
                          className="form-control"
                          placeholder="Expiry Date"
                        />
                        <ErrorMessage
                          name="expirationDate"
                          render={renderError}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} sx={{ mb: 3 }}>
                        <Field
                          name="cvv"
                          className="form-control"
                          placeholder="CVV"
                        />
                        <ErrorMessage name="cvv" render={renderError} />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      className="btn-theme"
                      sx={{ pt: 1, pb: 1, pl: 4, pr: 4, borderRadius: 12 }}
                    >
                      {"Pay $224"}
                    </Button>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className="payment-method"
                  sx={{ borderRadius: 0, boxShadow: 0 }}
                >
                  <AccordionSummary
                    sx={{ pl: 4, pr: 4 }}
                    aria-controls="panel1a-content"
                  >
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                      <SBIIcon style={{ width: 26 }} />
                      &nbsp;&nbsp;{"Net Banking"}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pl: 9.5, pr: 4 }}>
                    <FormControl>
                      <FormLabel
                        id="demo-row-radio-buttons-group-label"
                        sx={{ pb: 1 }}
                      >
                        Popular Banks
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="hdfcbank"
                          control={<BpRadio />}
                          label="HDFC bank"
                        />
                        <FormControlLabel
                          value="icicibank"
                          control={<BpRadio />}
                          label="ICICI Bank"
                        />
                        <FormControlLabel
                          value="statebank"
                          control={<BpRadio />}
                          label="State Bank of India"
                        />
                      </RadioGroup>
                    </FormControl>
                    <Button
                      type="submit"
                      className="btn-theme"
                      sx={{
                        mt: 3,
                        pt: 1,
                        pb: 1,
                        pl: 4,
                        pr: 4,
                        borderRadius: 12,
                      }}
                    >
                      {"Pay $224"}
                    </Button>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className="payment-method"
                  sx={{ borderRadius: 0, boxShadow: 0 }}
                >
                  <AccordionSummary
                    sx={{ pl: 4, pr: 4 }}
                    aria-controls="panel1a-content"
                  >
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                      <img
                        style={{ width: 24, height: 24 }}
                        src={UPIIcon}
                        alt=""
                      />
                      &nbsp;&nbsp;{"UPI"}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pl: 4, pr: 4 }}>
                    <Typography sx={{ fontSize: 14, fontWeight: 500, pl: 4 }}>
                      {"Choose an opton"}
                    </Typography>
                    <Accordion
                      className="payment-method"
                      style={{ padding: 0, borderBottom: 0 }}
                      sx={{ borderRadius: 0, boxShadow: 0 }}
                    >
                      <AccordionSummary
                        sx={{ pl: 4, pr: 4 }}
                        aria-controls="panel1a-content"
                      >
                        <Typography>{"PhonePe"}</Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ pl: 4, pr: 4 }}>
                        <Button
                          className="btn-theme"
                          sx={{
                            pt: 1.2,
                            pb: 1.2,
                            pl: 4,
                            pr: 4,
                            borderRadius: 12,
                          }}
                        >
                          {"Continue"}
                        </Button>
                      </AccordionDetails>
                    </Accordion>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className="payment-method"
                  style={{ borderBottom: 0 }}
                  sx={{ borderRadius: 0, boxShadow: 0, p: 0 }}
                >
                  <AccordionSummary
                    sx={{ pt: 0, pl: 4, pr: 4 }}
                    aria-controls="panel1a-content"
                  >
                    <Typography sx={{ display: "flex", alignItems: "center" }}>
                      <img
                        style={{ width: 24, height: 24 }}
                        src={UPIIcon}
                        alt=""
                      />
                      &nbsp;&nbsp;{"Wallets"}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pl: 4, pr: 4 }}>
                    <Accordion
                      className="payment-method"
                      style={{ padding: 0, borderBottom: 0 }}
                      sx={{ borderRadius: 0, boxShadow: 0 }}
                    >
                      <AccordionSummary
                        sx={{ pt: 0, pl: 4, pr: 4 }}
                        aria-controls="panel1a-content"
                      >
                        <Typography>{"Paytm Wallet"}</Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ pl: 4, pr: 4 }}>
                        <Button
                          className="btn-theme"
                          sx={{
                            pt: 1.2,
                            pb: 1.2,
                            pl: 4,
                            pr: 4,
                            borderRadius: 12,
                          }}
                        >
                          {"Continue"}
                        </Button>
                      </AccordionDetails>
                    </Accordion>
                  </AccordionDetails>
                </Accordion>
              </Form>
            </Formik>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <SummaryDetails />
        </Grid>
      </Grid>
    </>
  );
}

export default Payment;
