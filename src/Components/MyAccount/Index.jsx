import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import PersonalInformation from "./MyProfiles/PersonalInformation";
import ManageAddresses from "./MyProfiles/ManageAddresses";
import MyWishlist from "./MyProfiles/MyWishlist";
import Notifications from "./MyProfiles/AllNotifications";
import Savecarddetails from "./MyProfiles/Savecarddetails";
import GiftCard from "./MyProfiles/GiftCard";
import VPAdetails from "./MyProfiles/VPAdetails";
import TermsConditions from "./MyProfiles/TermsConditions";
import PrivacyPolicy from "./MyProfiles/PrivacyPolicy";

import {ReactComponent as UserIcon} from '../../Images/svg/user_icon.svg';
import {ReactComponent as MyorderIcon} from '../../Images/svg/myorder_icon.svg';
import {ReactComponent as ProfileIcon} from '../../Images/profile_icon.svg';
import {ReactComponent as ChatIcon} from '../../Images/svg/chat_icon.svg';
import {ReactComponent as LogoutIcon} from '../../Images/svg/logout_icon.svg';
import {ReactComponent as MystuffIcon} from '../../Images/svg/mystuff_icon.svg';
import {ReactComponent as PaymentsIcon} from '../../Images/svg/payments_icon.svg';
// Material Ints
import {
    Grid,
    Box,
    Container,
    Typography,
    Divider,
    Link,
    Paper,
} from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const MyAccount = ({}) => {
    
    const navigate = useNavigate();
    // Stepper
    const [isActiveStep, setActiveStep] = useState(1);
    return (
        <>
        <Box className='myaccount-section' sx={{pt:5,pb:5,}}>
            <Container>      
                <Grid container spacing={3}  sx={{mb:6,}}>
                    <Grid item xs={12} sm={12} md={3} className="sidebar">
                        <Paper elevation={2} sx={{mb:2,p:2,borderRadius: '20px'}}>
                            <Grid container sx={{ display:"flex",alignItems:'center'}}>
                                <Grid item xs={3}>
                                    <UserIcon/>
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography sx={{color:'#A5A5A5',fontSize:14,fontWeight:400}}>
                                        {"Hello,"}
                                    </Typography>
                                    <Typography gutterBottom variant="h2" sx={{ fontSize:16,fontWeight:500,mb:0}}>
                                        {"Himanshu Parekh"}
                                    </Typography>                                   
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper elevation={2} sx={{borderRadius: '20px'}}>
                            <Link underline="none" color="inherit" sx={{ display:"flex",alignItems:'center',justifyContent:'space-between',pt:2,pb:2,pl:3,pr:3,}} href="/my-order">
                                <Typography variant="caption" display="block" gutterBottom sx={{display:"flex",alignItems:'center',mb:0}}>
                                    <MyorderIcon/>&nbsp;&nbsp;&nbsp;&nbsp;{"My Orders"}
                                </Typography>
                                 <Typography variant="caption" display="block" gutterBottom sx={{mb:0}}>
                                    <KeyboardArrowRightIcon/>
                                </Typography>
                            </Link>
                            <Divider />
                            <Typography gutterBottom variant="h4" sx={{ display:"flex",alignItems:'center',fontSize:16,fontWeight:500,mb:0,pt:3,pb:1,pl:3,pr:3}}>
                                <ProfileIcon/>&nbsp;&nbsp;&nbsp;&nbsp;{"Account Settings"}
                            </Typography>     
                            <Link underline="none" color="inherit" sx={{ display:"block",justifyContent:'space-between',pt:1,pb:1,pl:7,pr:7,fontSize:14}} className={isActiveStep === 1 ? "active" : ""}
                            onClick={() => {
                                setActiveStep(1);
                                navigate(`/my-account?active=${1}`);
                            }}>
                                {"Profile Information"}
                            </Link>
                            <Link underline="none" color="inherit" sx={{ display:"block",justifyContent:'space-between',pt:1,pb:1,pl:7,pr:7,fontSize:14}} className={isActiveStep === 2 ? "active" : ""}
                            onClick={() => {
                                setActiveStep(2);
                                navigate(`/my-account?active=${2}`);
                            }}>
                                {"Manage Address"}
                            </Link>
                            <Divider sx={{ pt:1,pb:1}}/>
                            <Typography gutterBottom variant="h4" sx={{ display:"flex",alignItems:'center',fontSize:16,fontWeight:500,mb:0,pt:3,pb:1,pl:3,pr:3}}>
                                <PaymentsIcon/>&nbsp;&nbsp;&nbsp;&nbsp;{"Payments"}
                            </Typography>   
                            {/* <Link underline="none" color="inherit" sx={{ display:"block",justifyContent:'space-between',pt:1,pb:1,pl:7,pr:7,fontSize:14}} className={isActiveStep === 3 ? "active" : ""}
                            onClick={() => {
                                setActiveStep(3);
                                navigate(`/my-account?active=3`);
                            }}>
                                {"Gift Card"}
                            </Link>
                            <Link underline="none" color="inherit" sx={{ display:"block",justifyContent:'space-between',pt:1,pb:1,pl:7,pr:7,fontSize:14}} className={isActiveStep === 4 ? "active" : ""}
                            onClick={() => {
                                setActiveStep(4);
                                navigate(`/my-account?active=4`);
                            }}>
                                {"Saved UPI"}
                            </Link> */}
                             <Link underline="none" color="inherit" sx={{ display:"block",justifyContent:'space-between',pt:1,pb:1,pl:7,pr:7,fontSize:14}} className={isActiveStep === 5 ? "active" : ""}
                            onClick={() => {
                                setActiveStep(5);
                                navigate(`/my-account?active=5`);
                            }}>
                                {"Saved Cards"}
                            </Link>
                            <Divider sx={{ pt:1,}}/>
                            <Link underline="none" color="inherit" sx={{ display:"flex",alignItems:'center',justifyContent:'space-between',pt:2,pb:2,pl:3,pr:3,}}>
                                <Typography variant="caption" display="block" gutterBottom sx={{display:"flex",alignItems:'center',mb:0}}>
                                    <ChatIcon/>&nbsp;&nbsp;&nbsp;&nbsp;{"My Chats"}
                                </Typography>
                                 <Typography variant="caption" display="block" gutterBottom sx={{mb:0}}>
                                    <KeyboardArrowRightIcon/>
                                </Typography>
                            </Link>
                            <Divider />
                             <Typography gutterBottom variant="h4" sx={{ display:"flex",alignItems:'center',fontSize:16,fontWeight:500,mb:0,pt:3,pb:1,pl:3,pr:3}}>
                                <MystuffIcon/>&nbsp;&nbsp;&nbsp;&nbsp;{"My Stuff"}
                            </Typography>  
                             <Link underline="none" color="inherit" sx={{ display:"block",justifyContent:'space-between',pt:1,pb:1,pl:7,pr:7,fontSize:14}} className={isActiveStep === 6 ? "active" : ""}
                            onClick={() => {
                                setActiveStep(6);
                                navigate(`/my-account?active=6`);
                            }}>
                                {"My reviews & Ratings"}
                            </Link>
                             <Link underline="none" color="inherit" sx={{ display:"block",justifyContent:'space-between',pt:1,pb:1,pl:7,pr:7,fontSize:14}} className={isActiveStep === 7 ? "active" : ""}
                            onClick={() => {
                                setActiveStep(7);
                                navigate(`/my-account?active=7`);
                            }}>
                                {"My Wishlist"}
                            </Link>
                             <Link underline="none" color="inherit" sx={{ display:"block",justifyContent:'space-between',pt:1,pb:1,pl:7,pr:7,fontSize:14}} className={isActiveStep === 8 ? "active" : ""}
                            onClick={() => {
                                setActiveStep(8);
                                navigate(`/my-account?active=8`);
                            }}>
                                {"All Notifications"}
                            </Link>
                            <Link underline="none" color="inherit" sx={{ display:"block",justifyContent:'space-between',pt:1,pb:1,pl:7,pr:7,fontSize:14}} className={isActiveStep === 9 ? "active" : ""}
                            onClick={() => {
                                setActiveStep(9);
                                navigate(`/my-account?active=9`);
                            }}>
                                {"Terms & Conditions"}
                            </Link>
                            <Link underline="none" color="inherit" sx={{ display:"block",justifyContent:'space-between',pt:1,pb:1,pl:7,pr:7,fontSize:14}} className={isActiveStep === 10 ? "active" : ""}
                            onClick={() => {
                                setActiveStep(10);
                                navigate(`/my-account?active=10`);
                            }}>
                                {"Privacy Policy"}
                            </Link>
                            <Divider sx={{ pt:1,}}/>
                            <Link href="/" underline="none" color="inherit" sx={{ display:"flex",alignItems:'center',justifyContent:'space-between',pt:2,pb:2,pl:3,pr:3,}} >
                                <Typography variant="caption" display="block" gutterBottom sx={{display:"flex",alignItems:'center',mb:0}}>
                                    <LogoutIcon/>&nbsp;&nbsp;&nbsp;{"Logout"}
                                </Typography>
                                 <Typography variant="caption" display="block" gutterBottom sx={{mb:0}}>
                                    <KeyboardArrowRightIcon/>
                                </Typography>
                            </Link>
                       </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                        <Paper elevation={2} sx={{mb:2,p:3,borderRadius: '20px'}}>
                            {isActiveStep === 1 && (
                                <PersonalInformation setActiveStep={setActiveStep} />
                            )}
                            {isActiveStep === 2 && (
                            <ManageAddresses setActiveStep={setActiveStep} />
                            )}
                            {isActiveStep === 3 && (
                            <GiftCard setActiveStep={setActiveStep} />
                            )}
                            {isActiveStep === 4 && (
                                <VPAdetails setActiveStep={setActiveStep} />
                            )}
                            {isActiveStep === 5 && (
                                <Savecarddetails setActiveStep={setActiveStep} />
                            )}
                            {isActiveStep === 7 && (
                                <MyWishlist setActiveStep={setActiveStep} />
                            )}
                            {isActiveStep === 8 && (
                                <Notifications setActiveStep={setActiveStep} />
                            )}
                             {isActiveStep === 9 && (
                                <TermsConditions setActiveStep={setActiveStep} />
                            )}
                            {isActiveStep === 10 && (
                                <PrivacyPolicy setActiveStep={setActiveStep} />
                            )}
                        </Paper>
                    </Grid>
                </Grid>     
            </Container>            
        </Box>
        </>
    )
};

export default MyAccount;