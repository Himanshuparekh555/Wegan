import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

// ICONS
import { ReactComponent as LogoIcon } from "../../Images/logo.svg";
import { ReactComponent as LocationIcon } from "../../Images/svg/location_icon.svg";
import { ReactComponent as MailIcon } from "../../Images/svg/mail_icon.svg";
import { ReactComponent as ContactIcon } from "../../Images/svg/contact_icon.svg";

// Material Ints
import {
  Grid,
  Box,
  Link,
  MenuList,
  MenuItem,
  Container,
  Typography,
  Select,
  FormControl,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { grey } from "@mui/material/colors";
const Footer = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isActive, setActive] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
    setActive(!isActive);
  }

  const [query, setQuery] = React.useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  // Footer collapse
  const [showtab, setShowTab] = useState(1);
  const handletab = (e) => {
    setShowTab(e);
  };

  // Scroll To Top
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer id="footer">
        <Box
          className="links"
          paddingTop={{ xs: "30px", md: "50px", lg: "80px" }}
          sx={{ pb: 3 }}
        >
          <Container>
            <MenuList>
              <MenuItem disableRipple sx={{ pl: 4, pr: 4, fontSize: 18 }}>
                <NavLink to="/">{"Home"}</NavLink>
              </MenuItem>
              <MenuItem disableRipple sx={{ pl: 4, pr: 4, fontSize: 18 }}>
                <NavLink to="/allproducts">{"Shop"}</NavLink>
              </MenuItem>
              <MenuItem disableRipple sx={{ pl: 4, pr: 4, fontSize: 18 }}>
                <NavLink to="/all-category">{"Category"}</NavLink>
              </MenuItem>
              <MenuItem disableRipple sx={{ pl: 4, pr: 4, fontSize: 18 }}>
                <NavLink to="/blog">{"Blog"}</NavLink>
              </MenuItem>
              <MenuItem disableRipple sx={{ pl: 4, pr: 4, fontSize: 18 }}>
                <Link onClick={toggle} className={isActive ? "select" : null}>
                  {"Contact"}
                </Link>
              </MenuItem>
            </MenuList>
          </Container>
        </Box>
        {isOpened && (
          <Box className="footer_middle" sx={{ pt: 5, pb: 5 }}>
            <Container>
              <Grid
                container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  textAlign={{ xs: "center", md: "center", lg: "left" }}
                >
                  <LogoIcon />
                </Grid>
                <Grid className="footer_info" item xs={12} sm={12} md={8}>
                  <MenuList>
                    <MenuItem
                      className={showtab === 1 ? "active" : ""}
                      onClick={() => handletab(1)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <LocationIcon />
                      <Typography
                        className="title"
                        variant="h6"
                        sx={{ mt: 1, mb: 1 }}
                      >
                        {"Address"}
                      </Typography>
                      <Typography
                        className="subtitle"
                        variant="body2"
                        gutterBottom
                        sx={{ mb: 0 }}
                      >
                        {"81600 Montand, France"}
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <ContactIcon />
                      <Typography
                        className="title"
                        variant="h6"
                        sx={{ mt: 1, mb: 1 }}
                      >
                        {"Phone"}
                      </Typography>
                      <Typography
                        className="subtitle"
                        variant="body2"
                        gutterBottom
                        sx={{ mb: 0 }}
                      >
                        {"+33 234-231-1111"}
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      className={showtab === 2 ? "active" : ""}
                      onClick={() => handletab(2)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <MailIcon />
                      <Typography
                        className="title"
                        variant="h6"
                        sx={{ mt: 1, mb: 1 }}
                      >
                        {"Mail"}
                      </Typography>
                      <Typography
                        className="subtitle"
                        variant="body2"
                        gutterBottom
                        sx={{ mb: 0 }}
                      >
                        {"care@wegan.com"}
                      </Typography>
                    </MenuItem>
                  </MenuList>
                </Grid>
              </Grid>
              <Box
                className={
                  showtab === 1
                    ? "footer_info_details active"
                    : "footer_info_details"
                }
                sx={{ mt: 5 }}
              >
                <Grid
                  container
                  spacing={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Grid item xs={12} sm={12} md={4}>
                    <Typography className="title" variant="h6" sx={{ mb: 2 }}>
                      {"All About Us"}
                    </Typography>
                    <Typography
                      className="subtitle"
                      variant="body2"
                      gutterBottom
                      sx={{ mb: 4 }}
                    >
                      {
                        "10 years ago, when one of the co-founders came up with the idea of making Vegan and Wegan products using only natural ingredients, he did not even think twice."
                      }
                    </Typography>
                    <Typography
                      className="subtitle"
                      variant="body2"
                      gutterBottom
                      sx={{ mb: 0 }}
                    >
                      {
                        "One of our main goals from the start was to offer high quality products that would also have affordable prices. We just can’t believe that we have finally achieved this and now we are proud of it."
                      }
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={8}>
                    <iframe
                      className="w-100"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.90924555392!2d75.72376116522602!3d22.724228430816172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1667278555852!5m2!1sen!2sin"
                      height="350"
                      frameborder="0"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      aria-hidden="false"
                      tabindex="0"
                      title="Google Map"
                    ></iframe>
                  </Grid>
                </Grid>
              </Box>
              <Box
                className={
                  showtab === 2
                    ? "footer_info_details active"
                    : "footer_info_details"
                }
                sx={{ mt: 5 }}
              >
                <Grid
                  container
                  spacing={6}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Grid item xs={12} sm={12} md={5}>
                    <Typography className="title" variant="h6" sx={{ mb: 2 }}>
                      {"Wegan Help Center | 24x7 Customer Care Support"}
                    </Typography>
                    <Typography
                      className="subtitle"
                      variant="body2"
                      gutterBottom
                      sx={{ mb: 0 }}
                    >
                      {
                        "The Wegan Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online."
                      }
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={7}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={6}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            {"Query type"}
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={query}
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Lorem Ipsum</MenuItem>
                            <MenuItem value={20}>Lorem Ipsum</MenuItem>
                            <MenuItem value={30}>Lorem Ipsum</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <TextField
                          fullWidth
                          placeholder="Your email"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <TextField
                          fullWidth
                          placeholder="Phone number"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <TextField
                          multiline
                          rows={3}
                          fullWidth
                          placeholder="Type your query…"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        justifyContent={{
                          xs: "center",
                          md: "start",
                          lg: "start",
                        }}
                        sx={{ display: "flex" }}
                      >
                        <Button
                          sx={{ borderRadius: 10, pl: 5, pr: 5 }}
                          className="btn-theme"
                          variant="contained"
                        >
                          {"Send"}
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
        )}
        <Box sx={{ pt: 3, pb: 3 }}>
          <Typography
            className="subtitle"
            variant="body2"
            gutterBottom
            sx={{ mb: 0 }}
          >
            <Container>
              <Typography
                className="subtitle"
                variant="body2"
                gutterBottom
                sx={{ mb: 0, color: "#8E8E93" }}
              >
                {"© 2022 Wegan all rights reserved."}
              </Typography>
            </Container>
          </Typography>
        </Box>
        {showTopBtn && (
          <Button
            className="btn-theme"
            variant="contained"
            onClick={goToTop}
            sx={{
              position: "fixed",
              bottom: 25,
              right: 20,
              borderRadius: 20,
              backgroundColor: "#CFE9CC",
              zIndex: 999,
              minWidth: "40px",
              height: "40px",
              p: 0,
            }}
          >
            <KeyboardArrowUpIcon sx={{ color: grey[700], fontSize: 30 }} />
          </Button>
        )}
      </footer>
    </>
  );
};

export default Footer;
