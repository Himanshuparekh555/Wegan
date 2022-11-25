import * as React from "react";
import "./index.scss";

// Material Ints
import { Box, Alert, TextField, Button } from "@mui/material";
import { red } from "@mui/material/colors";

class NewsletterEmail extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      isvalid: false,
      message: "",
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      email: e.target.value,
    });
  }
  emailValidation() {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !(!this.state.email || regex.test(this.state.email) === false);
  }
  onSubmit() {
    const isEmailValid = this.emailValidation();
    this.setState(
      {
        isvalid: isEmailValid,
        message: isEmailValid
          ? "You’ve been successfully subscribed Thank you!"
          : "Email Address not valid!",
      },
      () => this.props.onEmailSubmit(this.state)
    );

    // Check if email is valid
    if (this.state.isvalid) {
      console.log(this.state);
    }
  }
  render() {
    const messageTemplate = this.state.message ? (
      <Box
        sx={{ margin: "10px auto" }}
        width={{ xs: "100%", md: "65%", lg: "65%" }}
      >
        <Alert
          sx={{
            padding: "0px 10px",
            borderRadius: 12,
          }}
          variant="outlined"
          severity={this.state.isvalid ? "success" : "error"}
        >
          {this.state.message}
        </Alert>
      </Box>
    ) : (
      ""
    );
    return (
      <>
        <Box
          backgroundColor={{ xs: "#FAFAFA", md: "#FAFAFA", lg: "#ffffff" }}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: 10,
            height: 60,
          }}
        >
          <TextField
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            fullWidth
            sx={{ pl: 2 }}
            placeholder="Your email address"
            variant="outlined"
          />
          <Box width={{ xs: "200px", md: "200px", lg: "200px" }}>
            <Button
              variant="contained"
              type="submit"
              onClick={() => this.onSubmit()}
              className="btn-theme w-100"
              sx={{ height: 60, borderRadius: 10 }}
            >
              {"Subscribe"}
            </Button>
          </Box>
        </Box>
        <Box>{messageTemplate}</Box>
      </>
    );
  }
}

export default NewsletterEmail;
