import React, { } from "react";
import {useNavigate} from "react-router-dom";
import "./index.scss";
// Material Ints
import {
    Grid,
    Box,
    Container,
    Typography,
    Button,
} from "@mui/material";
import CartEmptyImage from '../../Images/svg/cart-empty.svg';


const ShoppingCartEmpty = ({}) => {
    const navigate = useNavigate();
    const navigateToHome = () => {
    // navigate to Checkout 
         navigate('/');
     };
    return (
        <>
        <Box className='shopping_cart' sx={{ mt:8}}>
            <Container>           
                <Grid container sx={{ display:"flex",justifyContent:'center'}}> 
                    <Grid item xs={8} sm={8} md={4} sx={{ display:"flex",alignItems:"center",justifyContent:'center',flexDirection:'column'}}>
                        <img src={CartEmptyImage} alt=""/>
                        <Typography className='heading3' gutterBottom variant="h5" sx={{ mt:2,mb:0,textAlign:'center'}}>
                            {"Your cart is empty"}
                        </Typography>
                        <Typography variant="body1" gutterBottom sx={{ mt:1,mb:5,textAlign:'center'}}>
                            {"Looks like you haven’t added any items to your cart yet."}
                        </Typography>                        
                        <Button onClick={navigateToHome} variant="contained" className='btn-theme' sx={{ borderRadius:20,pt:1,pb:1,pl:4,pr:4}}>{"Shop Now"}</Button>
                    </Grid>
                </Grid>            
            </Container>
        </Box>
        </>
    )
};

export default ShoppingCartEmpty;