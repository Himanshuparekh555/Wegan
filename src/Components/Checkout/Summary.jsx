import React from "react";
import "./index.scss";
import ProductImage from "../../Images/product_image.png";

// Material Ints
import { Grid, Box, Typography, Button, Link } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

function SummaryDetail() {
  return (
    <>
      <Box
        sx={{ border: "1px solid #F2F2F2", borderRadius: 12 }}
        padding={{ xs: 2, md: 3, lg: 3.5 }}
      >
        <Grid container sx={{ mb: 2 }}>
          <Grid
            item
            xs={12}
            sm={3}
            md={4}
            display={{ xs: "flex", md: "flex" }}
            justifyContent={{ xs: "center", md: "start", lg: "start" }}
          >
            <Link
              href="/shopping-cart"
              sx={{
                display: "flex",
                alignItems: "center",
                background: "#FAFAFA",
                borderRadius: 6,
                width: 130,
                height: 130,
              }}
            >
              <img className="w-100" src={ProductImage} alt="" />
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={9}
            md={8}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            marginTop={{ xs: 2, lg: 0 }}
          >
            <Box marginLeft={{ xs: 0, md: 2, lg: 2 }}>
              <Typography gutterBottom variant="h6">
                {"Whole milk 1 pint"}
              </Typography>
              <Typography gutterBottom variant="h6" sx={{ mb: 0 }}>
                {"$97"}
              </Typography>
            </Box>
            <Button
              size="small"
              sx={{
                border: "1px solid #E2E2E2",
                backgroundColor: "none",
                p: 0,
                borderRadius: 15,
                minWidth: 40,
                height: 40,
              }}
            >
              <ClearIcon color="action" fontSize="small" />
            </Button>
          </Grid>
        </Grid>
        <Grid container sx={{ mb: 2 }}>
          <Grid
            item
            xs={12}
            sm={3}
            md={4}
            display={{ xs: "flex", md: "block" }}
            justifyContent={{ xs: "center" }}
          >
            <Link
              href="/shopping-cart"
              sx={{
                display: "flex",
                alignItems: "center",
                background: "#FAFAFA",
                borderRadius: 6,
                width: 130,
                height: 130,
              }}
            >
              <img className="w-100" src={ProductImage} alt="" />
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={9}
            md={8}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            marginTop={{ xs: 2, lg: 0 }}
          >
            <Box marginLeft={{ xs: 0, lg: 2 }}>
              <Typography gutterBottom variant="h6">
                {"Whole milk 1 pint"}
              </Typography>
              <Typography gutterBottom variant="h6" sx={{ mb: 0 }}>
                {"$97"}
              </Typography>
            </Box>
            <Button
              size="small"
              sx={{
                border: "1px solid #E2E2E2",
                backgroundColor: "none",
                p: 0,
                borderRadius: 15,
                minWidth: 40,
                height: 40,
              }}
            >
              <ClearIcon color="action" fontSize="small" />
            </Button>
          </Grid>
        </Grid>
        <Box
          className="summary"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 2.5,
            mb: 2.5,
          }}
        >
          <Typography>{"Total:"}</Typography>
          <Typography>{"$20.73"}</Typography>
        </Box>
        <Box
          className="summary"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 5,
          }}
        >
          <Button
            className="btn-outline"
            sx={{ pt: 1, pb: 1, pl: 4, pr: 4, borderRadius: 12 }}
          >
            {"Edit cart"}
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default SummaryDetail;
