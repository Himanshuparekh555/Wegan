import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../index.scss";

// Material Ints
import {
    Grid,
    Typography,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Box,
    Link,
    Radio,
    Button,
    TextField,
    TextareaAutosize,
    styled,
} from "@mui/material";
import ProductImage from '../../../Images/product_image.png';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ClearIcon from '@mui/icons-material/Clear';
const OrderSummery = (props) => {
    const navigate = useNavigate();
    const navigateToProductDetail= () => {
    // navigate to Add to Cart 
         navigate('/product-detail');
     };
    const search = useLocation().search;
    const active = new URLSearchParams(search).get("active");
     useEffect(() => {
    if (active != "4") navigate(`/checkout?active=${active}`);
    }, []);
    // Increment and Decrement Value
    const [num, setNum]= useState(0);
    const incNum =()=>{
        if(num<10)
        {
        setNum(Number(num)+1);
        }
    };
    const decNum = () => {
        if(num>0)
        {
        setNum(num - 1);
        }
    }
    const handleChange = (e)=>{
        setNum(e.target.value);
    }
    return (
        <>
          <Typography className='heading3' gutterBottom variant="h3" sx={{ mb:4}}>
              {"Order summery"}
          </Typography> 
          <Box className="order-summary" sx={{border:'1px solid #F2F2F2',borderRadius:12,}} padding={{xs:2,md:3,lg:3.5}}>
              <Grid container sx={{mb:4, display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <Grid item xs={12} sm={12} md={7} display={{xs:'block',md:'flex',lg:'flex'}} sx={{alignItems:"center",}} marginBottom={{xs:2,lg:0}}>
                        <Box display={{xs:'flex'}} justifyContent={{xs:'center',md:'center',lg:'start'}}>
                            <Box sx={{ backgroundColor:'#FAFAFA',borderRadius:7.5,width:120,height:120,display:"flex",alignItems:"center",}} marginRight={{xs:0,md:3,lg:3}}>
                                <img onClick={navigateToProductDetail} className="cursor-p w-100" src={ProductImage} alt=""/>
                            </Box>
                        </Box>
                        <Box marginTop={{xs:2,lg:0}}>
                            <Typography variant="h5" gutterBottom sx={{ fontSize:18,fontWeight:600,mb:2}}>
                              {"Whole milk 1 pint"}
                            </Typography>
                            <Typography variant="h5" gutterBottom sx={{ fontSize:16,fontWeight:600,}}>
                              {"$97"}
                            </Typography>
                        </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <Grid container spacing={3} sx={{ display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                        <Grid item xs={12} sm={12} md={8} sx={{ display:"flex",alignItems:"center"}}>
                            <Box className="qty" sx={{ display: 'flex', alignItems: 'center',border:'1px solid #E2E2E2',borderRadius:20,mr:3}}>
                              <Button disableRipple onClick={decNum}><KeyboardArrowLeftIcon/></Button>
                              <TextField value={num} onChange={handleChange} id="outlined-basic" />
                              <Button sx={{background:0}} disableRipple onClick={incNum}><KeyboardArrowRightIcon/></Button>
                            </Box>
                            <Button href="/cart-empty" sx={{border:'1px solid #E2E2E2',backgroundColor:'none',p:0,borderRadius:10,minWidth:50,height:50}} ><ClearIcon color="action" fontSize="small" /></Button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} sx={{ display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <Typography variant="h5" gutterBottom sx={{ fontSize:20,fontWeight:600,textAlign:'left'}} display={{xs:'block',md:'block',lg:'none'}}>
                              {"Total"}
                            </Typography>
                            <Typography variant="h5" gutterBottom sx={{ fontSize:20,fontWeight:600,textAlign:'right'}}>
                              {"$97"}
                            </Typography>
                        </Grid>
                    </Grid>
                         
                  </Grid>
              </Grid>
              <Grid container sx={{mb:4, display:"flex",}} justifyContent={{xs:'center',md:'center',lg:'end'}}>
                  <Grid item xs={12} sm={12} md={4} sx={{display:"flex",}} justifyContent={{xs:'center',md:'center',lg:'start'}}>
                      <Button 
                          onClick={() => {
                              props?.setActiveStep(4);
                          }} 
                          className='btn-theme' sx={{pt:1.5,pb:1.5,pl:7,pr:7,borderRadius:10}}>{"Continue"}
                      </Button>
                  </Grid>
              </Grid>
        </Box> 
        
          
        </> 
    )
};

export default OrderSummery;