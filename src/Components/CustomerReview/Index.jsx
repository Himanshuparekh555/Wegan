import * as React from 'react';
import "./index.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import ClientIcon from '../../Images/client_img.png';

// Material Ints
import {
    Grid,
    Box,
    Container,
    Typography,
} from "@mui/material";

// Categories Data
const CustomerReviewData = [
    {   
        clientimage:ClientIcon,
        title: 'John Smith',
        description:'This is the best website I have ordered Something from, I highly recommend',
    }, 
     {   
        clientimage:ClientIcon,
        title: 'John Smith',
        description:'This is the best website I have ordered Something from, I highly recommend',
    }, 
];

function CustomerReview() {
    return (
        <>
            <Container>
                <Box className='review_section' padding={{xs:'30px',md:'30px',lg:'64px'}} sx={{ borderRadius:13}}>    
                    <Grid container spacing={{xs:5,md:5,lg:7,}} sx={{ display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography className='heading3' variant="h3" textAlign={{xs:'center',md:'center',lg:'left'}}>
                                {"What our customers Are Saying"}
                            </Typography> 
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>   
                            <Swiper
                                navigation={true}
                                pagination={{ clickable: true }}
                                modules={[Navigation, Pagination]}
                                spaceBetween={40}
                                slidesPerView={1}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                {CustomerReviewData.map((data, index)=> (
                                    <SwiperSlide key={index}>   
                                        <img src={data.clientimage} alt=""/>                   
                                        <Typography className='name' variant="h5" sx={{mt:5,mb:4}}>
                                            {data.title}
                                        </Typography>    
                                        <Typography className='des' variant="body1" sx={{ mb:18}}>
                                            {data.description}
                                        </Typography>     
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Grid>
                    </Grid>             
                </Box>
            </Container>
        </>
    )
};

export default CustomerReview;