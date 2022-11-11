import React, { useState, useEffect } from "react";
import "./index.scss";
import Login from "./Login";
// import SignUp from "./SignUp";
// import ForgotPassword from "./ForgotPassword";
// Material Ints
import {
    styled,
    IconButton, 
    Dialog,
    DialogTitle,
    DialogContent,
    Slide,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 0 }} {...other}>
      {onClose ? (
        <IconButton
        className="close-btn"
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            color: (theme) => theme.palette.grey[700],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const LoginDialog = ({isDialogOpened, handleCloseDialog }) => {
    useEffect(() => {
        handleClickOpen();
    }, []);

    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth] = React.useState("md");
    const handleClickOpen = () => {
     };
     const handleClose = () => {
        handleCloseDialog(false);
    };

    return (
        <>
            <BootstrapDialog
                TransitionComponent={Transition}
                keepMounted
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={isDialogOpened}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                className="logindialog"
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                </BootstrapDialogTitle>
                <DialogContent sx={{ m:0,p:0,}}>
                    
                    <Login/>
                    {/* <SignUp/> */}
                    {/* <ForgotPassword/> */}
                </DialogContent>
            </BootstrapDialog>
        </>
    )
};

export default LoginDialog;