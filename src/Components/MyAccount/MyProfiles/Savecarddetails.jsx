import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";
import "../index.scss";
import {ReactComponent as HomeIcon} from '../../../Images/home_icon.svg';
// Material Ints
import {
    Box,
    Typography,
    IconButton,
    Button,
    Card,
    CardContent,
    Input,
} from "@mui/material";
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { grey } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';


const Savecarddetails = ({}) => {
      const [isOpened, setIsOpened] = useState(false);
      const [visible, setVisible] = useState(true);
      function toggle() {
        setIsOpened(wasOpened => !wasOpened);
        setVisible((prev) => !prev);
      }
      return (
          <>
            <Typography gutterBottom variant="h2" sx={{ fontSize:18,fontWeight:500,mb:3.5}}>
                {"Manage Saved Cards"}
            </Typography>
            <Card elevation={0} sx={{backgroundColor:"#FAFAFA",borderRadius:5,mb:4}}>
              <CardContent sx={{display: 'flex',justifyContent:'space-between'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {isOpened && (
                  <>
                  <Box sx={{display: 'flex',alignItems:'center'}}>
                    <Input sx={{pt:0,pb:0,mb:1}} defaultValue="HDFC Bank Credit Card" />
                    <Button  onClick={toggle} variant="text">{"SAVE"}</Button>
                  </Box>
                  </>
                )}
                {visible && (    
                <Typography gutterBottom variant="h5" sx={{fontWeight:500,fontSize:16,mb:1}}>
                  {"HDFC Bank Credit Card"}
                </Typography>
                )}
                <Typography variant="body2" color="text.secondary" sx={{fontWeight:400,fontSize:14,mb:1}}>
                  {"**** **** **** 7868"}
                </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <IconButton aria-label="edit">
                <EditIcon onClick={toggle} sx={{ fontSize: 20 }}/></IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon  sx={{ fontSize: 20 }}/></IconButton>                      
                </Box>
              </CardContent>
            </Card>  
          </>
      )
};

export default Savecarddetails;