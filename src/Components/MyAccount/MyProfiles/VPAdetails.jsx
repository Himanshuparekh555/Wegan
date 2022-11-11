import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";
import "../index.scss";
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


const TermsConditions = ({}) => {
      return (
          <>
            <Typography gutterBottom variant="h2" sx={{ fontSize:18,fontWeight:500,mb:3.5}}>
                {"No VPAs saved to be shown"}
            </Typography>
            <Typography sx={{mb:1.5,fontSize:14,lineHeight:1.8}}>
                {"Cras in nisi augue. Etiam malesuada augue eu mollis gravida. Pellentesque ut iaculis eros. Aliquam a quam vitae mauris iaculis elementum quis et erat. Fusce nunc arcu, laoreet ac imperdiet nec, pharetra quis dolor. Fusce in neque et nisi malesuada iaculis at et arcu. Fusce efficitur urna sed nibh tempor blandit. Integer lacinia mauris vel commodo ornare. Praesent dui justo, faucibus eget pulvinar eget, sagittis id ante. Aenean cursus ex feugiat, commodo odio et, pulvinar lectus. Morbi facilisis nisi ac dui auctor egestas. "}
            </Typography>
            <Typography sx={{mb:1.5,fontSize:14,lineHeight:1.8}}>
                {"Cras in nisi augue. Etiam malesuada augue eu mollis gravida. Pellentesque ut iaculis eros. Aliquam a quam vitae mauris iaculis elementum quis et erat. Fusce nunc arcu, laoreet ac imperdiet nec, pharetra quis dolor. Fusce in neque et nisi malesuada iaculis at et arcu. Fusce efficitur urna sed nibh tempor blandit. Integer lacinia mauris vel commodo ornare. Praesent dui justo, faucibus eget pulvinar eget, sagittis id ante. Aenean cursus ex feugiat, commodo odio et, pulvinar lectus. Morbi facilisis nisi ac dui auctor egestas. "}
            </Typography>
          </>
      )
};

export default TermsConditions;