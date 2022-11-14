import * as React from 'react';
import "./index.scss";
import {ReactComponent as SuccessIcon} from '../../Images/svg/success_icon.svg';
// Material Ints
import {
    Grid,
    Box,
    Container,
    Typography,
    Button,
} from "@mui/material";

function OrderedSuccessfully() {
    return (
        <>
        <Container>
             <Box className="order-success" sx={{mt:10,mb:10}}>
                <Grid container sx={{ display:"flex",justifyContent:'center'}}>
                    <Grid item xs={12} sm={6} md={5} sx={{ display:"flex",alignItems:"center",flexDirection:'column',justifyContent:'center'}}>
                        <SuccessIcon/>
                        <Typography className="heading2" variant="h6" sx={{ textAlign:'center',mb:2}}>
                            {"Successfully ordered!"}
                        </Typography>  
                        <Typography  variant="body1" gutterBottom sx={{ textAlign:'center',color:'#8E8E93',fontSize:14}}>
                            {"And then she said that we would go to a clothing store and was truly inspired"}
                        </Typography>  
                        <Grid container spacing={{ xs: 2, md: 4 }} sx={{pt:5}}>
                            <Grid item xs={12} sm={6} md={6}>
                                <Button 
                                    className='btn-theme w-100' sx={{pt:1.5,pb:1.5,borderRadius:10}}>{"Continue Shopping"}
                                </Button> 
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <Button className='btn-outline w-100' sx={{border:'1px solid #E2E2E2',backgroundColor:'none',borderRadius:15,pt:1.5,pb:1.5,}}>{"Create Account"}</Button> 
                            </Grid>
                             <Grid item xs={12} sx={{ display:"flex",justifyContent:'center',}}>
                                <Button sx={{color:'#A4D59E',borderRadius:10}}>{"Track Your Order"}</Button> 
                            </Grid>
                        </Grid>
                                                           
                    </Grid>
                </Grid>
            </Box>
        </Container>
        </>
    )
};

export default OrderedSuccessfully;