import React, { useState, } from "react";
import { Stepper, Step } from "react-form-stepper";
import StepWizard from "react-step-wizard";
import "./index.scss";
import ProductImage from '../../Images/product_image.png';
// Material Ints
import {
    Grid,
    Box,
    Container,
    Typography,
    Button,
    Link,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    styled,
    Radio,
    InputLabel,
    Select,
    MenuItem,
    RadioGroup,
    FormLabel,
    FormControlLabel,
    FormControl,
    TextField,
    Breadcrumbs,
} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ClearIcon from '@mui/icons-material/Clear';
import { grey,red  } from '@mui/material/colors';


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


const ActionButtons = (props) => {
  const handleBack = () => {
    props.previousStep();
  };

  const handleNext = () => {
    props.nextStep();
  };

  const handleFinish = () => {
    props.lastStep();
  };

  return (
    <>
       
        {props.currentStep < props.totalSteps && (
        <Button className='btn-theme w-100' sx={{mt:5,pt:1.9,pb:1.9,pl:5,pr:5,borderRadius:12}} onClick={handleNext}>{"Continue"}</Button>
        )}
         {props.currentStep > 1 && (
            <Box sx={{ display:"flex",justifyContent:"center"}}>
                <Button className="btn-login" sx={{mt:4,pt:0.8,pb:0.8,pl:4,pr:4,borderRadius:12}} onClick={handleBack}>Back</Button>
            </Box>
        )}
        {props.currentStep === props.totalSteps && (
            <Button onClick={handleFinish}>Finish</Button>
        )}
    </>
  );
};

const One = (props) => {
  const [emailid, setEmailID] = useState({});
  const [password, setPassword] = useState({});
  const [error, setError] = useState("");

  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    setEmailID((emailid) => ({
      ...emailid,
      [targetName]: targetValue
    }));
    setPassword((password) => ({
      ...password,
      [targetName]: targetValue
    }));
  };

  const validate = () => {
    if (!emailid.name) setError("Enter email id");
    if (!password.name) setError("Enter password");
    else {
      setError("");
      props.nextStep();
      props.userCallback(emailid);
      props.userCallback(password);
    }
  };

  return (
    <div>    
        <Grid container spacing={12} sx={{mb:6,}}>
            <Grid item xs={12} sm={6} md={6}>
                <Box sx={{border:'1px solid #F2F2F2',borderRadius:12,p:5}}> 
                <Typography className='heading3' gutterBottom variant="h3" sx={{ mb:4}}>
                     {"Details"}
                </Typography>  
                <FormControl fullWidth sx={{mb:3,}}>
                <TextField
                    fullWidth
                    type="text"
                    name="name"
                    placeholder="Your email address"
                    onChange={onInputChanged}
                />
                <Typography sx={{ color: red[500] }}>{error}</Typography>
                </FormControl>
                <FormControl fullWidth>
                    <TextField name="password" type="password" placeholder="Password" onChange={onInputChanged}  />
                    <Button size="small" sx={{position:'absolute',right:10,top:12,color: grey[800],borderRadius:10}} variant="text">{"Forgot password?"}</Button>
                    <Typography sx={{ color: red[500] }}>{error}</Typography>
                </FormControl>                  
                <ActionButtons sx={{pt:1.5,pb:1.5,borderRadius:12}} {...props} nextStep={validate} />
                <Grid container spacing={2} sx={{mt:3}}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Button className='btn-login w-100' sx={{pt:1.5,pb:1.5,borderRadius:12}}>{"Continue as Guest"}</Button>   
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Button className='btn-login w-100' sx={{pt:1.5,pb:1.5,borderRadius:12}}>{"Create account"}</Button>   
                    </Grid>
                </Grid>
                </Box>                
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Box sx={{border:'1px solid #F2F2F2',borderRadius:12,p:4}}>
                            <Grid container sx={{mb:2}}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Link href="/shopping-cart"sx={{display:'flex',alignItems:'center', background:'#FAFAFA',borderRadius:6,height:130}}><img className="w-100" src={ProductImage} alt=""/></Link>
                                </Grid>
                                <Grid item xs={12} sm={6} md={8} sx={{ display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <Box sx={{ml:2}}>
                                        <Typography gutterBottom variant="h6">
                                            {"Whole milk 1 pint"}
                                        </Typography>  
                                        <Typography gutterBottom variant="h6" sx={{mb:0}}>
                                            {"$97"}
                                        </Typography>  
                                    </Box>
                                    <Button size="small" sx={{border:'1px solid #E2E2E2',backgroundColor:'none',p:0,borderRadius:15,minWidth:40,height:40}} ><ClearIcon color="action" fontSize="small" /></Button>                                    
                                </Grid>
                            </Grid>
                            <Grid container sx={{mb:2}}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Link href="/shopping-cart"sx={{display:'flex',alignItems:'center', background:'#FAFAFA',borderRadius:6,height:130}}><img className="w-100" src={ProductImage} alt=""/></Link>
                                </Grid>
                                <Grid item xs={12} sm={6} md={8} sx={{ display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <Box sx={{ml:2}}>
                                        <Typography gutterBottom variant="h6">
                                            {"Whole milk 1 pint"}
                                        </Typography>  
                                        <Typography gutterBottom variant="h6" sx={{mb:0}}>
                                            {"$97"}
                                        </Typography>  
                                    </Box>
                                    <Button size="small" sx={{border:'1px solid #E2E2E2',backgroundColor:'none',p:0,borderRadius:15,minWidth:40,height:40}} ><ClearIcon color="action" fontSize="small" /></Button>                                    
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
                            <Box className="summary" sx={{ display:"flex",alignItems:"center",justifyContent:'center',mt:5}}>
                                <Button className='btn-outline' sx={{pt:1,pb:1,pl:4,pr:4,borderRadius:12}}>{"Edit cart"}</Button>   
                            </Box>
                </Box>
            </Grid>
        </Grid>
    </div>
  );
};

const Two = (props) => {
  const [info2, setInfo2] = useState({});
  const [error, setError] = useState("");

  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setInfo2((info2) => ({
      ...info2,
      [targetName]: targetValue
    }));
  };

  const validate2 = () => {
    if (!info2.age) setError("Age is mandatory field");
    else {
      setError("");
      props.nextStep();
      props.userCallback(info2);
    }
  };
    const [state, setState] = React.useState('');
    const handleChange = (event) => {
        setState(event.target.value);
    };
  return (
    <div>
        <Grid container spacing={12} sx={{mb:6,}}>
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{border:'1px solid #F2F2F2',borderRadius:12,p:5}}> 
                  <Typography className='heading3' gutterBottom variant="h3" sx={{ mb:4}}>
                    {"Shipping Details"}
                  </Typography>  
                  <TextField fullWidth onChange={onInputChanged} name="name" type="text" placeholder="Full name" sx={{mb:3,}} />
                  <Typography sx={{ color: red[500] }}>{error}</Typography>
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
                  <FormControl sx={{mt:3.5,}}>
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
                  <FormControl sx={{mt:3.5,}}>
                      <FormLabel  sx={{mb:1,color:'inherit',fontSize:24}}>{"Billing Details"}</FormLabel>
                      <RadioGroup
                          row
                          aria-labelledby="demo-customized-radios"
                          name="customized-radios"
                      >
                          <FormControlLabel value="Same as shipping address" control={<BpRadio />} label="Same as shipping address" />
                      </RadioGroup>
                  </FormControl>
                  <ActionButtons {...props} nextStep={validate2} />
                </Box>                
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Box sx={{border:'1px solid #F2F2F2',borderRadius:12,p:4}}>
                            <Grid container sx={{mb:2}}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Link href="/shopping-cart"sx={{display:'flex',alignItems:'center', background:'#FAFAFA',borderRadius:6,height:130}}><img className="w-100" src={ProductImage} alt=""/></Link>
                                </Grid>
                                <Grid item xs={12} sm={6} md={8} sx={{ display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <Box sx={{ml:2}}>
                                        <Typography gutterBottom variant="h6">
                                            {"Whole milk 1 pint"}
                                        </Typography>  
                                        <Typography gutterBottom variant="h6" sx={{mb:0}}>
                                            {"$97"}
                                        </Typography>  
                                    </Box>
                                    <Button size="small" sx={{border:'1px solid #E2E2E2',backgroundColor:'none',p:0,borderRadius:15,minWidth:40,height:40}} ><ClearIcon color="action" fontSize="small" /></Button>                                    
                                </Grid>
                            </Grid>
                            <Grid container sx={{mb:2}}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Link href="/shopping-cart"sx={{display:'flex',alignItems:'center', background:'#FAFAFA',borderRadius:6,height:130}}><img className="w-100" src={ProductImage} alt=""/></Link>
                                </Grid>
                                <Grid item xs={12} sm={6} md={8} sx={{ display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <Box sx={{ml:2}}>
                                        <Typography gutterBottom variant="h6">
                                            {"Whole milk 1 pint"}
                                        </Typography>  
                                        <Typography gutterBottom variant="h6" sx={{mb:0}}>
                                            {"$97"}
                                        </Typography>  
                                    </Box>
                                    <Button size="small" sx={{border:'1px solid #E2E2E2',backgroundColor:'none',p:0,borderRadius:15,minWidth:40,height:40}} ><ClearIcon color="action" fontSize="small" /></Button>                                    
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
                            <Box className="summary" sx={{ display:"flex",alignItems:"center",justifyContent:'center',mt:5}}>
                                <Button className='btn-outline' sx={{pt:1,pb:1,pl:4,pr:4,borderRadius:12}}>{"Edit cart"}</Button>   
                            </Box>
                </Box>
            </Grid>
        </Grid>
    </div>
  );
};

const Three = (props) => {
  console.log("step3 receive user object");
  console.log(props.user);

  const handleLastStep = () => {
    props.lastStep();
    props.completeCallback();
  };

  return (
    <div>
      <h2>Summary user detail</h2>
      <p>Name: {props.user.name}</p>
      <p>Age: {props.user.age}</p>
      <br />
      <ActionButtons {...props} lastStep={handleLastStep} />
    </div>
  );
};
const Checkout = ({}) => {
    
    const [stepWizard, setStepWizard] = useState(null);
    const [user, setUser] = useState({});
    const [activeStep, setActiveStep] = useState(0);

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const assignUser = (val) => {
    console.log("parent receive user callback");
    console.log(val);
    setUser((user) => ({
      ...user,
      ...val
    }));
  };

  const handleStepChange = (e) => {
    console.log("step change");
    console.log(e);
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    alert("You r done. TQ");
  };


   
  return (
    <Box className='checkout_section' sx={{mt:8,mb:6,}}>
        <Container>
            <Breadcrumbs
                    sx={{mt:4,mb:4}}
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                    className='breadcrumbs'
                >
                    <Link underline="none" color="inherit" href="/">
                        {"Home"}
                    </Link>
                    <Link underline="none" color="inherit" href="/shopping-cart">
                        {"Shopping Cart"}
                    </Link>
                    <Typography color="text.primary">{"Checkout"}</Typography>
            </Breadcrumbs>
            <Typography className='heading3' gutterBottom variant="h1" sx={{ mt:5}}>
                    {"Checkout"}
            </Typography>   
            <Grid container  sx={{mb:6,}}>
                <Grid item xs={12} sm={6} md={4}>
                      <Stepper className="indicators" activeStep={activeStep}>
                        <Step label="Step 1" />
                        <Step label="Personal Detail" />
                        <Step label="Confirmation" />
                    </Stepper>
                </Grid>
            </Grid>
            <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
                <One userCallback={assignUser} />
                <Two user={user} userCallback={assignUser} />
                <Three user={user} completeCallback={handleComplete} />
            </StepWizard>
      </Container>
    </Box>
  );
};

export default Checkout;