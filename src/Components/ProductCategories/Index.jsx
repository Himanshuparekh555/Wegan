import * as React from 'react';
import {useNavigate} from "react-router-dom";
import "./index.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


import BekaryImg from '../../Images/bekary.png';
import DairyImg from '../../Images/dairy.png';
import FlourImg from '../../Images/flour_mill.png';
import FruitImg from '../../Images/ry_fruit.png';
import VegImg from '../../Images/veg.png';
import BekaryIcon from '../../Images/svg/bekary.svg';
import DairyIcon from '../../Images/svg/dairy.svg';
import FlourIcon from '../../Images/svg/flour_mill.svg';
import FruitIcon from '../../Images/svg/fruit.svg';
import VegIcon from '../../Images/svg/veg.svg';


// Material Ints
import {
    Grid,
    Box,
    Container,
    Button,
    ButtonBase,
    styled,
    Typography,
} from "@mui/material";

// Categories Data
const CategoriesData = [
    {   img:BekaryImg, 
        name: 'Bakery Items',
        icon:BekaryIcon,
        width: '100%', 
        alt:'Category Image',
    },    
    {   img:DairyImg, 
        name: 'Dairy Items',
        icon:DairyIcon,
        width: '100%', 
        alt:'Category Image',
    },
    {   img:FlourImg, 
        name: 'Dry Fruits',
        icon:FlourIcon,
        width: '100%', 
        alt:'Category Image',
    },
    {   img:FruitImg, 
        name: 'Flour Mill',
        icon:FruitIcon,
        width: '100%', 
        alt:'Category Image',
    },
    {   img:VegImg, 
        name: 'Organic Veggies',
        icon:VegIcon,
        width: '100%', 
        alt:'Category Image',
    },
    {   img:BekaryImg, 
        name: 'Bakery Items',
        icon:BekaryIcon,
        width: '100%', 
        alt:'Category Image',
    }, 
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  borderRadius:40,
  overflow:'hidden',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', 
    height: 200,
  },
  '& .MuiTypography-subtitle1':{
    fontSize:18,
    fontFamily:'"Poppins", sans-serif',
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
  },
}));


const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));


const ProductCategories = ({}) => {
    const navigate = useNavigate();
    const navigateToAll = () => {
    // navigate to All Category page
         navigate('/all-category');
     };
     const navigateToProduct = () => {
    // navigate to All Category page
         navigate('/product');
     };
    return (
        <>
            <Box className='categories' sx={{ pt:10,pb:10}}>
                <Container>
                    <Grid container spacing={{ xs: 3, md: 3,lg: 6 }} sx={{ display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                        <Grid item xs={12} sm={6} md={9}>
                            <Typography className='heading2' variant="h3" textAlign={{xs:'center',md:'center',lg:'left'}}>
                                {"Browse by Category"}
                            </Typography> 
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} sx={{ display:"flex",}} justifyContent={{xs:'center',md:'center',lg:'end'}}>
                            <Button onClick={navigateToAll} variant="contained" className='btn-theme' sx={{ borderRadius:20,pl:3,pr:3}}>{"See All"}</Button>
                        </Grid>
                    </Grid>                 
                        <Swiper
                            className='home_categories'
                            loop={false}
                            navigation={true}
                            hashNavigation={{
                            watchState: true,
                            }}
                            breakpoints={{
                                470: {
                                    width: 470,
                                    slidesPerView: 2,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 3,
                                },
                                1200: {
                                    width: 1200,
                                    slidesPerView: 5,
                                },
                            }}
                            modules={[ Navigation]}
                            spaceBetween={40}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                                {CategoriesData.map((data, index)=> (
                                    <SwiperSlide key={index}>         
                                        <ImageButton
                                            focusRipple
                                            key={data.title}
                                            onClick={navigateToProduct}
                                            style={{
                                                width: data.width,
                                            }}
                                            >
                                            <img className='w-100' src={data.img} alt={data.alt}/>
                                            <ImageBackdrop className="MuiImageBackdrop-root" />
                                            
                                            <Image sx={{ display:"flex",alignItems:"center",flexDirection:'column'}}>
                                                <img src={data.icon} alt=""/>
                                                <Typography
                                                    component="span"
                                                    variant="subtitle1"
                                                    color="inherit"
                                                    sx={{ mt:2}}
                                                >
                                                {data.name}
                                                </Typography>
                                            </Image>
                                        </ImageButton>    
                                           
                                    </SwiperSlide>
                                ))}
                        </Swiper>            
                </Container>
            </Box>
        </>
    )
};

export default ProductCategories;