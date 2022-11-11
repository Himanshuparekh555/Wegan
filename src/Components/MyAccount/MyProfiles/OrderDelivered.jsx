import React, { } from "react";
import {NavLink} from "react-router-dom";
import ProductImage from '../../../Images/product_image.png';
import "../index.scss";
// Material Ints
import {
    Box,   
    Grid, 
    Typography,
    Breadcrumbs,
    Button,
    Link,
    Paper,
    Container,
    Stepper,
    Step,
    StepLabel,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import { grey } from '@mui/material/colors';
const steps = [
    {
        status:'Ordered',
        datetime:'Tue, 3th Nov',
    },
    {
        status:'Shipped',
        datetime:'Fri, 4th Nov',
    },
    {
        status:'Out For Delivery',
        datetime:'Sat, 5th Nov',
    },
    {
        status:'Delivered',
        datetime:'Sun, 6th Nov',
    },
];
const OrderDelivered = ({}) => {
      return (
          <>
            <Box className="myaccount-section" sx={{pt:3,pb:8}}>
                <Container>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                        className='breadcrumbs'
                        sx={{pb:5}}
                    >
                        <Link underline="none" color="inherit" href="/">
                            {"Home"}
                        </Link>
                        <Link underline="none" color="inherit" href="/">
                            {"My Account"}
                        </Link>
                        <Link underline="none" color="inherit" href="/">
                            {"My Orders"}
                        </Link>
                        <Typography color="text.primary">{"Whole milk 1 pint"}</Typography>
                    </Breadcrumbs>
                    <Paper elevation={2} sx={{p:3,borderRadius:'20px'}}>
                        <Grid container spacing={2} sx={{display:"flex",alignItems:"center",}}>
                            <Grid item xs={12} sm={12} md={8}>
                                <Stepper className="stepper" activeStep={1} alternativeLabel>
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepLabel> 
                                                <Typography fontSize={{xs:12,md:13,lg:14,}} sx={{ fontWeight:500,mb:0.5}}>
                                                    {label.status}
                                                </Typography>
                                                <Typography fontSize={{xs:10,md:12,lg:13,}} sx={{ fontWeight:400,}}>
                                                    {label.datetime}
                                                </Typography>
                                            </StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <List>
                                    <ListItem disablePadding sx={{p:0}}>
                                        <ListItemButton>
                                        <ListItemIcon>
                                            <StarBorderOutlinedIcon sx={{ color: grey[800] }}/>
                                        </ListItemIcon>
                                        <ListItemText 
                                        primary={
                                            <>
                                                <Typography sx={{fontSize:14,}} color="text.primary">{"Rate & Review Product"}</Typography>
                                            </>
                                        } />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                        <ListItemIcon>
                                            <RefreshOutlinedIcon sx={{ color: grey[800] }}/>
                                        </ListItemIcon>
                                        <ListItemText primary={
                                            <>
                                                <Typography sx={{fontSize:14,}} color="text.primary">{"Return"}</Typography>
                                            </>
                                        }  />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                        <ListItemIcon>
                                            <InfoOutlinedIcon sx={{ color: grey[800] }}/>
                                        </ListItemIcon>
                                        <ListItemText primary={
                                            <>
                                                <Typography sx={{fontSize:14,}} color="text.primary">{"Need help?"}</Typography>
                                            </>
                                        } />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                        <Grid container padding={{xs: 0, md: 5,lg: 8,}} spacing={{ xs: 3, md: 5,lg: 8,}}>
                            <Grid item xs={12} sm={12} md={6} sx={{display:"flex",alignItems:"stretch",}}>
                                <Paper className="w-100" variant="outlined" sx={{p:3,borderRadius:10}}>
                                    <Typography gutterBottom variant="h2" sx={{ fontSize:24,fontWeight:600,mb:3.5}}>
                                        {"Delivery Address"}
                                    </Typography>
                                    <Typography gutterBottom variant="h2" sx={{ fontSize:18,fontWeight:600,mb:3.5}}>
                                        {"Mohd Firoz"}
                                    </Typography>
                                    <Typography sx={{ fontSize:14,fontWeight:400,mb:3.5,lineHeight:'25px'}}>
                                        {"82, Harun Colony, Malwa Sabun Centre Khajrana, Hotel Zakir Indore - 452016, Madhya Pradesh."}
                                    </Typography>
                                    <Typography gutterBottom variant="h2" sx={{ fontSize:14,fontWeight:500,}}>
                                        {"Phone number"}
                                    </Typography>
                                    <Typography sx={{ fontSize:14,fontWeight:400,mb:2,}}>
                                        {"9424650210"}
                                    </Typography>
                                    <Grid container spacing={2} sx={{display:"flex",alignItems:"center",mb:3}}>
                                        <Grid item xs={12} sm={12} md={8}>
                                            <Typography sx={{ fontSize:14,fontWeight:400,}}>
                                                {"Download Invoice"}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Button className="btn-theme w-100" sx={{ pt:1,pb:1,borderRadius:20,}}>{"Download"}</Button>
                                        </Grid>
                                    </Grid>
                                    <Typography sx={{ fontSize:14,fontWeight:400,}}>
                                        {"Return policy valid till Feb 27"} <Link underline="none" href="#">{"Know more"}</Link>
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} sx={{display:"flex",alignItems:"stretch",}}>
                                <Paper className="w-100" variant="outlined" sx={{p:3,borderRadius:10}}>
                                    <Grid container sx={{mb:2}}>
                                <Grid item xs={4} sm={4} md={4}>
                                    <NavLink to="/shopping-cart"><Box width={{xs:'100%',md:100,lg:130,}} height={{xs:'100%',md:100,lg:130,}} sx={{display:'flex',alignItems:'center', background:'#FAFAFA',borderRadius:6,}}><img className="w-100" src={ProductImage} alt=""/></Box></NavLink>
                                </Grid>
                                <Grid item xs={8} sm={8} md={8} sx={{ display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <Box sx={{ml:2}}>
                                        <Typography gutterBottom variant="h6">
                                            {"Whole milk 1 pint"}
                                        </Typography>  
                                        <Typography gutterBottom variant="h6" sx={{mb:0}}>
                                            {"$97"}
                                        </Typography>  
                                    </Box>                                  
                                </Grid>
                            </Grid>
                            <Grid container sx={{mb:2}}>
                                <Grid item xs={4} sm={4} md={4}>
                                    <NavLink to="/shopping-cart"><Box width={{xs:'100%',md:100,lg:130,}} height={{xs:'100%',md:100,lg:130,}} sx={{display:'flex',alignItems:'center', background:'#FAFAFA',borderRadius:6,}}><img className="w-100" src={ProductImage} alt=""/></Box></NavLink>
                                </Grid>
                                <Grid item xs={8} sm={8} md={8} sx={{ display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <Box sx={{ml:2}}>
                                        <Typography gutterBottom variant="h6">
                                            {"Whole milk 1 pint"}
                                        </Typography>  
                                        <Typography gutterBottom variant="h6" sx={{mb:0}}>
                                            {"$97"}
                                        </Typography>  
                                    </Box>                                 
                                </Grid>
                            </Grid>
                            <Box className="summary" sx={{ display:"flex",alignItems:"center",justifyContent:'space-between',mt:2.5,mb:2.5}}>
                                <Typography>
                                    {"Total:"}
                                </Typography>
                                <Typography>
                                    {"$20.73"}
                                </Typography>
                                </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
          </>
      )
};

export default OrderDelivered;