import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import Newsletter from "../Newsletter/Index";
import LoginCheckout from "./Stepper/LoginCheckout";
import ShippingDetails from "./Stepper/ShippingDetails";
import OrderSummery from "./Stepper/OrderSummery";
import PaymentMethod from "./Stepper/PaymentMethod";

// Material Ints
import {
    Grid,
    Box,
    Container,
    Typography,
    Link,
    List,
    ListItem,
    Breadcrumbs,
} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const Checkout = () => {
    
    const navigate = useNavigate();
    // Stepper
    const [isActiveStep, setActiveStep] = useState(1);
    return (
        <>
        <Box className='checkout_section' sx={{mt:8,mb:6,}}>
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
                    <Link underline="none" color="inherit" href="/shopping-cart">
                        {"Shopping Cart"}
                    </Link>
                    <Typography color="text.primary">{"Checkout"}</Typography>
                </Breadcrumbs>
                <Typography className='heading3' gutterBottom variant="h1" sx={{ mt:5}}>
                    {"Checkout"}
                </Typography>      
                <Grid container  sx={{mb:6,}}>
                    <Grid item xs={12} sm={6} md={4}>
                        <List className="indicators" sx={{ display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <ListItem className={isActiveStep === 1 ? "active" : ""}
                            onClick={() => {
                                setActiveStep(1);
                                navigate(`/checkout?active=${1}`);
                            }}>
                                {"1"}
                            </ListItem>
                            <ListItem className={isActiveStep === 2 ? "active" : ""}
                            onClick={() => {
                                setActiveStep(2);
                                navigate(`/checkout?active=2`);
                            }}>
                                {"2"}
                            </ListItem>
                            <ListItem className={isActiveStep === 3 ? "active" : ""}
                            onClick={() => {
                                setActiveStep(3);
                                navigate(`/checkout?active=3`);
                            }}>
                                {"3"}
                            </ListItem>
                            <ListItem className={isActiveStep === 4 ? "active" : ""}
                            onClick={() => {
                                setActiveStep(4);
                                navigate(`/checkout?active=4`);
                            }}>
                                {"4"}
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>    
                {isActiveStep === 1 && (
                    <LoginCheckout setActiveStep={setActiveStep} />
                )}
                {isActiveStep === 2 && (
                    <ShippingDetails setActiveStep={setActiveStep} />
                )}
                {isActiveStep === 3 && 
                    <OrderSummery setActiveStep={setActiveStep} />
                }
                {isActiveStep === 4 && (
                    <PaymentMethod setActiveStep={setActiveStep} />
                )}  
               
            </Container>    
            <Newsletter/>            
        </Box>
        </>
    )
};

export default Checkout;