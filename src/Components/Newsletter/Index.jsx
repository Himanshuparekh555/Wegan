import * as React from 'react';
import "./index.scss";

// Material Ints
import {
    Grid,
    Box,
    Container,
    Typography,
    TextField,
    Button,
} from "@mui/material";



const Newsletter = ({}) => {
    return (
        <>
            <Container>
                <Box className='newsletter' padding={{xs:'0',md:'30px',lg:'64px'}} sx={{ mt:10,borderRadius:12}}>    
                    <Grid container spacing={7} sx={{ display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <Grid item xs={12} sm={7} md={7}>
                            <Typography className='heading3' variant="h3" sx={{ mb:10,textAlign:'center',lineHeight:'32px'}}>
                                {"Sign Up to our Newsletter"}
                            </Typography> 
                            <Box backgroundColor={{xs:'#FAFAFA',md:'#FAFAFA',lg:'#ffffff'}}  sx={{ display:"flex",alignItems:"center",borderRadius:10,height:60}}>
                                <TextField fullWidth sx={{pl:2}}  id="newsletter" placeholder='Your email address' variant="outlined" />
                                <Box width={{xs:'200px',md:'200px',lg:'200px'}}>
                                <Button className="btn-theme w-100" sx={{ height:60,borderRadius:10,}}>{"Subscribe"}</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>             
                </Box>
            </Container>
        </>
    )
};

export default Newsletter;