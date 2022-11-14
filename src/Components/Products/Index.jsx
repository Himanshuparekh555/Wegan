import * as React from 'react';
import "./index.scss";
import {useNavigate} from "react-router-dom";
// Material Ints
import {
    Grid,
    Box,
    Container,
    Typography,
    Button,
} from "@mui/material";

import HomeProductGridView from "../Products/HomeProductGrid";

const HomeProductGrid = () => {
    const navigate = useNavigate();
    const navigateToViewAll = () => {
    // navigate to View all page
         navigate('/allproducts');
     };

    return (
        <>
            <Box className='product_grid'>
                <Container>
                    <Grid container spacing={6} sx={{ display:"flex",alignItems:"center",justifyContent:"space-between",mb:5}}>
                        <Grid item xs={12}>
                            <Typography className='heading2' variant="h3" textAlign={{xs:'center',md:'center',lg:'left'}}>
                                {"Explore out Products"}
                            </Typography> 
                        </Grid>
                    </Grid>
                    <HomeProductGridView/>
                    <Box sx={{ display:"flex",justifyContent:"center",mt:10}}>
                        <Button onClick={navigateToViewAll} variant="contained" className='btn-theme' sx={{ pt:1.3,pb:1.3,pl:5,pr:5,borderRadius:10}}>{"View All"}</Button>
                    </Box>
                </Container>
            </Box>
        </>
    )
};

export default HomeProductGrid;