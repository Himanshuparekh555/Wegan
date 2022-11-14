import * as React from 'react';
import "./index.scss";


import HomeTopSection from "./HomeTopSection";
import NewArrivalSection from "./NewArrivalsBanners";
import ProductCategories from "../Components/ProductCategories/Index";
import HomeProductGrid from "../Components/Products/Index";
import WhyUs from "../Components/WhyUs/Index";
import CustomerReview from "../Components/CustomerReview/Index";
import Newsletter from "../Components/Newsletter/Index";

const HomePage = () => {
    return (
        <>
            <HomeTopSection/>
            <NewArrivalSection/>
            <ProductCategories/>
            <HomeProductGrid/>
            <WhyUs/>
            <CustomerReview/>
            <Newsletter/>
        </>
    )
};

export default HomePage;