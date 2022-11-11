import * as React from 'react';
import GoVeganImg from "../../Images/go-vegan.png"
import "./index.scss";
// Material Ints
import {
    Grid,
    Box,
    Container,
    Typography,
    TextField ,
    Button,
    Link,
    FormControl,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const ForgotPassword = ({}) => {
   
    //  Show hide Password
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
        ...values,
        showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Box className="login-section" sx={{ display:"flex",alignItems:"center"}}>
                    <Grid container>
                        <Grid item xs={2} sm={4} md={4} sx={{ alignItems:"stretch",flexWrap:"wrap"}}>
                            <Box className="sidebox h-100" sx={{ p:4,display:"flex",flexWrap:"wrap"}}>
                                <Box>
                                    <Typography className="title" variant="h1" gutterBottom sx={{ fontSize:26,fontWeight:600,mb:3}}>
                                        {"Forgot Your Password?"}
                                    </Typography>
                                    <Typography className="content" variant="body1" gutterBottom sx={{ fontSize:16,fontWeight:500}}>
                                        {"Please enter your email address below to receive a OTP."}
                                    </Typography>
                                </Box>
                                <Box sx={{ alignSelf:"flex-end",width:1000,textAlign:"center" }}>
                                    <img src={GoVeganImg}/>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={4} md={8} sx={{ display:"flex",alignItems:"stretch",justifyContent:"center"}}>
                            <Box className="field w-100" sx={{ display:"flex",alignItems:"center"}}>
                            <Grid container sx={{ display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <Grid item xs={2} sm={4} md={8}>
                                        <Box sx={{ mb:5,position:"relative"}}>
                                            <TextField fullWidth value="firoz@techverse.world" variant="outlined" disabled/>
                                            <Link href="#" className='forgot_link' underline="none" sx={{position:"absolute",color:'#A4D59E',right:20,top:15,}}>{"Change?"}</Link>
                                        </Box>
                                        <Typography variant="h3" gutterBottom sx={{ fontSize:18,fontWeight:500,mb:3}}>
                                            {"OTP sent to Mobile"}
                                        </Typography>
                                        <Box sx={{ mb:3,position:"relative"}}>
                                            <TextField fullWidth placeholder='Enter OTP' variant="outlined" />
                                            <Link href="#" className='forgot_link' underline="none" sx={{position:"absolute",color:'#333',right:20,top:15,}}>{"Resend?"}</Link>
                                        </Box>
                                        <FormControl fullWidth sx={{ mb:3,}}>
                                            <OutlinedInput
                                                    placeholder='Password'
                                                    id="outlined-adornment-password"
                                                    type={values.showPassword ? 'text' : 'password'}
                                                    value={values.password}
                                                    onChange={handleChange('password')}
                                                    endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                        >
                                                        {values.showPassword ? <VisibilityOff /> :          <Visibility color="disabled" />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                    }
                                                />
                                        </FormControl>
                                        <Grid container sx={{ display:"flex",alignItems:"center",justifyContent:"center"}}>
                                            <Grid item xs={2} sm={4} md={8}>
                                                <Button sx={{ borderRadius:50,p:1.5}} className="btn-theme w-100" disableElevation variant="contained">{"Login"}</Button>
                                                 <Box sx={{ display:"flex",justifyContent:"center",mt:3}}>
                                                        <Typography variant="caption"  sx={{ fontSize:15,fontWeight:500,mb:3}}>
                                                            {"Existing User?"} 
                                                        </Typography>
                                                        <Link underline="none" color="inherit" href="#" sx={{ p:0,fontSize:16,fontWeight:600,ml:0.5}} >{"Log in"}</Link>
                                                    </Box>
                                            </Grid>
                                        </Grid>                                        
                                    </Grid>
                            </Grid>
                        </Box>
                        </Grid>
                    </Grid>
            </Box>
        </>
    )
};

export default ForgotPassword;