import React, { useRef } from "react";
import "./index.scss";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import ProductImage from '../../Images/product_img.png';
// Material Ints
import {
    Grid,
    Box,Container,
    Typography,
    Button,
} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { grey } from '@mui/material/colors';
// Categories Data
const RelatedProductsData = [
    {   img:ProductImage, 
        name: 'Bakery Items',
        alt:'Category Image',
        price:'$20',
        discount:'20% OFF'
    },    
    {   img:ProductImage, 
        name: 'Dairy Items',
        alt:'Category Image',
        price:'$20',
        discount:'20% OFF'
    },
    {   img:ProductImage, 
        name: 'Dry Fruits',
        alt:'Category Image',
        price:'$ 20',
        discount:'20% OFF'
    },
     {   img:ProductImage, 
        name: 'Bakery Items',
        alt:'Category Image',
        price:'$20',
        discount:'20% OFF'
    },    
    {   img:ProductImage, 
        name: 'Dairy Items',
        alt:'Category Image',
        price:'$20',
        discount:'20% OFF'
    },
    {   img:ProductImage, 
        name: 'Dry Fruits',
        alt:'Category Image',
        price:'$20',
        discount:'20% OFF'
    },
];
function Relatedproductsslider() {
    const swiperRef = useRef();
    return (
        <>
            <Box className='relatedproductsslider' sx={{mt:15,mb:20}}>
                 <Container> 
                    <Grid container spacing={1} sx={{ display:"flex",alignItems:"center",mb:6}}>
                        <Grid item xs={8} sm={6} md={9}>
                            <Typography
                                className='heading3'
                                variant="h3"
                                color="inherit"
                            >
                                {"Related products"}
                            </Typography>
                        </Grid>
                            <Grid item xs={4} sm={6} md={3} sx={{ textAlign:'right'}}>
                                <Button className="swiper-button prev" onClick={() => swiperRef.current?.slidePrev()}><KeyboardArrowLeftIcon sx={{ color: grey[800] }}/></Button>
                                <Button className="swiper-button next" onClick={() => swiperRef.current?.slideNext()}><KeyboardArrowRightIcon sx={{ color: grey[800] }}/></Button>
                            </Grid>
                        </Grid>   
                    
                    
                </Container>
                <Swiper
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    loop={true}
                    breakpoints={{
                        470: {
                            width: 470,
                            preventInteractionOnTransition: true,
                            watchSlidesProgress: true,                            
                            slidesPerView: 1.2,
                            shortSwipes: false
                        },
                        768: {
                            preventInteractionOnTransition: true,
                            watchSlidesProgress: true,                            
                            slidesPerView: 3.2,
                            shortSwipes: false
                        },
                        1200: {
                            width: 1200,
                            preventInteractionOnTransition: true,
                            watchSlidesProgress: true,                            
                            slidesPerView: 3.2,
                            shortSwipes: false
                        },
                    }}
                    spaceBetween={40}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        {RelatedProductsData.map((data, index)=> (
                            <SwiperSlide key={index}> 
                                <Box sx={{ backgroundColor:'#F8F8F8',minHeight:350,display:"flex",alignItems:"center",justifyContent:'center',borderRadius:10}}>
                                    <img src={data.img} alt={data.alt} />
                                </Box>                     
                                <Grid container spacing={1} sx={{ display:"flex",alignItems:"center",mt:3}}>
                                    <Grid item xs={6} sm={6} md={9}>
                                        <Typography
                                            className='title'
                                            variant="h5"
                                            color="inherit"
                                        >
                                        {data.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={3} sx={{ textAlign:'right'}}>
                                        <Typography
                                            className='price'
                                            component="span"
                                            variant="subtitle1"
                                            color="inherit"
                                        >
                                            {data.price}
                                        </Typography>
                                    </Grid>
                                </Grid>           
                            </SwiperSlide>
                        ))}
                </Swiper>
            </Box>
        </>
    )
};

export default Relatedproductsslider;