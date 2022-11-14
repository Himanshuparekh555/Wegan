import React, {} from "react";
import "./index.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import BekaryIcon from '../../Images/svg/bekary.svg';
import DairyIcon from '../../Images/svg/dairy.svg';
import FlourIcon from '../../Images/svg/flour_mill.svg';
import FruitIcon from '../../Images/svg/fruit.svg';
import VegIcon from '../../Images/svg/veg.svg';

// Material Ints
import {
    styled,
    Grid,
    Box,
    Container,
    Typography,
    ButtonBase,
} from "@mui/material";
import ProductImage from '../../Images/blog_img.png';

// Categories Data
const CategoriesData = [
    {   img:ProductImage, 
        name: 'Vegan recipe inspired other cultures',
        icon:BekaryIcon,
        height: '400', 
        alt:'Category Image',
    }, 
     {   img:ProductImage, 
        name: 'Vegan recipe inspired other cultures',
        icon:DairyIcon,
        height: '400', 
        alt:'Category Image',
    }, 
     {   img:ProductImage, 
        name: 'Vegan recipe inspired other cultures',
        icon:FlourIcon,
        height: '400', 
        alt:'Category Image',
    }, 
     {   img:ProductImage, 
        name: 'Vegan recipe inspired other cultures',
        icon:FruitIcon,
        height: '400', 
        alt:'Category Image',
    }, 
     {   img:ProductImage, 
        name: 'Vegan recipe inspired other cultures',
        icon:VegIcon,
        height: '400', 
        alt:'Category Image',
    }, 
     {   img:ProductImage, 
        name: 'Vegan recipe inspired other cultures',
        icon:BekaryIcon,
        height: '400', 
        alt:'Category Image',
    }, 
     {   img:ProductImage, 
        name: 'Vegan recipe inspired other cultures',
        icon:DairyIcon,
        height: '400', 
        alt:'Category Image',
    }, 
     {   img:ProductImage, 
        name: 'Vegan recipe inspired other cultures',
        icon:FlourIcon,
        height: '400', 
        alt:'Category Image',
    }, 
     {   img:ProductImage, 
        name: 'Vegan recipe inspired other cultures',
        icon:FruitIcon,
        height: '400', 
        alt:'Category Image',
    }, 
     {   img:ProductImage, 
        name: 'Vegan recipe inspired other cultures',
        icon:VegIcon,
        height: '400', 
        alt:'Category Image',
    }, 
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  borderRadius:20,
  overflow:'hidden',
  [theme.breakpoints.down('xl')]: {
    width: '100% !important', 
    height: '350px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', 
    height: '200px',
  },
  '& .MuiTypography-subtitle1':{
    textAlign:'left',
    fontSize:18,
    fontWeight:500,
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
  bottom: 0,  
  padding:'15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  flexWrap:'wrap',
  flexDirection:'initial !important',
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

function BlogDetail() {

    return (
        <>
            <Box sx={{ mt:8,}}>
                <Container>
                     <Grid container sx={{ display:'flex',justifyContent:'center'}}>
                            <Grid item xs={12} sm={12} md={6}>    
                                <img className="w-100" src={ProductImage} alt=''/>     
                                <Typography className='heading3' variant="h3" sx={{ mt:5,mb:5,textAlign:'center',}} lineHeight={{xs:'30px',md:'30px',lg:'50px'}}>
                                    {"Vegan Malabar Curry with Veggies and Beans"}
                                </Typography>                                                   
                            </Grid>  
                            <Grid item xs={12} sm={12} md={10}>
                                <Typography sx={{ fontSize:'14px',lineHeight:'24px'}}>
                                    {" Mauris iaculis, arcu id ullamcorper posuere, eros lorem placerat libero, vitae sodales tellus tortor quis turpis. Cras volutpat turpis vel purus fermentum, at luctus justo commodo. Fusce in felis eget nibh facilisis imperdiet. Integer pretium mi nec tortor ultricies, id euismod magna molestie. Aliquam eu efficitur enim, et facilisis magna. Mauris lacinia aliquam lorem vitae imperdiet. Integer urna tellus, fringilla at ex ac, cursus varius nunc. Etiam eu libero a risus efficitur facilisis a vel nibh. Morbi nec cursus sapien, gravida finibus purus. Sed vestibulum ornare nibh, a scelerisque odio imperdiet ac. Donec tincidunt ante tellus, luctus rutrum tortor ornare in. Praesent venenatis posuere nunc, dignissim ullamcorper dui euismod sed. Suspendisse potenti. Etiam quis leo in turpis facilisis tincidunt. Duis egestas dignissim arcu, vitae pretium est semper et. Nunc fermentum enim quis nisi faucibus, a placerat risus laoreet. "}
                                </Typography>   
                            </Grid>  
                    </Grid>                      
                </Container>
                 <Container maxWidth="xl">
                     <Swiper
                            className='home_categories'
                            loop={true}
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
                                    slidesPerView: 2,
                                },
                                1200: {
                                    width: 1200,
                                    slidesPerView: 3,
                                },
                            }}
                            modules={[ Navigation]}
                            spaceBetween={30}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                                {CategoriesData.map((data, index)=> (
                                    <SwiperSlide key={index}>                      
                                        <ImageButton
                                            focusRipple
                                            key={data.title}
                                            style={{
                                                height: data.height,
                                            }}
                                            >
                                            <img className='w-100 h-100' src={data.img} alt={data.alt}/>
                                            <ImageBackdrop className="MuiImageBackdrop-root" />
                                            
                                            <Image sx={{ display:"flex",alignItems:"center",flexDirection:'column'}}>
                                                <Box sx={{backgroundColor:'#333',width:'50px',height:'50px', p:0,borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',}}>
                                                    <img className="icon" src={data.icon} alt=""/>
                                                </Box>
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

export default BlogDetail;