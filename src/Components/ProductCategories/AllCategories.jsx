import * as React from 'react';
import {NavLink} from "react-router-dom";
import "./index.scss";

import RelatedProductsSlider from "../Products/RelatedProductsSlider";
import Newsletter from "../Newsletter/Index";

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
    fontSize:26,
    fontFamily:'"Poppins", sans-serif',
    fontWeight:'500',
    [theme.breakpoints.down('sm')]: {
        fontSize:18,
    }
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


const AllProductCategories = ({}) => {
    return (
        <>
            <Box className='categories' sx={{ pt:10,pb:10}}>
                <Container>
                    <Grid container spacing={{ xs: 3, md: 5,lg: 10,}} sx={{ display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                         {CategoriesData.map((data, index)=> (
                            <Grid item xs={12} sm={4} md={4} key={index}>   
                            <NavLink to="/product">                 
                                <ImageButton
                                    focusRipple
                                    key={data.title}
                                    style={{
                                        width: data.width,
                                    }}
                                    href="/product"
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
                                </NavLink>
                            </Grid>
                        ))}                        
                    </Grid>
                </Container>
                <RelatedProductsSlider/>
                <Newsletter/>
            </Box>
        </>
    )
};

export default AllProductCategories;