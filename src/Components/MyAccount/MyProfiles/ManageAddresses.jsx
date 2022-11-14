import React, { useState, } from "react";
import "../index.scss";
import {ReactComponent as HomeIcon} from '../../../Images/home_icon.svg';
// Material Ints
import {
    Grid,
    Box,
    Button,
    Typography,
    TextField,
    IconButton,
    Card,
    CardContent,
    styled,
    Chip,
    Radio,
    RadioGroup,
    FormControl,
    FormLabel,
    FormControlLabel,
} from "@mui/material";
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { grey } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
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
const ManageAddresses = () => {
      const [isOpened, setIsOpened] = useState(false);
      const [visible, setVisible] = useState(true);
      function toggle() {
        setIsOpened(wasOpened => !wasOpened);
        setVisible((prev) => !prev);
      }
      return (
          <>
                  <Typography gutterBottom variant="h2" sx={{ fontSize:18,fontWeight:500,mb:3.5}}>
                      {"Manage Addresses"}
                  </Typography>
                   {visible && (   
                  <Card elevation={0} sx={{backgroundColor:"#FAFAFA",borderRadius:5,mb:4}}>
                    <CardContent sx={{display: 'flex',justifyContent:'space-between'}}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography gutterBottom variant="h5" sx={{fontWeight:500,fontSize:16}}>
                        {"Mohd Firoz"}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{fontWeight:400,fontSize:14,mb:1}}>
                        {"9424650210"}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {"82, Harun Colony, Khajrana, Indore, Madhya Pradesh - 452016"}
                      </Typography>
                      <Chip sx={{backgroundColor:'#CFE9CC',pt:1,pb:1,pl:2,pr:2,height:40,width:120, borderRadius:15,fontWeight:500,mt:2,textAlign:'center'}} icon={<HomeIcon />} label={
                        <>
                        <Typography variant="body2" color="text.secondary" sx={{fontWeight:500,fontSize:14,fontFamily:'"Poppins", sans-serif !important',color:'#000'}}>
                        {"Home"}
                      </Typography>
                      </>
                      } />
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <IconButton onClick={toggle} aria-label="edit">
                      <EditIcon sx={{ fontSize: 20 }}/></IconButton>
                      <IconButton aria-label="delete">
                        <DeleteIcon  sx={{ fontSize: 20 }}/></IconButton>                      
                      </Box>
                    </CardContent>
                  </Card>      
                  )}
                        {visible && (             
                        <Button onClick={toggle} variant="text" sx={{color:'#000',borderRadius:10}}><Box sx={{width:40,height:40,backgroundColor:'#CFE9CC',borderRadius:15,display:"flex",alignItems:'center',justifyContent:'center',mr:2}}><AddIcon sx={{ color: grey[900] }} /></Box> {"Add A New Address"}</Button>
                        )}
                        {isOpened && (
                      <Box sx={{mt:4}}>
                        <Typography gutterBottom variant="h2" sx={{ fontSize:18,fontWeight:500,mb:3.5}}>
                          {"Add a New Address"}
                        </Typography>
                        <Button className='btn-theme' variant="contained" sx={{mb:3,pt:1.5,pb:1.5,pl:4,pr:4,borderRadius:10}}>
                            <LocationSearchingIcon sx={{mr:1}}/> {"Use my Current Location"}
                        </Button>
                        <Grid container spacing={2} sx={{mb:4,}}>
                            <Grid item xs={12} sm={6} md={6}>
                                <TextField fullWidth placeholder="Your name"  value="" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <TextField fullWidth placeholder="Mobile number"  value="" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <TextField fullWidth placeholder="Pincode"  value="" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <TextField fullWidth placeholder="Locality"  value="" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth placeholder="Address (area and street)"  value="" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <TextField fullWidth placeholder="City"  value="" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <TextField fullWidth placeholder="State"  value="" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <TextField fullWidth placeholder="Landmark"  value="" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <TextField fullWidth placeholder="Alternate number (Optional)"  value="" />
                            </Grid>
                        </Grid>
                        <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">{"Address type"}</FormLabel>
                         <RadioGroup
                              row
                              aria-labelledby="demo-customized-radios"
                              name="customized-radios"
                          >
                              <FormControlLabel value="Home" control={<BpRadio />} label="Home" />
                              <FormControlLabel value="Work (Office)" control={<BpRadio />} label="Work (Office)" />
                          </RadioGroup>
                      </FormControl>
                      <Typography gutterBottom variant="h2" sx={{ fontSize:18,fontWeight:500,mt:4,mb:2}}>
                        {"Billing Details"}
                      </Typography>
                        <RadioGroup
                          row
                          defaultValue="Same as shipping address"
                          aria-labelledby="demo-customized-radios"
                          name="customized-radios"
                        >
                          <FormControlLabel value="Same as shipping address" control={<BpRadio />} label="Same as shipping address" />
                        </RadioGroup>
                        <Grid container spacing={2} sx={{mt:4,}}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Button onClick={toggle} className='btn-outline w-100' sx={{pt:1.5,pb:1.5,borderRadius:10}}>{"Cancel"}</Button>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Button className='btn-theme w-100' sx={{pt:1.5,pb:1.5,borderRadius:10}}>{"Save Address"}</Button> 
                            </Grid>
                          </Grid>
                    </Box>
                  )}
          </>
      )
};

export default ManageAddresses;