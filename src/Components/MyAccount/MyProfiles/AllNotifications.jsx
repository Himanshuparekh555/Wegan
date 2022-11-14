import * as React from 'react';
import "../index.scss";
import {ReactComponent as NotificationIcon} from '../../../Images/svg/notification_icon.svg';
// Material Ints
import {
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar, 
} from "@mui/material";

function AllNotifications() {
      return (
          <>
            <Typography gutterBottom variant="h2" sx={{ fontSize:18,fontWeight:500,mb:3.5}}>
                {"All Notifications"}
            </Typography>
             <List sx={{ p:0 }}>
                <ListItem sx={{ p:0,mb:2 }}>
                    <ListItemAvatar>
                    <Avatar>
                        <NotificationIcon/>
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={
                        <>
                            <Typography gutterBottom sx={{ fontSize:15,fontWeight:400,}}>
                                {"Grab Today's Trending Deals from your favourite categories!"}
                            </Typography>
                        </>
                        
                    } 
                    secondary={
                        <>
                            <Typography gutterBottom sx={{ fontSize:13,fontWeight:400,}}>
                                {"30 Oct, 2022"}
                            </Typography>
                        </>
                    } />
                </ListItem>
                <ListItem sx={{ p:0,mb:2 }}>
                    <ListItemAvatar>
                    <Avatar>
                        <NotificationIcon/>
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={
                        <>
                            <Typography gutterBottom sx={{ fontSize:15,fontWeight:400,}}>
                                {"Grab Today's Trending Deals from your favourite categories!"}
                            </Typography>
                        </>
                        
                    } 
                    secondary={
                        <>
                            <Typography gutterBottom sx={{ fontSize:13,fontWeight:400,}}>
                                {"30 Oct, 2022"}
                            </Typography>
                        </>
                    } />
                </ListItem>
            </List>
          </>
      )
};

export default AllNotifications;