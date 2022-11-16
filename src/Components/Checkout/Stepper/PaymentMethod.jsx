import React, {  useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../index.scss";
import {ReactComponent as SBIIcon} from '../../../Images/svg/sbi_icon.svg';
import UPIIcon from '../../../Images/upi.gif';
import Summary from "../Summary";
// Material Ints
import {
    Grid,
    Box,
    Typography,
    Button,
    TextField,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";


const PaymentMethod = (props) => {
    const navigate = useNavigate();
    const search = useLocation().search;
    const active = new URLSearchParams(search).get("active");
     useEffect(() => {
    if (active != "4") navigate(`/checkout?active=${active}`);
    }, []);
     const navigateToSuccess = () => {
    // navigate to Order success
         navigate('/order-success');
    };
    return (
        <>
        <Grid container spacing={{ xs: 5, md: 12 }} sx={{mb:6,}}>
            <Grid item xs={12} sm={12} md={6}>
                <Box sx={{border:'1px solid #F2F2F2',borderRadius:12,overflow:'hidden'}}>
                    <Typography className='heading3' gutterBottom variant="h3" sx={{ mb:0,p:4}}>
                        {"Payment Details"}
                    </Typography>  
                    <Accordion className="payment-method" sx={{ borderRadius:0,boxShadow:0}}>
                    <AccordionSummary
                        sx={{pl:4,pr:4}}
                        aria-controls="panel1a-content"
                    >
                        <Typography>{"Credit / Debit / ATM Card"}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{pl:4,pr:4}}>
                        <TextField fullWidth placeholder="Card Number" variant="outlined" sx={{mb:3,}} /> 
                        <Grid container spacing={2} sx={{mb:1,}}>
                            <Grid item xs={12} sm={6} md={6}>
                                <TextField fullWidth placeholder="Expiry Date" variant="outlined" sx={{mb:3,}} />  
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <TextField fullWidth placeholder="CVV" variant="outlined" sx={{mb:3,}} />  
                            </Grid>                    
                        </Grid>
                        <Button onClick={navigateToSuccess} className='btn-theme' sx={{pt:1.5,pb:1.5,pl:4,pr:4,borderRadius:12}}>{"Pay $224"}</Button>   
                    </AccordionDetails>
                    </Accordion> 
                    <Accordion className="payment-method" sx={{ borderRadius:0,boxShadow:0,}}>
                        <AccordionSummary
                        sx={{pl:4,pr:4}}
                        aria-controls="panel1a-content"
                        >
                            <Typography sx={{ display:"flex",alignItems:"center",}}><SBIIcon style={{width:26}}/>&nbsp;&nbsp;{"Net Banking"}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{pl:4,pr:4}}>
                            <TextField fullWidth placeholder="Card Number" variant="outlined" sx={{mb:3,}} /> 
                            <Grid container spacing={2} sx={{mb:1,}}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField fullWidth placeholder="Expiry Date" variant="outlined" sx={{mb:3,}} />  
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField fullWidth placeholder="CVV" variant="outlined" sx={{mb:3,}} />  
                                </Grid>                    
                            </Grid>
                            <Button onClick={navigateToSuccess} className='btn-theme' sx={{pt:1.5,pb:1.5,pl:4,pr:4,borderRadius:12}}>{"Pay $224"}</Button>   
                        </AccordionDetails>
                    </Accordion> 
                    <Accordion className="payment-method" sx={{ borderRadius:0,boxShadow:0,}}>
                        <AccordionSummary
                        sx={{pl:4,pr:4}}
                        aria-controls="panel1a-content"
                        >
                            <Typography sx={{ display:"flex",alignItems:"center",}}><img style={{width:24,height:24}} src={UPIIcon} alt=""/>&nbsp;&nbsp;{"UPI"}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{pl:4,pr:4}}>
                            <Typography sx={{ fontSize:14,fontWeight:500,pl:4}}>{"Choose an opton"}</Typography>
                            <Accordion className="payment-method" style={{padding:0,borderBottom:0}} sx={{ borderRadius:0,boxShadow:0}}>
                                <AccordionSummary
                                    sx={{pl:4,pr:4}}
                                    aria-controls="panel1a-content"
                                >
                                    <Typography>{"PhonePe"}</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{pl:4,pr:4}}>
                                    <Button className='btn-theme' sx={{pt:1.2,pb:1.2,pl:4,pr:4,borderRadius:12}}>{"Continue"}</Button>   
                                </AccordionDetails>
                            </Accordion>   
                        </AccordionDetails>
                    </Accordion> 
                    <Accordion className="payment-method" style={{borderBottom:0}} sx={{ borderRadius:0,boxShadow:0,p:0}}>
                        <AccordionSummary
                        sx={{pt:0,pl:4,pr:4}}
                        aria-controls="panel1a-content"
                        >
                            <Typography sx={{ display:"flex",alignItems:"center",}}><img style={{width:24,height:24}} src={UPIIcon} alt=""/>&nbsp;&nbsp;{"Wallets"}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{pl:4,pr:4}}>
                            <Accordion className="payment-method" style={{padding:0,borderBottom:0}} sx={{ borderRadius:0,boxShadow:0}}>
                                <AccordionSummary
                                    sx={{pt:0,pl:4,pr:4}}
                                    aria-controls="panel1a-content"
                                >
                                    <Typography>{"Paytm Wallet"}</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{pl:4,pr:4}}>
                                    <Button className='btn-theme' sx={{pt:1.2,pb:1.2,pl:4,pr:4,borderRadius:12}}>{"Continue"}</Button>   
                                </AccordionDetails>
                            </Accordion>   
                        </AccordionDetails>
                    </Accordion> 
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Summary/>
            </Grid>
        </Grid>
        
        </> 
    )
};

export default PaymentMethod;