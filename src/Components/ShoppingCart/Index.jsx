import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import RelatedProductsSlider from "../Products/RelatedProductsSlider";
import Newsletter from "../Newsletter/Index";
// Material Ints
import {
  Grid,
  Box,
  Container,
  Typography,
  Button,
  Link,
  Card,
  CardContent,
  CardMedia,
  Breadcrumbs,
  TextField,
} from "@mui/material";
import styled from "styled-components";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ClearIcon from "@mui/icons-material/Clear";
import ProductImage from "../../Images/product_image.png";

const StyledButton = styled(Button)`
  &:hover {
    background: none;
  }
`;

function ShoppingCart() {
  const history = useNavigate();
  function navigateToCheckout(e) {
    e.preventDefault();

    history("/checkout");
  }
  function navigateRemoveCart(e) {
    e.preventDefault();

    history("/cart-empty");
  }
  function navigateToDetail(e) {
    e.preventDefault();

    history("/product-detail");
  }

  // Increment and Decrement Value
  const [num, setNum] = useState(0);
  const incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  const handleChange = (e) => {
    setNum(e.target.value);
  };
  return (
    <>
      <Box className="shopping_cart">
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
            <Typography color="text.primary">{"Shopping Cart"}</Typography>
          </Breadcrumbs>
          <Grid container sx={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={6} sm={8} md={8}>
              <Typography
                className="heading3"
                gutterBottom
                variant="h5"
                sx={{ mt: 2, mb: 4 }}
              >
                {"Shopping Cart"}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              md={4}
              sx={{ display: "flex", justifyContent: "end" }}
            >
              <Button
                variant="outlined"
                sx={{
                  pl: 2.5,
                  pr: 2.5,
                  borderRadius: 10,
                  borderColor: "#E0E0E0",
                  color: "#000000",
                }}
              >
                {"Clear all"}
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 1, md: 0, lg: 8 }}>
            <Grid item xs={12} sm={12} md={8}>
              <Card
                className="card"
                elevation={0}
                sx={{
                  display: "flex",
                  p: 3,
                  mb: 4,
                  border: "1px solid #F2F2F2",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FAFAFA",
                    borderRadius: 10,
                  }}
                  width={{ xs: "100%", sm: "inherit" }}
                  marginRight={{ xs: 0, sm: 4, md: 4, lg: 4 }}
                >
                  <CardMedia
                    onClick={navigateToDetail}
                    component="img"
                    sx={{ width: 200, height: 200, cursor: "pointer" }}
                    image={ProductImage}
                    alt="Image"
                  />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto", pl: 0, pr: 0 }}>
                    <Typography
                      sx={{ fontSize: 18, fontWeight: 600, mb: 2.5 }}
                      variant="h5"
                    >
                      {"Whole milk 1 pint"}
                    </Typography>
                    <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
                      {"$97"}
                    </Typography>
                  </CardContent>
                  <Grid
                    container
                    spacing={3}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Grid item xs={9} sm={5} md={5}>
                      <Box
                        className="qty"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          border: "1px solid #E2E2E2",
                          borderRadius: 20,
                        }}
                      >
                        <StyledButton disableRipple onClick={decNum}>
                          <KeyboardArrowLeftIcon />
                        </StyledButton>
                        <TextField
                          value={num}
                          onChange={handleChange}
                          id="outlined-basic"
                        />
                        <StyledButton
                          sx={{ background: 0 }}
                          disableRipple
                          onClick={incNum}
                        >
                          <KeyboardArrowRightIcon />
                        </StyledButton>
                      </Box>
                    </Grid>
                    <Grid item xs={3} sm={2} md={2}>
                      <Button
                        onClick={navigateRemoveCart}
                        sx={{
                          border: "1px solid #E2E2E2",
                          backgroundColor: "none",
                          p: 0,
                          borderRadius: 10,
                          minWidth: 50,
                          height: 50,
                        }}
                      >
                        <ClearIcon color="action" fontSize="small" />
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box
                className="summary"
                sx={{ border: "1px solid #F2F2F2", p: 3, borderRadius: 10 }}
              >
                <Typography
                  sx={{ fontSize: 22, fontWeight: 600, mb: 2.5 }}
                  variant="h5"
                >
                  {"Cart Total"}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2.5,
                    mb: 2.5,
                  }}
                >
                  <Typography>{"Subtotal:"}</Typography>
                  <Typography>{"$209"}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2.5,
                    mb: 2.5,
                  }}
                >
                  <Typography>{"Tax:"}</Typography>
                  <Typography>{"$20.73"}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2.5,
                    mb: 2.5,
                  }}
                >
                  <Typography>{"Shipping:"}</Typography>
                  <Typography>{"$15"}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2.5,
                    mb: 2.5,
                  }}
                >
                  <Typography sx={{ fontWeight: 500 }}>{"Total:"}</Typography>
                  <Typography sx={{ fontWeight: 500 }}>{"$224"}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 8,
                  }}
                >
                  <Button
                    onClick={navigateToCheckout}
                    className="btn-theme"
                    sx={{ pt: 1.5, pb: 1.5, pl: 6, pr: 6, borderRadius: 20 }}
                  >
                    {"Pay now"}
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <RelatedProductsSlider />
        <Newsletter />
      </Box>
    </>
  );
}

export default ShoppingCart;
