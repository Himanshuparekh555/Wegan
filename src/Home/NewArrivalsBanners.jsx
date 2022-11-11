import * as React from 'react';
import "./index.scss";
// Material Ints
import {
    Grid,
    Box,
    Container,
    Link,
    Typography,
} from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { grey } from '@mui/material/colors';

import SellerBanner from '../../src/Images/best_sellers.png';
import NewarrivalBnner from '../../src/Images/new_arrivals.png';
// Data
const NewArrivals = [
    { img: NewarrivalBnner, tag: 'New', name: 'New Arrivals',link:'SHOP NOW' },
    
    { img:SellerBanner,tag: 'New', name: 'Best Seller',link:'SHOP NOW' },

];
const NewArrivalsBanners = ({}) => {
    return (
        <>
            <Box className='NewArrivalsBanners' paddingTop={{xl:'50px',md:'50px',lg:'80px'}} paddingBottom={{xl:'50px',md:'50px',lg:'80px'}}>
                <Container>
                    <Grid container spacing={4} display={{xs:'block',md:'flex',lg:'flex'}} sx={{alignItems:"center",justifyContent:"space-between",whiteSpace:'nowrap',overflow:'auto'}}>
                        {NewArrivals.map((data, index)=> (
                            <Grid item xs={12} sm={6} md={6} key={index} display={{xs:'inline-block',md:'inline-block',lg:'block'}}>
                                <Box className='banner_box' sx={{ p:3,borderRadius:5}}>
                                    <Grid container>    
                                        <Grid item xs={8} sm={8} md={8}>
                                            <Typography className='tag' variant="caption" sx={{ borderRadius:5}}>
                                                {data.tag}
                                            </Typography>
                                            <Typography className='heading3' variant="h3" gutterBottom sx={{ mt:5,mb:2}}>
                                                {data.name}
                                            </Typography>
                                            <Link href="#" underline="none" color="inherit" fontSize={16}><Box sx={{ display:"flex",alignItems:"center"}}>{data.link}<ChevronRightIcon sx={{ fontSize: 20,color: grey[800] }}/></Box></Link>
                                            </Grid>                                                    
                                            <Grid item xs={4} sm={4} md={4}>
                                                <img className='w-100' src={data.img}/>
                                            </Grid>
                                    </Grid>  
                                </Box>  
                            </Grid>
                            ))}                              
                        
                    </Grid>
                </Container>
            </Box>
        </>
    )
};

export default NewArrivalsBanners;