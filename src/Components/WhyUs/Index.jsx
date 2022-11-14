import * as React from 'react';
import "./index.scss";


import ReturnIcon from '../../Images/svg/return_icon.svg';
import ProfileIcon from '../../Images/svg/profile_icon.svg';
import QualityIcon from '../../Images/svg/quality_icon.svg';

// Material Ints
import {
    Grid,
    Box,
    Container,
    Typography,
} from "@mui/material";

// Categories Data
const WhyusContent = [
    {   
        icon:ReturnIcon,
        title: 'Easy Returns',
        description:'Our return policy is simple and that is why customers love our shop.',
    }, 
     {  icon:ProfileIcon, 
        title: 'Customer Service',
        description:'We offer amazing customer service no matter what happens.',
    }, 
    {   icon:QualityIcon,
        title: 'High Quality',
        description:'All of our products go through very strict inspection before we dispatch them.',
    },  
];


const WhyUs = () => {
    return (
        <>
            <Box className='whyus_section' padding={{xs:'80px 0',md:'80px 0',lg:'100px 0'}}>
                <Container>
                    <Typography className='heading3' variant="h3" sx={{ textAlign:'center',mb:7}}>
                        {"Why People Choose Us"}
                    </Typography> 
                    <Grid container spacing={6} sx={{ display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                        {WhyusContent.map((data, index)=> (
                            <Grid item xs={12} sm={6} md={4} sx={{ textAlign:'center'}} key={index}>   
                                <Typography variant="button" display="block" sx={{ borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <img src={data.icon} alt=""/>
                                </Typography>                            
                                <Typography className='name' variant="h4" margin={{xs:'20px 0',md:'20px 0',lg:'32px 0'}} sx={{ mt:4,mb:4}}>
                                    {data.title}
                                </Typography> 
                                <Typography className='des' variant="body1" gutterBottom>
                                    {data.description}
                                </Typography> 
                            </Grid>
                        ))}
                    </Grid>                     
                </Container>
            </Box>
        </>
    )
};

export default WhyUs;