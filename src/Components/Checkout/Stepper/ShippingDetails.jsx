import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../index.scss";
import Summary from "../Summary";
// Material Ints
import {
    Grid,
    Box,
    Typography,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
    Button,
    TextField,
    styled,
    MenuItem,
    Select,
    InputLabel,
} from "@mui/material";
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 20,
  height: 20,
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#C3C3C3',
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#CFE9CC',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 20,
    height: 20,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#CFE9CC',
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      sx={{
        '&:hover': {
          bgcolor: 'transparent',
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const ShippingDetails = (props) => {
    const navigate = useNavigate();
    const search = useLocation().search;
    const active = new URLSearchParams(search).get("active");
     useEffect(() => {
    if (active != "2") navigate(`/checkout?active=${active}`);
    }, []);
    
    const [state, setState] = React.useState('');

    const handleChange = (event) => {
        setState(event.target.value);
    };
   
    
    return (
        <>
        <Grid container spacing={{ xs: 5, md: 12 }} sx={{mb:6,}}>
            <Grid item xs={12} sm={12} md={6}>
                <Box sx={{border:'1px solid #F2F2F2',borderRadius:12,}} padding={{xs:2,md:3,lg:3.5}}>
                    <Typography className='heading3' gutterBottom variant="h3" sx={{ mb:4}}>
            {"Shipping Details"}
        </Typography>  
        <Button className='btn-theme' sx={{mb:3,pt:1.5,pb:1.5,pl:4,pr:4,borderRadius:10}}>
            <LocationSearchingIcon sx={{mr:1}}/> {"Use my Current Location"}
        </Button>
        <TextField fullWidth  placeholder="Full name" variant="outlined" sx={{mb:3,}} />
        <TextField fullWidth placeholder="Mobile number" variant="outlined" sx={{mb:3,}} />  
        <TextField fullWidth  placeholder="Pincode" variant="outlined" sx={{mb:3,}} />
        <TextField fullWidth placeholder="Locality" variant="outlined" sx={{mb:3,}} />  
        <TextField fullWidth placeholder="Address (area and street)" variant="outlined" sx={{mb:3,}} />
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
                <TextField fullWidth placeholder="City" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state}
                    label="State"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Lorem Ipsum</MenuItem>
                    <MenuItem value={20}>Lorem Ipsum</MenuItem>
                    <MenuItem value={30}>Lorem Ipsum</MenuItem>
                </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField fullWidth placeholder="Landmark" variant="outlined"  />  
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField fullWidth placeholder="Alternate number" variant="outlined" />  
            </Grid>
        </Grid>
        <FormControl fullWidth sx={{mt:3.5,}}>
            <FormLabel  sx={{mb:1,color:'inherit'}}>{"Address type"}</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-customized-radios"
                name="customized-radios"
            >
                <FormControlLabel value="Home" control={<BpRadio />} label="Home" />
                <FormControlLabel value="Work (Office)" control={<BpRadio />} label="Work (Office)" />
            </RadioGroup>
        </FormControl>
        <FormControl fullWidth sx={{mt:3.5,}}>
            <FormLabel  sx={{mb:1,color:'inherit',fontSize:24}}>{"Billing Details"}</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-customized-radios"
                name="customized-radios"
            >
                <FormControlLabel value="Same as shipping address" control={<BpRadio />} label="Same as shipping address" />
            </RadioGroup>
        </FormControl>
        <Button 
        onClick={() => {
            props?.setActiveStep(3);
        }} 
        className='btn-theme w-100' sx={{mt:6,pt:1.9,pb:1.9,pl:5,pr:5,borderRadius:10}}>{"Continue"}</Button>  
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Summary/>
            </Grid>
        </Grid>
        
        </> 
    )
};

export default ShippingDetails;