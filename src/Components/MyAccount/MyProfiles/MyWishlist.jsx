import React, {} from "react";
import "../index.scss";
import ProductImage from '../../../Images/product_image.png';
// Material Ints
import {
    Grid,
    Box,
    Button,
    Typography,
    Link,
    Popper, 
    Fade,
    Paper,
    Divider,
} from "@mui/material";
import { red,grey } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';

const MyWishlist = () => {
      return (
          <>
            <Typography gutterBottom variant="h2" sx={{ fontSize:18,fontWeight:500,mb:3.5}}>
                {"My Wishlist"}
            </Typography>
            <Link href="#" color="inherit" underline="none">
                <Grid container spacing={2} sx={{pb:5,display:"flex",alignItems:"center",}}>
                    <Grid item xs={12} sm={6} md={10} sx={{width:120,height:120,display:"flex",alignItems:"center",}}>
                        <Box sx={{width:120,height:120,display:"flex",alignItems:"center",backgroundColor:'#FAFAFA',borderRadius:6,mr:2}}>
                            <img className="w-100" src={ProductImage} alt=""/>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize:16,fontWeight:600,mb:2}} variant="h5">
                                {"Whole milk 1 pint"}
                            </Typography>
                            <Typography sx={{ fontSize:16,fontWeight:600,}}>
                                {"$97"}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} sx={{mt:1,p:2,display:"flex",justifyContent:'end'}}>
                        <PopupState variant="popper" popupId="demo-popup-popper">
                            {(popupState) => (
                                <div>
                                <Button {...bindToggle(popupState)} variant="text" sx={{color:'#000',borderRadius:10}}><Box sx={{width:35,height:35,backgroundColor:'#F2F2F2',borderRadius:15,display:"flex",alignItems:'center',justifyContent:'center',mr:2}}><DeleteIcon fontSize="small" sx={{ color: grey[900] }} /></Box> {"Delete"}</Button>
                                <Popper {...bindPopper(popupState)} transition placement="bottom-end">
                                    {({ TransitionProps }) => (
                                    <Fade {...TransitionProps} timeout={350}>
                                        <Paper sx={{ p:2,borderRadius:5 }}>
                                        <Typography sx={{ fontSize:13 }}>{"Are you sure you want to remove this product?"}</Typography>
                                        <Box sx={{display:"flex",alignItems:"center",justifyContent:'center',mt:1}}>
                                            <Button sx={{ color: grey[500],pl:2,pr:2 }} variant="text" {...bindToggle(popupState)}>{"Cancel"}</Button>
                                                <Divider orientation="vertical" variant="middle" flexItem />
                                            <Button variant="text" sx={{ color: red[500],pl:2,pr:2 }}>{"Yes, Remove"}</Button>
                                        </Box>
                                        </Paper>
                                    </Fade>
                                    )}
                                </Popper>
                                </div>
                            )}
                        </PopupState>
                    </Grid>
                </Grid>
            </Link>
            <Link href="#" color="inherit" underline="none">
                <Grid container spacing={2} sx={{pb:5,display:"flex",alignItems:"center",}}>
                    <Grid item xs={12} sm={6} md={8} sx={{width:120,height:120,display:"flex",alignItems:"center",}}>
                        <Box sx={{width:120,height:120,display:"flex",alignItems:"center",backgroundColor:'#FAFAFA',borderRadius:6,mr:2}}>
                            <img className="w-100" src={ProductImage} alt=""/>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize:16,fontWeight:600,mb:2}} variant="h5">
                                {"Whole milk 1 pint"}
                            </Typography>
                            <Typography sx={{ fontSize:16,fontWeight:600,}}>
                                {"$97"}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{mt:1,p:2,display:"flex",justifyContent:'end'}}>
                        <PopupState variant="popper" popupId="demo-popup-popper">
                            {(popupState) => (
                                <div>
                                <Button {...bindToggle(popupState)} variant="text" sx={{color:'#000',borderRadius:10}}><Box sx={{width:35,height:35,backgroundColor:'#F2F2F2',borderRadius:15,display:"flex",alignItems:'center',justifyContent:'center',mr:2}}><DeleteIcon fontSize="small" sx={{ color: grey[900] }} /></Box> {"Delete"}</Button>
                                <Popper {...bindPopper(popupState)} transition placement="bottom-end">
                                    {({ TransitionProps }) => (
                                    <Fade {...TransitionProps} timeout={350}>
                                        <Paper sx={{ p:2,borderRadius:5 }}>
                                        <Typography sx={{ fontSize:13 }}>{"Are you sure you want to remove this product?"}</Typography>
                                        <Box sx={{display:"flex",alignItems:"center",justifyContent:'center',mt:1}}>
                                            <Button sx={{ color: grey[500],pl:2,pr:2 }} variant="text" {...bindToggle(popupState)}>{"Cancel"}</Button>
                                                <Divider orientation="vertical" variant="middle" flexItem />
                                            <Button variant="text" sx={{ color: red[500],pl:2,pr:2 }}>{"Yes, Remove"}</Button>
                                        </Box>
                                        </Paper>
                                    </Fade>
                                    )}
                                </Popper>
                                </div>
                            )}
                        </PopupState>
                    </Grid>
                </Grid>
            </Link>
          </>
      )
};

export default MyWishlist;