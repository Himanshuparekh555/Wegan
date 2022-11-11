import React, { useState,useEffect  } from "react";
import {NavLink,useNavigate} from "react-router-dom";
import "./index.scss";
import SearchBox from "../../Components/Search/Index";
import LoginDialog from "../../Components/Logref/Dialog";
// ICONS
import {ReactComponent as InstaIcon} from '../../Images/instagram_icon.svg';
import {ReactComponent as TwitterIcon} from '../../Images/twitter_icon.svg';
import {ReactComponent as FBIcon} from '../../Images/facebook_icon.svg';
import {ReactComponent as SearchIcon} from '../../Images/header_search_icon.svg';
import {ReactComponent as CartIcon} from '../../Images/cart_icon.svg';
import {ReactComponent as ProfileIcon} from '../../Images/profile_icon.svg';
import {ReactComponent as LogoIcon} from '../../Images/logo.svg';
import {ReactComponent as HomeIcon} from '../../Images/home_icon.svg';
import {ReactComponent as BlogIcon} from '../../Images/blog_icon.svg';
import {ReactComponent as ContactIcon} from '../../Images/contact_icon.svg';
import {ReactComponent as MyorderIcon} from '../../Images/svg/myorder_icon.svg';
import {ReactComponent as WhishlistIcon} from '../../Images/svg/heart_icon.svg';

import {ReactComponent as NotificationIcon} from '../../Images/svg/notification_icon.svg';
import {ReactComponent as LogoutIcon} from '../../Images/svg/logout_icon.svg';

// import {ReactComponent as ChatIcon} from '../../Images/svg/chat_icon.svg';
// import {ReactComponent as CouponIcon} from '../../Images/svg/coupon_icon.svg';
// import {ReactComponent as GiftIcon} from '../../Images/svg/gift_icon.svg';

import {ReactComponent as BakeryIcon} from '../../Images/svg/bakery_icon.svg';
import {ReactComponent as DairyIcon} from '../../Images/svg/dairy_icon.svg';
import {ReactComponent as DryfruitsIcon} from '../../Images/svg/dryfruits_icon.svg';
import {ReactComponent as FlourmillIcon} from '../../Images/svg/flourmill_icon.svg';
import {ReactComponent as OrganicveggiesIcon} from '../../Images/svg/organicveggies_icon.svg';
import {ReactComponent as PerfumeIcon} from '../../Images/svg/perfume_icon.svg';
import {ReactComponent as CometicsIcon} from '../../Images/svg/cometics_icon.svg';
import {ReactComponent as SupplimentsIcon} from '../../Images/svg/suppliments_icon.svg';
import {ReactComponent as OrganicjuiceIcon} from '../../Images/svg/organicjuice_icon.svg';

// Material Ints
import {
    Grid,
    Box,
    Container,
    Typography,
    Menu,
    Button,
    Link,
    Badge, 
    IconButton,
    styled,
    alpha,
    MenuList,
    MenuItem,
    Dialog,
    Toolbar,
    AppBar,
    Slide,
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { grey } from '@mui/material/colors';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: "#A4D59E",
    right: 0,
    top: 0,
    fontSize:'10px',
    minWidth: '16px',
    height:'16px',
    padding:'0',
  },
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "0",
    },
    "& .MuiMenuItem-root": {
      padding: "10px 16px",
      "& .MuiTypography-root": {
        display: "flex",
        alignItems: "center",
        fontFamily: "Muli",
        color: "inherit",
        "& .MuiSvgIcon-root": {
          fontSize: 20,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
}));

// Search Dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Header = ({props}) => {
    // Header On Scroll Sticky
    const [activeClass, setActiveClass] = useState('');
    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
        window.removeEventListener('scroll', stickNavbar);
        };
    }, []);
    const stickNavbar = () => {
        if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 40 ? setActiveClass('active') : setActiveClass('');
        }
    };
    // Navigation toggleclass
    const [isOpened, setIsOpened] = useState(false);    
    function SubMenuToggleClass() {
        setIsOpened(wasOpened => !wasOpened);
    }
    const [isActive, setActive] = useState("false");
    const MenuToggleClass = () => {
        setActive(!isActive);
    };
    // Dropdown
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [menu, setMenu] = React.useState(null);
    const openMenu = Boolean(menu);
    const handleMenuClick = (event) => {
        setMenu(event.currentTarget);
    };
    const handleMenuClose = () => {
        setMenu(null);
    };

    // Search Dialog
    const [search, setSearch] = React.useState(false);

    const handleClickOpenSearch = () => {
        setSearch(true);
    };

    const handleCloseSearch = () => {
        setSearch(false);
    };

    // Dialog popup 
    const [dialog, setDialog] = React.useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const navigate = useNavigate();
     const navigateToProductList = () => {
    // navigate to My Account
         navigate('/product');
    };
    const navigateToMyOrder = () => {
    // navigate to My Order
         navigate('/my-order');
    };
    const navigateToMyAccount = () => {
    // navigate to My Account
         navigate('/my-account');
    };
     const navigateToCart = () => {
    // navigate to My Account
         navigate('/shopping-cart');
    };
    return (
        <>
            <header>
                <Box className='topbar'>
                    <Container>                        
                        <Grid container sx={{ display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <Grid item xs={6} sm={4} md={6.5} display={{xs: 'block', md: 'flex',lg: 'flex'}} sx={{ alignItems:"center",justifyContent:"end"}}>
                                <Box className="social_follow">
                                    <Link href="#"><InstaIcon/></Link>
                                    <Link href="#"><TwitterIcon/></Link>
                                    <Link href="#"><FBIcon/></Link>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={4} md={4}>
                                <Box className='auction_btn' sx={{ display:"flex",alignItems:"center",justifyContent:"end"}}>
                                    <MenuItem  disableRipple  onClick={handleClickOpenSearch}>
                                        <SearchIcon/>
                                    </MenuItem>
                                    <MenuItem disableRipple>
                                        <IconButton onClick={navigateToCart} aria-label="cart">
                                            <StyledBadge badgeContent={1} color="secondary">
                                                <CartIcon />
                                            </StyledBadge>
                                        </IconButton>
                                    </MenuItem>
                                    <MenuItem  disableRipple onClick={() => handleOpen()}>
                                        <ProfileIcon/>
                                    </MenuItem>
                                    <MenuItem disableRipple sx={{ pr:0}}>
                                     <Button
                                        id="profile-button"
                                        aria-controls={open ? "account-menu" : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? "true" : undefined}
                                        variant="contained"
                                        disableElevation
                                        disableRipple
                                        onClick={handleClick}
                                        endIcon={<KeyboardArrowDownIcon />}
                                        sx={{p:0,minWidth:0 }}
                                    >
                                        <ProfileIcon/>
                                        <Box
                                        sx={{ display: { xs: "none", md: "none", lg: "block" },pl:1 }}
                                        >
                                            {"As Guest"}
                                        </Box>
                                    </Button>
                                     <StyledMenu
                                        id="profile-dropdown"
                                        MenuListProps={{
                                            "aria-labelledby": "profile-button",
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        >
                                        <MenuItem>
                                            <Link onClick={navigateToMyOrder} underline="none" xs={{cursor:'pointer'}}>
                                                <MyorderIcon/>&nbsp;&nbsp;{"My Order"}
                                            </Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link onClick={navigateToMyAccount} underline="none">
                                                <WhishlistIcon/>&nbsp;&nbsp;{"Wishlist"}
                                            </Link>
                                        </MenuItem>
                                        {/* <MenuItem
                                        >
                                            <Link href="/" underline="none">
                                                <ChatIcon/>&nbsp;&nbsp;{"My Chats"}
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                        >
                                            <Link href="/" underline="none">
                                                <CouponIcon/>&nbsp;&nbsp;{"Coupon"}
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                        >
                                            <Link href="/" underline="none">
                                                <GiftIcon/>&nbsp;&nbsp;{"Gift Card"}
                                            </Link>
                                        </MenuItem> */}
                                        <MenuItem
                                        >
                                            <Link onClick={navigateToMyAccount} underline="none">
                                                <NotificationIcon/>&nbsp;&nbsp;{"Notifications"}
                                            </Link>
                                        </MenuItem>
                                        <MenuItem
                                        >
                                            <Link href="/" underline="none">
                                                <LogoutIcon/>&nbsp;&nbsp;{"Logout"}
                                            </Link>
                                        </MenuItem>
                                        </StyledMenu>
                                    </MenuItem>
                                </Box>
                            </Grid>
                        </Grid>                    
                    </Container>
                </Box>
                <Box className={`header ${activeClass}`}>
                    <Container>                        
                        <Grid container sx={{ display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <Grid item xs={3} sm={3} md={3}>
                                <NavLink to="/" className='logo' sx={{ display:"block",}}><LogoIcon/></NavLink>
                            </Grid>
                            <Grid item xs={9} sm={9} md={9} sx={{ display:"flex",alignItems:"center",justifyContent:"end"}}>
                                <Box sx={{ display:"flex",alignItems:"center",}}>
                                    <Box className={isActive ? "navigation" : "navigation active"}>
                                        <Button className="closemenu" onClick={MenuToggleClass} variant="text" sx={{ borderRadius:10,minWidth:50,height:50}}><CloseIcon sx={{ color: grey[700]}} style={{marginRight:0}}/></Button>
                                        <MenuList sx={{ display:"flex",alignItems:"center",flexWrap:'wrap'}}>
                                            <MenuItem disableRipple><NavLink to="/"><HomeIcon/> {"Home"}</NavLink></MenuItem>
                                            <MenuItem onClick={SubMenuToggleClass} disableRipple>
                                                <Link                                               
                                                    underline="none"
                                                    color="inherit"
                                                >
                                                    <CartIcon/> {"Shop"} <KeyboardArrowDownIcon style={{marginRight: 0}}/>
                                                </Link>
                                                {isOpened && (
                                                    <Box className="submenu" sx={{ borderRadius:7.5}}>
                                                        <MenuList sx={{ pt:0,pb:0}}>
                                                            <MenuItem onClick={navigateToProductList}><NavLink to="/product"><BakeryIcon/> {"Bakery Items"}</NavLink></MenuItem>
                                                            <MenuItem onClick={navigateToProductList}><NavLink to="/product"><DairyIcon/>{"Dairy Items"}</NavLink></MenuItem>
                                                            <MenuItem onClick={navigateToProductList}><NavLink to="/product"><DryfruitsIcon/>{"Dry Fruits"}</NavLink></MenuItem>
                                                            <MenuItem onClick={navigateToProductList}><NavLink to="/product"><FlourmillIcon/>{"Flour Mill"}</NavLink></MenuItem>
                                                            <MenuItem onClick={navigateToProductList}><NavLink to="/product"><OrganicveggiesIcon/>{"Organic Veggies"}</NavLink></MenuItem>
                                                            <MenuItem onClick={navigateToProductList}><NavLink to="/product"><PerfumeIcon/>{"Perfumes"}</NavLink></MenuItem>
                                                            <MenuItem onClick={navigateToProductList}><NavLink to="/product"><CometicsIcon/>{"Cosemtics"}</NavLink></MenuItem>
                                                            <MenuItem onClick={navigateToProductList}><NavLink to="/product"><SupplimentsIcon/>{"Supplements"}</NavLink></MenuItem>
                                                            <MenuItem onClick={navigateToProductList}><NavLink to="/product"><OrganicjuiceIcon/>{"Organic Juices"}</NavLink></MenuItem>
                                                        </MenuList>
                                                    </Box>
                                                )}
                                            </MenuItem>
                                            <MenuItem disableRipple><NavLink to="/blog"><BlogIcon/> {"Blog"}</NavLink></MenuItem>
                                            <MenuItem disableRipple><NavLink><ContactIcon/> {"Contact"}</NavLink></MenuItem>
                                        </MenuList>
                                    </Box>
                                    <NavLink className="seller" href="#">{"Become a Seller"}</NavLink>
                                    <Box onClick={MenuToggleClass} className={isActive ? "dwawer" : "dwawer active"} sx={{ display:"flex",flexWrap:"wrap",alignItems:"center",ml:3}}>
                                        <span></span>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>    
                </Box>
            </header>
            
            <Dialog
                fullScreen
                open={search}
                onClose={handleCloseSearch}
                TransitionComponent={Transition}
            >
                 <AppBar sx={{ backgroundColor:'#CFE9CC',boxShadow:0,position: 'relative'}} elevation={0} >
                    <Toolbar >
                        <IconButton
                        edge="start"
                        onClick={handleCloseSearch}
                        aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1,color:'#000' }} variant="h6" component="div">
                            {"Search"}
                        </Typography>
                    </Toolbar>
                    </AppBar>
                    <Grid container sx={{ display:"flex",alignItems:"center",justifyContent:"center",height:1000}}>
                        <Grid item xs={12} sm={12} md={5}>
                            <SearchBox/>
                        </Grid>
                    </Grid>
            </Dialog>
            <LoginDialog
                isDialogOpened={isOpen}
                handleCloseDialog={() => setIsOpen(false)}
            />
        </>
    )
};

export default Header;