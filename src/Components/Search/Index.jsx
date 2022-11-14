import React, { } from "react";
import "./index.scss";

// Material Ints
import {
    Box,
    Button,
    Autocomplete,
    TextField,
    CircularProgress,
} from "@mui/material";
import {ReactComponent as SearchIcon} from '../../Images/svg/search_icon.svg';
// Search Delay
function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
const Search = ({}) => {
     // Auto Search
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;

    React.useEffect(() => {
        let active = true;

        if (!loading) {
        return undefined;
        }

        (async () => {
        await sleep(1e3); // For demo purposes.

        if (active) {
            setOptions([...SearchData]);
        }
        })();

        return () => {
        active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
        setOptions([]);
        }
    }, [open]);
    const SearchData = [
        { title: 'Lorem Ipsum',},
        { title: 'Lorem Ipsum',},
        { title: 'Lorem Ipsum',},
        { title: 'Lorem Ipsum',},
        { title: 'Lorem Ipsum',},
    ];
    return (
        <>
         <Box className='search_box' sx={{ display:"flex",alignItems:"center",borderRadius:3}} marginTop={{xs:3,md:3, lg:7}}>
            <Autocomplete
                sx={{ width: 800}}
                id="asynchronous-demo"                              
                open={open}
                freeSolo
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                isOptionEqualToValue={(option, value) => option.title === value.title}
                getOptionLabel={(option) => option.title}
                options={options}
                loading={loading}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    placeholder="Search Here"
                    InputProps={{
                            disableUnderline: false,
                        ...params.InputProps,
                        endAdornment: (
                        <React.Fragment>
                            {loading ? <CircularProgress color="inherit" size={20} /> : null}
                            {params.InputProps.endAdornment}
                        </React.Fragment>
                        ),
                    }}
                    />
                )}
            />
            <Button disableRipple variant="text" sx={{p:0,"&.MuiButtonBase-root:hover": {
                bgcolor: "transparent"
            }}}><SearchIcon/></Button>
        </Box>
        </>
    )
};

export default Search;