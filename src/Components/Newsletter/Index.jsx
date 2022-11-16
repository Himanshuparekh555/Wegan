import React, { useEffect,useState  } from "react";
import "./index.scss";
import FormEmailComponent from "./NewsletterEmail";
// Material Ints
import {
    Grid,
    Box,
    Container,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import { red } from '@mui/material/colors';
const emailState = {
    email: '',
    error: ''
}
function Newsletter() {
    const [emailstatus, setEmailstatus] = useState({});
    function onSubmit(res) {
        setEmailstatus(res);
    }
    useEffect(() => {
        console.log("From App.js ", emailstatus);
    }, [emailstatus]);
    return (
        <>
            <Container>
                <Box className='newsletter' padding={{xs:'0',md:'30px',lg:'64px'}} sx={{ mt:10,borderRadius:12}}>    
                    <Grid container spacing={7} sx={{ display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <Grid item xs={12} sm={7} md={7}>
                            <Typography className='heading3' variant="h3" sx={{ mb:10,textAlign:'center',lineHeight:'32px'}}>
                                {"Sign Up to our Newsletter"}
                            </Typography> 
                            {/* {JSON.stringify(emailstatus)} */}
                            <FormEmailComponent onEmailSubmit={onSubmit} />
                        </Grid>
                    </Grid>             
                </Box>
            </Container>
        </>
    )
};

export default Newsletter;