import React, { useState } from "react";
import GoVeganImg from "../../Images/go-vegan.png"
import "./index.scss";
import OTPInput from "otp-input-react";
// Material Ints
import {
    Grid,
    Box,
    Typography,
    TextField ,
    Button,
    Link,
    IconButton,
    OutlinedInput,
    InputAdornment,
    FormControl,
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Login() {

    // OTP Input
    const [OTP, setOTP] = useState("");


   const [values, setValues] = React.useState({
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

  const [showPanel, setShowPanel] = useState(1);
  const handlepanel=(e)=>{
        setShowPanel(e);
  }



    return (
        <>
            <Box className="login-section">
                <Grid container className={showPanel===1 ? 'h-100 panel active' : 'panel h-100'}>
                    <Grid item xs={12} sm={12} md={4} sx={{ alignItems:"stretch",flexWrap:"wrap"}}>
                        <Box className="sidebox h-100" sx={{ p:4,display:"flex",flexWrap:"wrap"}}>
                            <Box>
                                <Typography className="title" variant="h1" gutterBottom sx={{fontWeight:600,}} fontSize={{xs:22,md:22,lg:26}} marginBottom={{xs:2,md:2,lg:3}}>
                                    {"Login"}
                                </Typography>
                                <Typography className="content" variant="body1" gutterBottom fontSize={{xs:12,md:13,lg:16}} sx={{fontWeight:500}}>
                                    {"Get access to your Orders, Wishlist and Recommendations"}
                                </Typography>
                            </Box>
                            <Box sx={{ alignSelf:"flex-end",width:"100%",textAlign:"center" }}>
                                <img alt="Wegan" src={GoVeganImg}/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} sx={{ display:"flex",alignItems:"stretch",justifyContent:"center"}}>
                        <Box className="field" padding={{xs:2,md:2,lg:0,}} sx={{ display:"flex",alignItems:"center"}}>
                            <Grid container sx={{ display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <Grid item xs={12} sm={12} md={10}>
                                        <Box sx={{ mb:3}}>
                                            <TextField fullWidth  id="outlined-basic" placeholder="Enter email or mobile number" variant="outlined" />
                                        </Box>
                                        <Box sx={{ mb:3,position:"relative"}}>
                                        <FormControl fullWidth>
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
                                            <Link onClick={()=> handlepanel(3)} underline="none" sx={{position:"absolute",color:'#A4D59E',right:45,top:15,cursor:'pointer',fontSize:'14px'}}>{"Forgot?"}</Link>
                                        </Box>
                                        <Typography variant="body1" gutterBottom sx={{ fontSize:18,fontWeight:500,mb:5}}>
                                            By continuing, you agree to Wegan’s <Link  underline="none" color="inherit" href="#" sx={{ fontSize:13}}>Terms of Use</Link> and <Link underline="none" color="inherit" href="#" sx={{ fontSize:13}}>Privacy Policy.</Link>
                                        </Typography>
                                        <Grid container sx={{ display:"flex",alignItems:"center",justifyContent:"center"}}>
                                            <Grid item xs={8} sm={8} md={8}>
                                                <Button sx={{ borderRadius:50,p:1.5}} className="btn-theme w-100" disableElevation variant="contained">{"Login"}</Button>
                                                <Typography variant="body1" gutterBottom sx={{ fontSize:18,fontWeight:500,mt:3,mb:2,textAlign:"center"}}>
                                                    {"OR"}
                                                </Typography>
                                                <Button onClick={()=> handlepanel(4)} sx={{ borderRadius:50,p:1.5,fontSize:16}} className="btn-secondary w-100" disableElevation variant="outlined">{"Request OTP"}</Button>
                                                 <Box sx={{ display:"flex",justifyContent:"center",mt:3}}>
                                                    <Typography variant="caption"  sx={{ fontSize:'14px',fontWeight:400,mb:3}}>
                                                        {"Existing User?"} 
                                                    </Typography>
                                                    <Link underline="none" color="inherit" href="#" sx={{ p:0,fontSize:16,fontWeight:600,ml:0.5}} onClick={()=> handlepanel(2)}>{"Signup"}</Link>
                                                </Box>
                                            </Grid>
                                        </Grid>                                        
                                    </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container className={showPanel===2 ? 'h-100 panel active' : 'panel h-100'}>
                    <Grid item xs={12} sm={12} md={4} sx={{ alignItems:"stretch",flexWrap:"wrap"}}>
                        <Box className="sidebox h-100" sx={{ p:4,display:"flex",flexWrap:"wrap"}}>
                            <Box>
                                <Typography className="title" variant="h1" gutterBottom sx={{fontWeight:600,}} fontSize={{xs:22,md:22,lg:26}} marginBottom={{xs:2,md:2,lg:3}}>
                                    {"Looks like you’re new here!"}
                                </Typography>
                                <Typography className="content" variant="body1" gutterBottom fontSize={{xs:12,md:13,lg:16}} sx={{fontWeight:500}}>
                                    {"Sign up with your mobile number to get started"}
                                </Typography>
                            </Box>
                            <Box sx={{ alignSelf:"flex-end",width:"100%",textAlign:"center" }}>
                                <img alt="Wegan" src={GoVeganImg}/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} sx={{ display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <Box className="field" padding={{xs:2,md:2,lg:0,}}>
                            <Grid container sx={{ display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <Grid item xs={12} md={12} lg={8}>
                                        <TextField fullWidth placeholder="Enter full name" variant="outlined" sx={{ mb:3}}/>
                                        <TextField fullWidth placeholder="Enter email" variant="outlined" sx={{ mb:3}}/>
                                        <FormControl fullWidth sx={{ mb:3}}>
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
                                            <Grid item xs={8}>
                                                <Button sx={{ borderRadius:50,p:1.6,mb:3}} className="btn-theme w-100" disableElevation variant="contained">{"Signup"}</Button>
                                                <Box sx={{ display:"flex",justifyContent:"center",mt:1}}>
                                                    <Typography variant="caption"  sx={{ fontSize:'14px',fontWeight:400,mb:3}}>
                                                        {"Existing User?"} 
                                                    </Typography>
                                                    <Link underline="none" color="inherit" href="#" sx={{ p:0,fontWeight:600,ml:0.5}} onClick={()=> handlepanel(1)}>{"Log in"}</Link>
                                                </Box>
                                            </Grid>
                                        </Grid>                                        
                                    </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container className={showPanel===3 ? 'panel active' : 'panel'}>
                        <Grid item xs={12} sm={12} md={4} sx={{ alignItems:"stretch",flexWrap:"wrap"}}>
                            <Box className="sidebox h-100" sx={{ p:4,display:"flex",flexWrap:"wrap"}}>
                                <Box>
                                    <Typography className="title" variant="h1" gutterBottom sx={{fontWeight:600,}} fontSize={{xs:22,md:22,lg:26}} marginBottom={{xs:2,md:2,lg:3}}>
                                        {"Forgot Your Password?"}
                                    </Typography>
                                    <Typography className="content" variant="body1" gutterBottom fontSize={{xs:12,md:13,lg:16}} sx={{fontWeight:500}}>
                                        {"Please enter your email address below to receive a OTP."}
                                    </Typography>
                                </Box>
                                <Box sx={{ alignSelf:"flex-end",width:1000,textAlign:"center" }}>
                                    <img alt="Wegan" src={GoVeganImg}/>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} sx={{ display:"flex",alignItems:"stretch",justifyContent:"center"}}>
                            <Box className="field w-100" padding={{xs:2,md:2,lg:0,}} sx={{ display:"flex",alignItems:"center"}}>
                            <Grid container sx={{ display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <Grid item xs={12} md={12} lg={8}>
                                        <Box sx={{ mb:5,position:"relative"}}>
                                            <TextField fullWidth value="firoz@techverse.world" variant="outlined" disabled/>
                                            <Link onClick={()=> handlepanel(1)} underline="none" sx={{position:"absolute",color:'#A4D59E',right:20,top:15,cursor:'pointer',fontSize:'14px'}}>{"Change?"}</Link>
                                        </Box>
                                        <Typography variant="h3" gutterBottom sx={{ fontSize:18,fontWeight:500,mb:3}}>
                                            {"OTP sent to Mobile"}
                                        </Typography>
                                        <Box sx={{ mb:3,position:"relative"}}>
                                            <TextField fullWidth placeholder='Enter OTP' variant="outlined" />
                                            <Link underline="none" sx={{position:"absolute",color:'#333',right:20,top:15,cursor:'pointer',fontSize:'14px'}}>{"Resend?"}</Link>
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
                                            <Grid item xs={8}>
                                                <Button sx={{ borderRadius:50,p:1.5}} className="btn-theme w-100" disableElevation variant="contained">{"Login"}</Button>
                                                 <Box sx={{ display:"flex",justifyContent:"center",mt:3}}>
                                                        <Typography variant="caption"  sx={{ fontSize:'14px',fontWeight:400,mb:3}}>
                                                            {"Existing User?"} 
                                                        </Typography>
                                                        <Link underline="none" color="inherit" onClick={()=> handlepanel(1)} sx={{ p:0,fontWeight:600,ml:0.5,cursor:'pointer'}} >{"Log in"}</Link>
                                                    </Box>
                                            </Grid>
                                        </Grid>                                        
                                    </Grid>
                            </Grid>
                        </Box>
                        </Grid>
                </Grid>
                <Grid container className={showPanel===4 ? 'panel active' : 'panel'}>
                      <Grid item xs={12} sm={12} md={4} sx={{ alignItems:"stretch",flexWrap:"wrap"}}>
                        <Box className="sidebox h-100" sx={{ p:4,display:"flex",flexWrap:"wrap"}}>
                            <Box>
                                <Typography className="title" variant="h1" gutterBottom sx={{fontWeight:600,}} fontSize={{xs:22,md:22,lg:26}} marginBottom={{xs:2,md:2,lg:3}}>
                                    {"Login"}
                                </Typography>
                                <Typography className="content" variant="body1" gutterBottom fontSize={{xs:12,md:13,lg:16}} sx={{fontWeight:500}}>
                                    {"Get access to your Orders, Wishlist and Recommendations"}
                                </Typography>
                            </Box>
                            <Box sx={{ alignSelf:"flex-end",width:1000,textAlign:"center" }}>
                                <img alt="Wegan" src={GoVeganImg}/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} sx={{ display:"flex",alignItems:"stretch",justifyContent:"center"}}>
                        <Box className="field" padding={{xs:2,md:2,lg:0,}} sx={{ display:"flex",alignItems:"center"}}>
                            <Grid container sx={{ display:"flex",alignItems:"center",justifyContent:"center",}}>
                                    <Grid item xs={12}>
                                        <Typography variant="h5" gutterBottom sx={{fontSize:16,fontWeight:400,mb:0,textAlign:'center'}}>
                                            {"Please enter the OTP sent to"}
                                        </Typography>
                                        <Box sx={{ display:"flex",alignItems:"center",justifyContent:'center',mb:10}}>
                                            <Typography variant="h5" gutterBottom sx={{fontSize:15,fontWeight:400,m:0}}>
                                                {"firoz@techverse.world"} 
                                            </Typography>
                                            <Link onClick={()=> handlepanel(3)} underline="none" sx={{color:'#A4D59E',cursor:'pointer',fontSize:15,ml:1}}>{"Change"}</Link>
                                        </Box>
                                        <OTPInput className="otp" value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="any" disabled={false} secure />
                                            <Box sx={{ display:"flex",justifyContent:"center",mt:5}}>
                                                <Button sx={{ borderRadius:50,pt:1.5,pb:1.5,pl:8,pr:8}} className="btn-theme " disableElevation variant="contained">{"Verify"}</Button>
                                                </Box>
                                                    <Box sx={{ display:"flex",justifyContent:"center",mt:3}}>
                                                    <Typography variant="caption"  sx={{ fontSize:'14px',fontWeight:400,mb:3}}>
                                                        {"Not received your code?"} 
                                                    </Typography>
                                                    <Link underline="none" color="inherit" href="#" sx={{ p:0,fontSize:16,fontWeight:600,ml:0.5,color:'#A4D59E'}} onClick={()=> handlepanel(2)}>{"Resend code"}</Link>
                                                    </Box>
                                                 <Box sx={{ display:"flex",justifyContent:"center",mt:1}}>
                                                    <Typography variant="caption" sx={{ fontSize:'14px',fontWeight:400,mb:3}}>
                                                        {"New to Wegan?"} 
                                                    </Typography>
                                                    <Link underline="none" color="inherit" href="#" sx={{ p:0,fontSize:16,ml:0.5}} onClick={()=> handlepanel(2)}>{"Signup"}</Link>
                                                </Box>                                   
                                    </Grid>
                            </Grid>
                        </Box>
                    </Grid>                          
                </Grid>
            </Box>
        </>
    )
};

export default Login;