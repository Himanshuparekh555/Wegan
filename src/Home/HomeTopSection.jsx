import * as React from 'react';
import "./index.scss";
import TreeImg from "../Images/tree_img.png"
import SearchBox from "../Components/Search/Index";
// Material Ints
import {
    Grid,
    Box,
    Container,
    Typography,
} from "@mui/material";

function HomeTopSection() {
    return (
        <>
            <Box className='top_section' sx={{ pt:6,pb:6}}>
                <Container>
                    <Grid spacing={{xs:5,md:5,lg:0}} container justifyContent={{xs:'center',md:'center',lg:'space-between',}} sx={{ display:"flex",alignItems:"center",}}>
                        <Grid item xs={12} sm={12} md={4} order={{ xs: 1, md: 0 }}>
                            <Typography className='heading1' variant="h1" gutterBottom sx={{ mb:2}}>
                               {"Together we become Wegan"}
                            </Typography>
                            <Typography className='des' variant="body1" gutterBottom>
                                {"Shop hundreds of vegan products worry-free."}
                            </Typography>
                           <SearchBox/>
                        </Grid>
                        <Grid item xs={8} sm={8} md={4} lg={4} order={{ xs: 0, md: 1 }}>
                            <img alt="" className='w-100' src={TreeImg}/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
};

export default HomeTopSection;