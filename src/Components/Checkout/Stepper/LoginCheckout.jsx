import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../index.scss";
import Summary from "../Summary";
import LoginDialog from "../../Logref/Dialog";
// Material Ints
import {
    Grid,
    Box,
    Typography,
    FormControl,
    Button,
    TextField,
} from "@mui/material";
import { grey } from '@mui/material/colors';

const LoginCheckout = (props) => {
    const navigate = useNavigate();
    const search = useLocation().search;
    const active = new URLSearchParams(search).get("active");
     useEffect(() => {
    if (active != "1") navigate(`/checkout?active=${active}`);
    }, []);

     // Dialog popup 
    const [dialog, setDialog] = React.useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
        <Grid container spacing={{ xs: 5, md: 12 }} sx={{mb:6,}}>
            <Grid item xs={12} sm={6} md={6}>
                <Box sx={{border:'1px solid #F2F2F2',borderRadius:12}} padding={{xs:2,md:3,lg:3.5}}>
                <Typography className='heading3' gutterBottom variant="h3" sx={{ mb:4}}>
                     {"Details"}
                </Typography>  
                <TextField sx={{mb:3,}} fullWidth  id="outlined-basic" placeholder="Your email address" variant="outlined" />
                <FormControl fullWidth>
                    <TextField id="outlined-basic" placeholder="Password" variant="outlined" />
                    <Button size="small" sx={{position:'absolute',right:10,top:12,color: grey[800],borderRadius:10}} variant="text">{"Forgot password?"}</Button>
                </FormControl>    
                <Button 
                onClick={() => {
                    props?.setActiveStep(2);
                }} 
                className='btn-theme w-100' sx={{mt:6,pt:1.9,pb:1.9,pl:5,pr:5,borderRadius:10}}>{"Continue"}</Button>   

                <Grid container spacing={2} marginTop={{xs:0,md:3,lg:3}}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Button onClick={() => {
                    props?.setActiveStep(2);
                }}  className='btn-login w-100' sx={{pt:1.5,pb:1.5,borderRadius:12}}>{"Continue as Guest"}</Button>   
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Button onClick={() => handleOpen()} className='btn-login w-100' sx={{pt:1.5,pb:1.5,borderRadius:12}}>{"Create account"}</Button>   
                    </Grid>
                </Grid>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Summary/>
            </Grid>
        </Grid>
        <LoginDialog
                isDialogOpened={isOpen}
                handleCloseDialog={() => setIsOpen(false)}
        />
        </> 
    )
};

export default LoginCheckout;