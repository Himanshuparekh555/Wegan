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
const SignUp = ({handleLoginClick}) => {
   
    const handleClickLogin = () => {
        handleLoginClick()
    }; 
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
                                        {"Looks like you’re new here!"}
                                    </Typography>
                                    <Typography className="content" variant="body1" gutterBottom sx={{ fontSize:18,fontWeight:500}}>
                                        {"Sign up with your mobile number to get started"}
                                    </Typography>
                                </Box>
                                <Box sx={{ alignSelf:"flex-end",width:1000,textAlign:"center" }}>
                                    <img src={GoVeganImg}/>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={4} md={8} sx={{ display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <Box className="field">
                                <Grid container sx={{ display:"flex",alignItems:"center",justifyContent:"center"}}>
                                        <Grid item xs={2} sm={4} md={8}>
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
                                                <Grid item xs={2} sm={4} md={8}>
                                                    <Button sx={{ borderRadius:50,p:1.6,mb:3}} className="btn-theme w-100" disableElevation variant="contained">{"Signup"}</Button>
                                                    <Box sx={{ display:"flex",justifyContent:"center",mt:1}}>
                                                        <Typography variant="caption"  sx={{ fontSize:15,fontWeight:500,mb:3}}>
                                                            {"Existing User?"} 
                                                        </Typography>
                                                        <Link underline="none" color="inherit" href="#" sx={{ p:0,fontSize:16,fontWeight:600,ml:0.5}} onClick={handleClickLogin}>{"Log in"}</Link>
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

export default SignUp;