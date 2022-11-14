import * as React from 'react';
import {useNavigate} from "react-router-dom";
import "./index.scss";

import ImageGallery from 'react-image-gallery';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import RelatedProductsSlider from "./RelatedProductsSlider";
import Newsletter from "../../Components/Newsletter/Index";
import CustomerReview from "../../Components/CustomerReview/Index";

import {ReactComponent as ProtectionIcon} from '../../Images/svg/full_protection_icon.svg';
import {ReactComponent as TrendingIcon} from '../../Images/svg/trending_icon.svg';
import {ReactComponent as NaturalIcon} from '../../Images/svg/natural_icon.svg';
// Material Ints
import {
    styled,
    Grid,
    Box,
    Link,
    Container,
    Breadcrumbs,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Button,
    Rating,
    ToggleButton,
} from "@mui/material";


import ProductImage from '../../Images/product_image.png';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';


const productimages = [
    {
      original: ProductImage,
      thumbnail: ProductImage,
    },
    {
      original: ProductImage,
      thumbnail: ProductImage,
    },
    {
      original: ProductImage,
      thumbnail: ProductImage,
    },
    {
      original: ProductImage,
      thumbnail: ProductImage,
    },
    {
      original: ProductImage,
      thumbnail: ProductImage,
    },
    {
      original: ProductImage,
      thumbnail: ProductImage,
    }
  ];

  // Product Info
  const ProductData = [
    {
       productname:'Whole milk 1 pint',
       sku:'SKU: W123456780',
       price:'$20', 
    }

  ]

  // Rating CSS
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#CFE9CC',
  },
});
const ProductDetail = () => {
    const navigate = useNavigate();
    const navigateToCart = () => {
    // navigate to Add to Cart 
         navigate('/shopping-cart');
     };

    const [selected, setSelected] = React.useState(false);
    // Rating Value
    const value = 3;
    return (
        <>
            <Box className='product_detail' sx={{mt:8,mb:4}}>
                <Container>
                        <Breadcrumbs
                            sx={{mt:4,mb:4}}
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                            className='breadcrumbs'
                        >
                            <Link underline="none" color="inherit" href="/">
                                {"Home"}
                            </Link>
                            <Link underline="none" color="inherit" href="/">
                                {"Categories"}
                            </Link>
                            <Link underline="none" color="inherit" href="/">
                                {"Dairy Item"}
                            </Link>
                            <Typography color="text.primary">{"Whole milk 1 pint"}</Typography>
                        </Breadcrumbs>
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={12} md={6}>
                                <ImageGallery 
                                    showNav={true}
                                    lazyLoad={true}
                                    thumbnailPosition={'left'}
                                    items={productimages}           
                                    showPlayButton={false} 
                                    autoPlay={false}/>     
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                {ProductData.map((data, index)=> (
                                    <Box key={index}>
                                        <Typography className='heading2' gutterBottom variant="h5">
                                            {data.productname}
                                        </Typography>
                                        <Grid container sx={{display:'flex',alignItems:'center'}}>
                                            <Grid item xs={12} sm={7} md={7}>  
                                                <Typography>
                                                    {data.sku}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={5} md={5} sx={{display:'flex',justifyContent:'end'}}>
                                                <StyledRating
                                                    name="text-feedback"
                                                    size="small"
                                                    value={value}
                                                    readOnly
                                                    precision={0.5}
                                                    emptyIcon={<StarIcon style={{ opacity: 0.30 }} fontSize="inherit" />}
                                                />
                                            </Grid>
                                        </Grid>  
                                        <Typography className='heading2' sx={{mt:4,mb:4}} gutterBottom variant="h5">
                                            {data.price}
                                        </Typography>
                                    </Box>    
                                ))} 
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={5} md={4}>
                                        <Button onClick={navigateToCart} className='btn-outline w-100' sx={{ borderRadius:10,pt:1.5,pb:1.5}}>{'Add to Cart'}</Button>
                                    </Grid>
                                    <Grid item xs={12} sm={5} md={4}>
                                        <Button onClick={navigateToCart} className='btn-theme w-100' sx={{ borderRadius:10,pt:1.5,pb:1.5}}>{'Buy Now'}</Button>
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={2}>
                                        <ToggleButton
                                            className='favorite'
                                            sx={{border:'1px solid #E2E2E2',backgroundColor:'none',p:1.9,borderRadius:10,}} 
                                            size='small'
                                            value="right" 
                                            aria-label="right aligned"
                                            selected={selected}
                                            onChange={() => {
                                                setSelected(!selected);
                                            }}>
                                            <FavoriteIcon sx={{ fontSize: 20 }} color="disabled"/>
                                        </ToggleButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>   
                        <Grid container spacing={5} sx={{ display:"flex",alignItems:"center",mt:8,mb:8}}>
                            <Grid item xs={12} sm={6} md={6}>
                                <Typography className='heading3' gutterBottom variant="h5">
                                    {"Explore the features"}
                                </Typography>   
                            </Grid>   
                            <Grid item xs={12} sm={6} md={6}>
                                <List className='product_features' sx={{ width: '100%', maxWidth: 340, }}>
                                    <ListItem>
                                        <ListItemAvatar>
                                        <Avatar sx={{ backgroundColor:'#FAFAFA',}}>
                                            <NaturalIcon />
                                        </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Natural" secondary="We are natural ingredients only when creating our products" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                        <Avatar sx={{ backgroundColor:'#FAFAFA',}}>
                                            <ProtectionIcon />
                                        </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Full protection" secondary="We are natural ingredients only when creating our products" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                        <Avatar sx={{ backgroundColor:'#FAFAFA',}}>
                                            <TrendingIcon />
                                        </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Trending" secondary="We are natural ingredients only when creating our products" />
                                    </ListItem>
                                </List>
                            </Grid>    
                        </Grid>                         
                </Container>
                <CustomerReview/>
                <RelatedProductsSlider/>
                <Newsletter/>
            </Box>
        </>
    )
};

export default ProductDetail;