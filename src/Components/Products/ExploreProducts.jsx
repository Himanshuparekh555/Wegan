import * as React from 'react';
import "./index.scss";
import ProductFilters from "./ProductFilters";
import RelatedProductsSlider from "./RelatedProductsSlider";
import Newsletter from "../../Components/Newsletter/Index";
// Material Ints
import {
    Grid,
    Box,
    Container,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Checkbox,
    Typography,
    Button,
} from "@mui/material";

import ProductImage from '../../Images/product_image.png';

import Favorite from '@mui/icons-material/Favorite';
import FavoriteIcon from '@mui/icons-material/Favorite';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// Product Data
const ProductCardData = [
    {   img:ProductImage, 
        title: 'Womens black vest Gucci',
        description: 'This is a wonderful black vest, which is well suited for parties and also great This is a wonderful black vest, which is well suited for parties and also great',
        price:'$ 715', 
        alt:'Product Image',
        button:'Shop Now',
    }, 
    {   img:ProductImage, 
        title: 'Womens black vest Gucci',
        description: 'This is a wonderful black vest, which is well suited for parties and also great This is a wonderful black vest, which is well suited for parties and also great',
        price:'$ 715', 
        alt:'Product Image',
        button:'Shop Now',
    }, 
    {   img:ProductImage, 
        title: 'Womens black vest Gucci',
        description: 'This is a wonderful black vest, which is well suited for parties and also great This is a wonderful black vest, which is well suited for parties and also great',
        price:'$ 715', 
        alt:'Product Image',
        button:'Shop Now',
    }, 
    {   img:ProductImage, 
        title: 'Womens black vest Gucci',
        description: 'This is a wonderful black vest, which is well suited for parties and also great This is a wonderful black vest, which is well suited for parties and also great',
        price:'$ 715', 
        alt:'Product Image',
        button:'Shop Now',
    }, 
    {   img:ProductImage, 
        title: 'Womens black vest Gucci',
        description: 'This is a wonderful black vest, which is well suited for parties and also great This is a wonderful black vest, which is well suited for parties and also great',
        price:'$ 715', 
        alt:'Product Image',
        button:'Shop Now',
    }, 
    {   img:ProductImage, 
        title: 'Womens black vest Gucci',
        description: 'This is a wonderful black vest, which is well suited for parties and also great This is a wonderful black vest, which is well suited for parties and also great',
        price:'$ 715', 
        alt:'Product Image',
        button:'Shop Now',
    }, 
];


const HomeProductGridView = () => {
    return (
        <>
        <Box className='product_grid'>
            <Container>                
                <ProductFilters/>
                <Typography className='heading2' gutterBottom variant="h5" sx={{ mt:2,mb:4}}>
                    {"Explore out Products"}
                </Typography>
                <Grid container spacing={3}>
                        {ProductCardData.map((data, index)=> (
                        <Grid item xs={12} sm={6} md={4} key={index}>                            
                            <Card className='product_card' sx={{ p:3,borderRadius:5,boxShadow:0,position:'relative'}}>
                                <Box className='favorite' sx={{ border:0,backgroundColor:'none',p:0,borderRadius:10,position:'absolute',right:20,top:20,zIndex:1}} >
                                <Checkbox {...label} icon={<Favorite sx={{ fontSize: 20 }}/>} checkedIcon={<FavoriteIcon sx={{ fontSize: 20 }}/>} />
                            </Box>
                                <Box className='browseImage' sx={{ position:'relative'}}>
                                    <CardMedia
                                        component="img"
                                        alt={data.alt}
                                        height="140"
                                        image={data.img}
                                        sx={{ position:'absolute',left:0,right:0,top:0,bottom:0,objectFit:'contain',objectPosition:'center'}}
                                    />
                                </Box>
                                <CardContent sx={{ pl:0,pr:0,pb:3}}>
                                    <Typography className='title' gutterBottom variant="h5" sx={{ mb:2.5}}>
                                        {data.title}
                                    </Typography>
                                    <Typography className='des' variant="body2">
                                        {data.description}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ pt:0,pl:0,pr:0}}>
                                    <Grid container sx={{ display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                        <Grid item xs={6} sm={6} md={6}>
                                            <Typography className='price' gutterBottom variant="h6" sx={{ mb:0}}>
                                                {data.price}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={5.5}><Button variant="outlined" className='w-100 btn_shop' sx={{ p:0,borderRadius:5}}>{data.button}</Button></Grid>
                                    </Grid>
                                </CardActions>
                            </Card>                                                  
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

export default HomeProductGridView;