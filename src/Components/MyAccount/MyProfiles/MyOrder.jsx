import React, { useState  } from "react";
import {useNavigate} from "react-router-dom";

import "../index.scss";
import ProductImage from '../../../Images/product_image.png';
// Material Ints
import {
    Grid,
    Box,
    Container,
    Button,
    Typography,
    TextField,
    Link,
    Paper,
    Divider,
    FormGroup,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import { green } from '@mui/material/colors';
import FilterListIcon from '@mui/icons-material/FilterList';
import {ReactComponent as SearchIcon} from '../../../Images/svg/search_icon.svg';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const MyOrder = () => {
    const navigate = useNavigate();
    const navigateToOrderDetail = () => {
    // navigate to Order Detail 
         navigate('/order-details');
     };
    const [isActive, setActive] = useState("false");
    const FilterToggleClass = () => {
        setActive(!isActive);
    };
      return (
          <>
          <Box className='myaccount-section' sx={{pt:5,pb:5,}}>
            <Container maxWidth="xl">
                <Grid container spacing={{xs:0,sm:0,md:3,lg:3}} sx={{ display:"flex",alignItems:'start',}}>
                    <Grid className={isActive ? "filters" : "filters active"} item xs={12} sm={12} md={12} lg={3}>
                        <Paper elevation={2} sx={{borderRadius: '20px',height:'100%',overflow:'auto'}}>
                            <Typography gutterBottom variant="h4" sx={{ display:"flex",alignItems:'center',fontSize:18,fontWeight:500,m:0,p:2}}>
                                {"Filters"}
                            </Typography> 
                            <Divider /> 
                            <Box sx={{p:2}}>
                                <Typography gutterBottom variant="h4" sx={{ display:"flex",alignItems:'center',fontSize:15,fontWeight:500,mt:0,mb:1.5,}}>
                                    {"Order Status"}
                                </Typography> 
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox size="small" 
                                    sx={{
                                        '&.Mui-checked': {
                                            color: green[200],
                                        },
                                    }}
                                    />} label="On the way" />
                                    <FormControlLabel control={<Checkbox size="small" sx={{
                                        '&.Mui-checked': {
                                            color: green[200],
                                        },
                                    }}/>} label="Delivered"/>
                                    <FormControlLabel control={<Checkbox size="small" sx={{
                                        '&.Mui-checked': {
                                            color: green[200],
                                        },
                                    }}/>} label="Cancelled"/>
                                    <FormControlLabel control={<Checkbox size="small" sx={{
                                        '&.Mui-checked': {
                                            color: green[200],
                                        },
                                    }}/>} label="Returned"/>
                                </FormGroup>
                                <Typography gutterBottom variant="h4" sx={{ display:"flex",alignItems:'center',fontSize:15,fontWeight:500,mt:2,mb:1.5,}}>
                                    {"Order Time"}
                                </Typography> 
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox size="small" sx={{
                                        '&.Mui-checked': {
                                            color: green[200],
                                        },
                                    }}/>} label="Last 30 days" />
                                    <FormControlLabel control={<Checkbox size="small" sx={{
                                        '&.Mui-checked': {
                                            color: green[200],
                                        },
                                    }}/>} label="2020"/>
                                    <FormControlLabel control={<Checkbox size="small" sx={{
                                        '&.Mui-checked': {
                                            color: green[200],
                                        },
                                    }}/>} label="2019"/>
                                    <FormControlLabel control={<Checkbox size="small" sx={{
                                        '&.Mui-checked': {
                                            color: green[200],
                                        },
                                    }}/>} label="Older Order"/>
                                </FormGroup>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={9}>
                        <Paper className='orders' elevation={2} sx={{borderRadius: '20px',pb:3}}>
                            <Grid container spacing={1} sx={{ display:"flex",alignItems:"center",pt:2,pl:2,pr:2,mb:2.5}}>
                                <Grid item xs={9} sm={10} md={12}>
                                    <Box sx={{ display:"flex",alignItems:"center",borderRadius:10,height:60,position:'relative',}}>
                                        <TextField fullWidth placeholder='Search your order here…' variant="outlined" />
                                        <Box display={{xs:'none',md:'none',lg:'block'}}>
                                            <Button className="btn-theme"  sx={{height:60,borderRadius:10,pl:6,pr:6,position:'absolute',top:0,bottom:0,right:0}}>{"Search Order"}</Button>
                                        </Box>
                                         <Box display={{xs:'block',md:'block',lg:'none'}} >
                                            <Button sx={{minWidth:'auto', height:60,borderRadius:10,pl:0,pr:0,position:'absolute',top:0,bottom:0,right:'10px'}}><SearchIcon/></Button>
                                        </Box>
                                    </Box> 
                                </Grid>
                                <Grid item xs={3} sm={2} md={3} display={{xs:'block',sm:'block',md:'none',lg:'none'}} >
                                    <Box onClick={FilterToggleClass} sx={{ display:"flex",alignItems:"center",justifyContent:'center'}}>
                                        <FilterListIcon/> Filters
                                    </Box>
                                </Grid>
                            </Grid>
                            <Divider/>
                            <Link onClick={navigateToOrderDetail} sx={{cursor:'pointer'}} color="inherit" underline="none">
                                <Grid container spacing={2} sx={{pt:3,pb:3,pl:2,pr:2,display:"flex",alignItems:"center",}}>
                                    <Grid item xs={12} sm={12} md={12} lg={8} sx={{width:120,height:120,display:"flex",alignItems:"center",position:'relative'}}>
                                        <Box width={{xs:80,md:100,lg:120,}} height={{xs:80,md:100,lg:120,}} sx={{display:"flex",alignItems:"center",backgroundColor:'#FAFAFA',borderRadius:6,mr:2}}>
                                            <img className="w-100" src={ProductImage} alt=""/>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize:16,fontWeight:600,mb:1.5}} variant="h5">
                                                {"Whole milk 1 pint"}
                                            </Typography>
                                            <Typography sx={{ fontSize:16,fontWeight:600,}}>
                                                {"$97"}
                                            </Typography>
                                        </Box>
                                        <Box display={{xs:'block',sm:'block',md:'none',lg:'none'}}>
                                            <NavigateNextIcon  sx={{ position:'absolute',top:0,bottom:0,right:0,margin:'auto'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} display={{xs:'none',md:'none',lg:'block'}} >
                                        <Typography sx={{ fontSize:14,fontWeight:500,mb:0.8}} >
                                            {"Delivered on Feb 13"}
                                        </Typography>
                                        <Typography sx={{color:'#A7A7A7',fontSize:13,fontWeight:400,mb:0.8}}>
                                            {"Your item has been delivered"}
                                        </Typography>
                                        <Link color="inherit" underline="none" href="/product-detail" sx={{color:'#A4D59E',fontSize:14,fontWeight:500,}}>{"Rate & Review Product"}</Link>
                                    </Grid>
                                </Grid>
                            </Link>
                            <Divider xs={{pt:1,pb:1}}/>
                             <Link onClick={navigateToOrderDetail} sx={{cursor:'pointer'}} color="inherit" underline="none">
                                <Grid container spacing={2} sx={{pt:3,pb:3,pl:2,pr:2,display:"flex",alignItems:"center",}}>
                                    <Grid item xs={12} sm={12} md={12} lg={8} sx={{width:120,height:120,display:"flex",alignItems:"center",position:'relative'}}>
                                        <Box width={{xs:80,md:100,lg:120,}} height={{xs:80,md:100,lg:120,}} sx={{display:"flex",alignItems:"center",backgroundColor:'#FAFAFA',borderRadius:6,mr:2}}>
                                            <img className="w-100" src={ProductImage} alt=""/>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize:16,fontWeight:600,mb:1.5}} variant="h5">
                                                {"Whole milk 1 pint"}
                                            </Typography>
                                            <Typography sx={{ fontSize:16,fontWeight:600,}}>
                                                {"$97"}
                                            </Typography>
                                        </Box>
                                        <Box display={{xs:'block',sm:'block',md:'none',lg:'none'}}>
                                            <NavigateNextIcon  sx={{ position:'absolute',top:0,bottom:0,right:0,margin:'auto'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} display={{xs:'none',md:'none',lg:'block'}} >
                                        <Typography sx={{ fontSize:14,fontWeight:500,mb:0.8}} >
                                            {"Delivered on Feb 13"}
                                        </Typography>
                                        <Typography sx={{color:'#A7A7A7',fontSize:13,fontWeight:400,mb:0.8}}>
                                            {"Your item has been delivered"}
                                        </Typography>
                                        <Link color="inherit" underline="none" href="/product-detail" sx={{color:'#A4D59E',fontSize:14,fontWeight:500,}}>{"Rate & Review Product"}</Link>
                                    </Grid>
                                </Grid>
                            </Link>
                            <Divider/>
                             <Link onClick={navigateToOrderDetail} sx={{cursor:'pointer'}} color="inherit" underline="none">
                                <Grid container spacing={2} sx={{pt:3,pb:3,pl:2,pr:2,display:"flex",alignItems:"center",}}>
                                    <Grid item xs={12} sm={12} md={12} lg={8} sx={{width:120,height:120,display:"flex",alignItems:"center",position:'relative'}}>
                                        <Box width={{xs:80,md:100,lg:120,}} height={{xs:80,md:100,lg:120,}} sx={{display:"flex",alignItems:"center",backgroundColor:'#FAFAFA',borderRadius:6,mr:2}}>
                                            <img className="w-100" src={ProductImage} alt=""/>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize:16,fontWeight:600,mb:1.5}} variant="h5">
                                                {"Whole milk 1 pint"}
                                            </Typography>
                                            <Typography sx={{ fontSize:16,fontWeight:600,}}>
                                                {"$97"}
                                            </Typography>
                                        </Box>
                                        <Box display={{xs:'block',sm:'block',md:'none',lg:'none'}}>
                                            <NavigateNextIcon  sx={{ position:'absolute',top:0,bottom:0,right:0,margin:'auto'}}/>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} display={{xs:'none',md:'none',lg:'block'}} >
                                        <Typography sx={{ fontSize:14,fontWeight:500,mb:0.8}} >
                                            {"Delivered on Feb 13"}
                                        </Typography>
                                        <Typography sx={{color:'#A7A7A7',fontSize:13,fontWeight:400,mb:0.8}}>
                                            {"Your item has been delivered"}
                                        </Typography>
                                        <Link color="inherit" underline="none" href="/product-detail" sx={{color:'#A4D59E',fontSize:14,fontWeight:500,}}>{"Rate & Review Product"}</Link>
                                    </Grid>
                                </Grid>
                            </Link>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Box onClick={FilterToggleClass} className={isActive ? "overlay" : "overlay active"}></Box>
          </Box>
          </>
      )
};

export default MyOrder;