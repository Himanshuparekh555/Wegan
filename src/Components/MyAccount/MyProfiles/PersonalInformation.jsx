import * as React from 'react';
import "../index.scss";
// Material Ints
import {
    Grid,
    Typography,
    TextField,
    Link,
    styled,
    Radio,
    RadioGroup,
    FormControlLabel,
} from "@mui/material";
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
class PersonalInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { disabled: true }
    }
    handleInformationClick() {
        this.setState( {disabled: !this.state.disabled} )
    } 
    handleEmailClick() {
        this.setState( {disabled: !this.state.disabled} )
    } 
    render() {
      return (
          <>
                  <Typography gutterBottom variant="h2" sx={{ fontSize:18,fontWeight:500,mb:3.5}}>
                      {"Personal Information"} <Link onClick = {this.handleInformationClick.bind(this)} underline="none" color="inherit" sx={{ fontSize:14,color:'#A4D59E',ml:4,cursor:'pointer'}}>{ this.state.disabled? 'Edit' : 'Cancel'}</Link>
                  </Typography>
                  <Grid container spacing={2} sx={{mb:3,}}>
                      <Grid item xs={12} sm={6} md={4}>
                          <TextField fullWidth  value="Himanshu" disabled = {(this.state.disabled)? "disabled" : ""}/>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                          <TextField  fullWidth  value="Parekh" disabled = {(this.state.disabled)? "disabled" : ""}/>
                      </Grid>
                  </Grid>
                  <Typography gutterBottom variant="h2" sx={{ fontSize:15,fontWeight:500,mb:2}}>
                      {"Your Gender"}
                  </Typography>
                  <RadioGroup
                  row
                  defaultValue="Male"
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
              >
                  <FormControlLabel disabled = {(this.state.disabled)? "disabled" : ""} value="Male" control={<BpRadio />} label="Home" />
                  <FormControlLabel disabled = {(this.state.disabled)? "disabled" : ""} value="Female" control={<BpRadio />} label="Female" />
                  </RadioGroup>
                  <Typography gutterBottom variant="h2" sx={{ fontSize:18,fontWeight:500,mt:5,mb:3}}>
                      {"Personal Information"} <Link onClick = {this.handleEmailClick.bind(this)} underline="none" color="inherit" sx={{ fontSize:14,color:'#A4D59E',ml:4,cursor:'pointer'}}>{ this.state.disabled? 'Edit' : 'Cancel'}</Link><Link onClick = {this.handleEmailClick.bind(this)} underline="none" color="inherit" sx={{ fontSize:14,color:'#A4D59E',ml:4,cursor:'pointer'}}>{"Change Password"}</Link>
                  </Typography>
                  <Grid container spacing={2} sx={{mb:3,}}>
                      <Grid item xs={12} sm={6} md={4}>
                          <TextField fullWidth  value="Himanshu" disabled = {(this.state.disabled)? "disabled" : ""}/>
                      </Grid>
                  </Grid>
                  <Typography gutterBottom variant="h2" sx={{ fontSize:18,fontWeight:500,mt:8,mb:3}}>
                      {"Mobile Number"} <Link onClick = {this.handleEmailClick.bind(this)} underline="none" color="inherit" sx={{ fontSize:14,color:'#A4D59E',ml:4,cursor:'pointer'}}>{ this.state.disabled? 'Edit' : 'Cancel'}</Link>
                  </Typography>
                  <Grid container spacing={2} sx={{mb:8,}}>
                      <Grid item xs={12} sm={6} md={4}>
                          <TextField fullWidth  value="+91123456789" disabled = {(this.state.disabled)? "disabled" : ""}/>
                      </Grid>
                  </Grid>
                  <Link href="#" underline="none" color="inherit" sx={{ fontSize:14,color:'#A4D59E',cursor:'pointer',fontWeight:500,}}>{"Deactivate Account"}</Link>
          </>
      )
    };
};

export default PersonalInformation;