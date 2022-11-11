import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";
import "../index.scss";
import GiftIcon from '../../../Images/gift_icon.png';
// Material Ints
import {
    Box,
    Grid,
    Typography,
    Link,
    Button,
    Divider,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { grey } from '@mui/material/colors';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const GiftCard = ({}) => {
    const [inputFields, setInputFields] = useState([{
      
    }]);
    const addInputField = ()=>{
        setInputFields([...inputFields, {
        
        } ])
      
    }
        const removeInputFields = (index)=>{
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
   }
    const handleChange = (index, evnt)=>{    
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list); 
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
      return (
          <>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',mb:3}}>
                <Typography gutterBottom variant="h2" sx={{ fontSize:18,fontWeight:500,mb:0}}>
                    {"Wegan Gift Card"}
                </Typography>
                <Box>
                    <Link href="#giftcard" underline="none" sx={{ fontSize:14,fontWeight:500,cursor:'pointer'}}>{"Buy a Gift Card"}</Link>
                    <Link onClick={handleClickOpen} underline="none" sx={{ fontSize:14,fontWeight:500,ml:2,cursor:'pointer'}}>{"Check Gift Card Balance"}</Link>
                </Box>
            </Box>
            <Box sx={{backgroundColor:"#CFE9CC",borderRadius:'20px',p:3.5,mb:2.5}}>
                <Grid container spacing={3} sx={{mb:4,}}>
                    <Grid item xs={12} sm={12} md={8}>
                        <Typography gutterBottom variant="h5" sx={{ fontSize:16,fontWeight:500,mb:0,display:'flex',alignItems:'center'}}>
                            <img src={GiftIcon}/>&nbsp;&nbsp;{"0 ACTIVE GIFT CARD"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Typography sx={{ fontSize:18,fontWeight:600,mb:0,textAlign:'right'}}>
                            {"$500"}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6} sx={{display:'flex',alignItems:'center',flexWrap:'wrap'}}>
                        <Box sx={{mr:6,}}>
                            <Typography sx={{ fontSize:14,fontWeight:400,mb:0.5}}>
                                {"Received from"}
                            </Typography>
                            <Typography gutterBottom variant="body" sx={{ fontSize:16,fontWeight:500,mb:0}}>
                                {"Wegan"}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize:14,fontWeight:400,mb:0.5}}>
                                {"Gift Card No."}
                            </Typography>
                            <Typography gutterBottom variant="body" sx={{ fontSize:16,fontWeight:500,mb:0}}>
                                {"6000170164217689"}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
             <Button onClick={handleClickOpen} sx={{color:'#000',borderRadius:10,p:0}}><Box sx={{width:40,height:40,backgroundColor:'#CFE9CC',borderRadius:15,display:"flex",alignItems:'center',justifyContent:'center',mr:2}}><AddIcon sx={{ color: grey[900] }} /></Box> {"Add A Gift Card"}</Button>
             <Box id="giftcard">
                <Typography gutterBottom variant="h2" sx={{ fontSize:18,fontWeight:500,mt:6,mb:3}}>
                    {"Buy a Wegan Gift Card"}
                </Typography>            
                  {
                      inputFields.map((data, index)=>{
                          const {}= data;
                          return(
                            <>
                            {(inputFields.length!==1)?
                            <Divider/>
                            :''}
                             <Grid container key={index}>                                
                                    {(inputFields.length!==1)?
                                    <Grid item xs={12} sx={{textAlign:'right',mt:2,mb:2}}>
                                        <Button sx={{minWidth:'40px',minHeight:'40px',borderRadius:20,p:0,color: grey[800]}} variant="outlined" onClick={removeInputFields}><CloseIcon fontSize="small" sx={{ color: grey[800] }} /></Button> 
                                     </Grid>
                                    :''}
                               
                                <Grid item xs={12} sm={12} md={6}>
                                    <TextField sx={{mb:2,}} fullWidth placeholder="Receiver’s Name*" variant="outlined" />
                                    <TextField sx={{mb:2,}} fullWidth placeholder="Receiver’s Email ID*" variant="outlined" />
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={12} md={8} sx={{mb:2,}}>
                                            <TextField fullWidth placeholder="Card Value in $" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4} sx={{mb:2,}}>
                                            <TextField fullWidth placeholder="No of Cards" variant="outlined" />
                                        </Grid>
                                    </Grid>
                                    <TextField sx={{mb:2,}} fullWidth placeholder="Gifter’s Name (Optional)" variant="outlined" />
                                    <TextField sx={{mb:2,}} fullWidth placeholder="Write a message (Optional, 100 characters)" variant="outlined" multiline={true} rows={3}/>
                                    
                                </Grid>
                            </Grid>
                            
                            </>
                          )
                      })
                  }
                <Button onClick={addInputField} sx={{color:'#000',borderRadius:10,p:0,mt:2}}><Box sx={{width:40,height:40,backgroundColor:'#CFE9CC',borderRadius:15,display:"flex",alignItems:'center',justifyContent:'center',mr:2}}><AddIcon sx={{ color: grey[900] }} /></Box> {"Buy Another Gift Card"}</Button>
                <Box sx={{mt:3}}>
                    <Button className='btn-theme' sx={{pt:1.8,pb:1.8,pl:3.5,pr:3.5,borderRadius:10}}>{"Buy Gift Card For $200"}</Button>
                </Box> 
            </Box>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <Button onClick={handleClose} sx={{position:'absolute',top:'10px',right:'10px',p:0,minWidth:0}}><CloseIcon sx={{ color: grey[500] }}/></Button>
                <DialogTitle>
                    <Typography gutterBottom variant="h4" sx={{ fontSize:18,fontWeight:500,mb:1}}>
                        {"Add a Gift Card"}
                    </Typography>       
                    <Typography sx={{ fontSize:13,fontWeight:400,}}>
                        {"Gift Card number & PIN are sent to your email inbox"}
                    </Typography>       
                     
                </DialogTitle>
                <DialogContent>
                    <TextField fullWidth sx={{mb:2,}} placeholder="Gift 
                    Card Number*" variant="outlined" />
                    <TextField fullWidth placeholder="PIN*" variant="outlined" />
                </DialogContent>
                <DialogActions sx={{justifyContent:'center'}}>
                    <Button className='btn-theme' sx={{pt:1.8,pb:1.8,pl:3.5,pr:3.5,borderRadius:10,mb:3}}>{"Add Gift Card to Account"}</Button>
                </DialogActions>
            </Dialog>
          </>
      )
};

export default GiftCard;