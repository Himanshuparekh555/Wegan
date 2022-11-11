import * as React from 'react';
import "./index.scss";

// Material Ints
import {
    Grid,
    Box,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    TextField,
    Autocomplete,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const top100Films = () => [
  { title: 'Bakery Items',},
  { title: 'Dairy Items',},
  { title: 'Dry Items',},
  { title: 'Flour Items',},
  { title: 'Organic Items',},
];


const ProductFilters = ({}) => {
    // Sort by
    const [sortby, setSortBy] = React.useState('');
    const handleChange = (event) => {
        setSortBy(event.target.value);
    };
    return (
        <>
            <Grid container spacing={{sm:3,md:3,lg:5}}  sx={{ display:"flex",alignItems:"center",justifyContent:"space-between",mt:8}}>
                <Grid item xs={12} sm={6} md={4} sx={{ mb:3}}>
                    <Box className="search_box" sx={{ display:"flex",alignItems:"center",border:'1px solid #F2F2F2',borderRadius:15,pl:2,}}>
                        <SearchIcon color="disabled"/>
                        <FormControl fullWidth>
                            <Autocomplete
                            id="free-solo-demo"
                            freeSolo
                            options={top100Films().map((option) => option.title)}
                            renderInput={(params) => <TextField {...params} 
                            placeholder="Search here…"
                            />
                            }
                            />                           
                        </FormControl>                       
                    </Box>
                    
                </Grid>
                <Grid item xs={12} sm={6} md={2} sx={{ mb:3}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{"Sort by"}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            label="Sort By"
                            id="demo-simple-select"
                            value={sortby}
                            onChange={handleChange}
                            >
                            <MenuItem value={1}>{"Popularity"}</MenuItem>
                            <MenuItem value={2}>{"Price — Low to High"}</MenuItem>
                            <MenuItem value={3}>{"Price — High to Low"}</MenuItem>
                            <MenuItem value={4}>{"Newest First"}</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>       
            </Grid>
        </>
    )
};

export default ProductFilters;