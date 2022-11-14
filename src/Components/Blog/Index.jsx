import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "./index.scss";

import {ReactComponent as InstaIcon} from '../../Images/instagram_icon.svg';
import {ReactComponent as TwitterIcon} from '../../Images/twitter_icon.svg';
import {ReactComponent as FBIcon} from '../../Images/facebook_icon.svg';
// Material Ints
import {
    Grid,
    Box,
    Container,
    Typography,
    Button,
    Card,
    Link,
    CardContent,
} from "@mui/material";
import ProductImage from '../../Images/blog_img.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
// Product Data
const ProductCardData = [
    {   img:ProductImage, 
        title: 'Vegan recipe inspired other cultures',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove',
        alt:'Blog Image',
        author:'WEGAN FOODS',
        date:'NOVEMBER 9, 2022',
    }, 
    {  img:ProductImage, 
        title: 'Vegan recipe inspired other cultures',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove',
        alt:'Blog Image',
        author:'WEGAN FOODS',
        date:'NOVEMBER 9, 2022',
    },
    {  img:ProductImage, 
        title: 'Vegan recipe inspired other cultures',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove',
        alt:'Blog Image',
        author:'WEGAN FOODS',
        date:'NOVEMBER 9, 2022',
    },
    {  img:ProductImage, 
        title: 'Vegan recipe inspired other cultures',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove',
        alt:'Blog Image',
        author:'WEGAN FOODS',
        date:'NOVEMBER 9, 2022',
    },
    {  img:ProductImage, 
        title: 'Vegan recipe inspired other cultures',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove',
        alt:'Blog Image',
        author:'WEGAN FOODS',
        date:'NOVEMBER 9, 2022',
    },{  img:ProductImage, 
        title: 'Vegan recipe inspired other cultures',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove',
        alt:'Blog Image',
        author:'WEGAN FOODS',
        date:'NOVEMBER 9, 2022',
    }, 
];

const Blog = () => {
    // Like Hooks
    const [likeCount, setLikeCount] = useState(50);
    // Active Hooks
    const [activeBtn, setActiveBtn] = useState("none");

    // handleClick
    const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    } 
    if (activeBtn === 'like'){
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }
  };
    return (
        <>
            <Box sx={{ mt:8,}}>
                <Container>
                    <Typography className='heading3' variant="h3" sx={{ mb:5,}}>
                        {"Recent Articles"}
                    </Typography> 
                     <Grid container spacing={{ xs: 2, sm: 6, md: 6,lg: 6,}}>
                        {ProductCardData.map((data, index)=> (
                            <Grid item xs={12} sm={6} md={4} key={index}>                            
                                <Card className='blog-card' sx={{ boxShadow:0,position:'relative',overflow:'inherit'}}>         
                                    <Box sx={{ position:'relative'}}>                           
                                        <Box className='browseImage' sx={{ position:'relative',borderRadius:'20px',overflow:'hidden'}}>
                                            <NavLink to="/blog-detail">
                                                <img src={data.img} alt={data.alt}/>                        
                                            </NavLink>             
                                        </Box>
                                        <Box className='favorite' sx={{backgroundColor:'#ffffff',width:'70px',height:'70px', p:0,borderRadius:10,position:'absolute',left:'-20px',bottom:'-20px',zIndex:1,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',boxShadow:'rgba(170, 170, 170, 0.15) 0px 0px 8px 2px'}} >
                                            
                                            <Button
                                                className={`${activeBtn === "like" ? "liked" : ""}`}
                                                onClick={handleLikeClick}
                                                sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',borderRadius:10,p:0.8,minWidth:0}}
                                                >
                                                    <FavoriteIcon fontSize="small" color="disabled"/>                                                
                                                </Button>
                                                <Typography sx={{ color:'#333333',fontSize:'14px',mt:0}}>
                                                 {likeCount}
                                                </Typography>
                                            
                                            </Box>
                                    </Box>
                                    <CardContent sx={{ pl:0,pr:0,pb:3}}>
                                        <Typography className='title' gutterBottom variant="h5" sx={{ mt:3,mb:2,whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden',fontWeight:600}}>
                                            <NavLink to="/blog-detail">
                                                {data.title}
                                            </NavLink>
                                        </Typography>
                                        <Typography className='des' variant="body2" sx={{ color:'#909090',fontSize:'14px'}}>
                                            {data.description}
                                        </Typography>
                                        <Grid container sx={{ display:'flex',justifyContent:'center'}}>
                                            <Grid item xs={6} sm={6} md={6} sx={{ mt:3}}>
                                                <Typography variant="body2" sx={{ color:'#909090',fontSize:'14px'}}>
                                                     {data.author}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6} sm={6} md={6} sx={{ mt:3}}>
                                            <Typography className='des' variant="body2" sx={{ color:'#909090',fontSize:'14px'}}>
                                                {data.date}
                                            </Typography>
                                            </Grid>
                                        </Grid>
                                        <Box sx={{mt:4}}>
                                            <Link href="#" sx={{mr:3}}><InstaIcon/></Link>
                                            <Link href="#" sx={{mr:3}}><TwitterIcon/></Link>
                                            <Link href="#"><FBIcon/></Link>
                                        </Box>
                                    </CardContent>
                                </Card>                                                  
                            </Grid>
                        ))}     
                    </Grid>
                </Container>
            </Box>
        </>
    )
};

export default Blog;