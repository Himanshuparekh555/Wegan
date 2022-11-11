import * as React from 'react';
import {useNavigate,NavLink} from "react-router-dom";
import "./index.scss";
import ProductFilters from "./ProductFilters";
import RelatedProductsSlider from "./RelatedProductsSlider";
import Newsletter from "../../Components/Newsletter/Index";
import {ReactComponent as CartIcon} from '../../Images/cart_icon.svg';

// Material Ints
import {
    styled,
    Grid,
    Box,
    Link,
    Container,
    Breadcrumbs,
    Typography,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Checkbox,
    Label,
    Button,
    Rating,
    ToggleButton,
} from "@mui/material";

import ProductImage from '../../Images/product_image.png';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// Product Data
const ProductCardData = [
    {   img:ProductImage, 
        title: 'Fresh green',
        price:'$ 715', 
        alt:'Product Image',
        button:'Add to cart',
    }, 
    {   img:ProductImage, 
        title: 'Fresh green',
        price:'$ 715', 
        alt:'Product Image',
        button:'Add to cart',
    }, 
    {   img:ProductImage, 
        title: 'Fresh green',
        price:'$ 715', 
        alt:'Product Image',
        button:'Add to cart',
    }, 
    {   img:ProductImage, 
        title: 'Fresh green',
        price:'$ 715', 
        alt:'Product Image',
        button:'Add to cart',
    }, 
    {   img:ProductImage, 
        title: 'Fresh green',
        price:'$ 715', 
        alt:'Product Image',
        button:'Add to cart',
    }, 
    {   img:ProductImage, 
        title: 'Fresh green',
        price:'$ 715', 
        alt:'Product Image',
        button:'Add to cart',
    }, 
];

// Rating CSS
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#CFE9CC',
  },
});


const ProductList = ({}) => {
    // Wishlist
    const [selected, setSelected] = React.useState(false);
    // Rating
    const value = 3;

    const navigate = useNavigate();
    const navigateToProductDetail = () => {
    // navigate to Product detail 
         navigate('/product-detail');
     };
    return (
        <>
        <Box className='product_list'>
            <Container>     
                <Grid container sx={{ display:"flex",alignItems:"center",justifyContent:"space-between",mt:8}}>
                    <Grid item xs={12} sm={6} md={6} order={{ xs: 1, sm: 0 }}>
                        <Typography textAlign={{xs:'center',md:'left'}} className='heading2' gutterBottom variant="h5">
                            {"Bakery Items"}
                        </Typography>      
                    </Grid> 
                    <Grid item xs={12} sm={6} md={6} justifyContent={{xs:'center',sm:'end',md:'end',lg:'end',xl:'end'}} sx={{ display:"flex",}} order={{ xs: 0, sm: 1 }}>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                            className='breadcrumbs'
                            paddingBottom={{xs:2,md:0,}}
                        >
                            <Link underline="none" color="inherit" href="/">
                                {"Home"}
                            </Link>
                            <Typography color="text.primary">{"Bakery Items"}</Typography>
                        </Breadcrumbs>
                    </Grid>   
                </Grid>         
                <ProductFilters/> 
                <Grid container spacing={{xs:1,sm:3,md:3,lg:5}} sx={{ display:"flex",alignItems:"center",justifyContent:"space-between",mt:0}}>
                    {ProductCardData.map((data, index)=> (
                        <Grid item xs={12} sm={6} md={4} key={index}>                            
                            <Card className='product_card' sx={{boxShadow:0,position:'relative',}}>
                                <Box className='favorite' sx={{ border:0,backgroundColor:'none',p:0,borderRadius:10,position:'absolute',right:20,top:20,zIndex:1}} >
                                <Checkbox {...label} icon={<FavoriteIcon sx={{ fontSize: 20 }}/>} checkedIcon={<FavoriteIcon sx={{ fontSize: 20 }}/>} />
                                </Box>
                                <Box className='browseImage' sx={{ position:'relative',backgroundColor:'#FAFAFA',borderRadius:10,pt:40}}>
                                    <CardMedia
                                        onClick={navigateToProductDetail}
                                        component="img"
                                        alt={data.alt}
                                        image={data.img}
                                        sx={{ position:'absolute',left:0,right:0,top:0,bottom:0,objectFit:'contain',objectPosition:'center',cursor:'pointer'}}
                                    />
                                    <Button onClick={navigateToProductDetail} variant="outlined" className='btn_shop' sx={{borderRadius:10}}><CartIcon/>&nbsp;&nbsp;{data.button}</Button>
                                </Box>
                              
                                <CardActions sx={{ pt:2,pb:1,pl:0,pr:0}}>
                                    <NavLink to="/product-detail">
                                        <Typography className='title' gutterBottom variant="h5" sx={{ mb:0,fontWeight:500,whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden'}}>
                                        {data.title}
                                    </Typography>
                                    </NavLink>                                    
                                </CardActions>
                                <CardContent sx={{ pt:0,pl:0,pr:0,pb:0}}>
                                    <StyledRating
                                        size="small"
                                        name="text-feedback"
                                        value={value}
                                        readOnly
                                        precision={0.5}
                                        emptyIcon={<StarIcon style={{ opacity: 0.30 }} fontSize="inherit" />}
                                    />
                                    <Typography className='price' gutterBottom variant="h6" sx={{mt:1, mb:0,fontWeight:600}}>
                                        {data.price}
                                    </Typography>
                                    <Grid container>
                                        <Grid item xs={12} sm={6} md={6}>
                                            
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={5.5}></Grid>
                                    </Grid>
                                </CardContent>
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

export default ProductList;